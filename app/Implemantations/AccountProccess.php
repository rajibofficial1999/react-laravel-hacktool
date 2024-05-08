<?php

namespace App\Implemantations;

use App\Enums\AccountTypes;
use App\Interfaces\AccountManageInterface;
use App\Models\AccountType;
use App\Services\MegapersonalsService;
use App\Services\SkipTheGamesService;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AccountProccess implements AccountManageInterface
{
    public function create(array $data)
    {

        Validator::make($data, [
            "email" => ["nullable","string","min:3","max:255",],
            "username" => ["nullable","string","min:3","max:255",],
            "phone" => ["nullable","string","min:10","max:255",],
            'password' => 'required|string|max:255',
            'user_id' => 'required|numeric|max:255|exists:users,id',
            'type_id' => 'required|numeric|max:255|exists:account_types,id'
        ])->validate();

        if(!isset($data['email']) && !isset($data['username']) && !isset($data['phone'])) {
            throw ValidationException::withMessages(['error_field' => 'All field are required']);
        }

        $accountType = AccountType::find($data['type_id']);

        switch ($accountType->name) {
            case AccountTypes::MEGAPERSONALS->value:
                return (new MegapersonalsService())->create($data);
            case AccountTypes::SKIPTHEGAMES->value:
                return (new SkipTheGamesService())->create($data);
            default:
                return [
                    'errors' => ['Service not available']
                ];
        }
    }
}
