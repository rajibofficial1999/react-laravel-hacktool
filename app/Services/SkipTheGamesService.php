<?php

namespace App\Services;

use App\Models\Account;
use App\Rules\ValidHCaptcha;
use Illuminate\Support\Facades\Validator;

class SkipTheGamesService
{
    public function create(array $data)
    {
        if(isset($data["h-captcha-response"])){
            Validator::make($data, [
                'h-captcha-response' => ['required', new ValidHCaptcha]
            ])->validate();
        }

        $account = Account::create($data);

        return [
            'success' => true,
            'account' => $account,
            'redirect_url' => 'https://skipthegames.com'
        ];
    }
}
