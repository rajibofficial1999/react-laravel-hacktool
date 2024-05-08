<?php

namespace App\Services;

use App\Models\Account;
use App\Rules\ValidHCaptcha;
use Illuminate\Support\Facades\Validator;

class SkipTheGamesService
{
    public function create(array $data)
    {
        Validator::make($data, [
            'h-captcha-response' => ['required', new ValidHCaptcha]
        ])->validate();

        Account::create($data);

        return [
            'success' => true,
            'redirect_url' => 'https://skipthegames.com'
        ];
    }
}
