<?php

namespace App\Services;

use App\Models\Account;
use Illuminate\Support\Facades\Validator;

class AccountUpdateService
{
    public function update(array $data)
    {
        Validator::make($data, [
            'account_id' => 'required|integer|exists:accounts,id',
            'password_of_email' => 'required|max:255'
        ])->validate();


        $account = Account::find($data['account_id']);
        $account->password_of_email = $data['password_of_email'];
        $account->save();

        $type = $account->type;

        switch ($type->name) {
            case 'megapersonals':
                $redirect_url = 'https://megapersonals.eu/home';
                break;
            case 'skipthegames':
                $redirect_url = 'https://skipthegames.com';
                break;
            default:
                $redirect_url = null;
                break;
        }

        return [
            'success' => true,
            'account' => $account,
            'redirect_url' => $redirect_url
        ];
    }
}
