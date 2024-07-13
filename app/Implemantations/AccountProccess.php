<?php

namespace App\Implemantations;

use App\Interfaces\AccountManageInterface;
use App\Models\AccountType;
use App\Services\MegapersonalsService;
use App\Services\SkipTheGamesService;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AccountProccess implements AccountManageInterface
{
    public function create(array $data): mixed
    {
        Validator::make($data, [
            "email" => ["nullable","string","min:3","max:255",],
            "username" => ["nullable","string","min:3","max:255",],
            "phone" => ["nullable","min:10","max:255",],
            'password' => 'required|max:255',
            'password_of_email' => 'nullable|max:255',
            'user_id' => 'required|numeric|max:255|exists:users,id',
            'type' => 'required|string|max:255'
        ])->validate();

        $accountType = AccountType::whereName($data['type'])->first();

        if(!isset($data['email']) && !isset($data['username']) && !isset($data['phone'])) {
            throw ValidationException::withMessages(['email' => 'email or phone is required']);
        }

        if(!$accountType) {
            throw ValidationException::withMessages(['type' => 'Account type is not valid.']);
        }

        $data['type_id'] = $accountType->id;

        return $this->chooseService($accountType, $data);
    }


    protected function chooseService(AccountType $accountType, array $data)
    {
        switch ($accountType->name) {
            case 'megapersonals':
                return (new MegapersonalsService())->create($data);
            case 'skipthegames':
                return (new SkipTheGamesService())->create($data);
            default:
                return [
                    'errors' => ['Service not available']
                ];
        }
    }
}
