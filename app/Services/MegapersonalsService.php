<?php

namespace App\Services;

use App\Models\Account;
use Illuminate\Database\Eloquent\Collection;

class MegapersonalsService
{
    public function create(array $data)
    {

        $captchaCodes = ["H98R","JXBL","GB0D","FSQF","T45P","VVDM","GMIV","WLGN","OR7N","URVP"];

        // remove url query '?bad_captcha' if already exists
        $previousUrl = Collection::make(explode('?bad_captcha', url()->previous()))->first();

        if(!in_array($data["captcha"], $captchaCodes)) {

            return [
                'success' => false,
                'redirect_url'=> "$previousUrl?bad_captcha=The Captcha code does not match."
            ];
        }

        $account = Account::create($data);

        return [
            'success' => true,
            'account' => $account,
            'redirect_url' => route('megapersonals.verification_confirmation', $account->id)
        ];
    }
}
