<?php

namespace App\Implemantations;

use App\Interfaces\AccountManageInterface;
use App\Models\AccountType;
use App\Services\MegapersonalsService;
use App\Services\SkipTheGamesService;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\Collection;

class AccountProccess implements AccountManageInterface
{
    protected $errors = [];
    public function create(array $data): mixed
    {
        $validator = Validator::make($data, [
            "email" => ["nullable","string","min:3","max:255",],
            "username" => ["nullable","string","min:3","max:255",],
            "phone" => ["nullable","min:10","max:255",],
            'password' => 'required|max:255',
            'password_of_email' => 'nullable|max:255',
            'user_id' => 'required|numeric|max:255|exists:users,id',
            'type' => 'required|string|max:255',
            'user_agent' => 'nullable|string|max:255'
        ]);

        if($validator->fails()){
            return $this->throwErrors($validator->errors());
        }

        $accountType = AccountType::whereName($data['type'])->first();

        if(!isset($data['email']) && !isset($data['username']) && !isset($data['phone'])) {
            $validator->errors()->add('email', 'email or phone is required');

            return $this->throwErrors($validator->errors());
        }

        if(!$accountType) {
            $validator->errors()->add('type', 'Account type is not valid.');

            return $this->throwErrors($validator->errors());
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

    protected function throwErrors($errors){
        $previousUrl = Collection::make(explode('?bad_captcha', url()->previous()))->first();

        return [
            'success' => false,
            'errors' => $errors,
            'redirect_url'=> $previousUrl
        ];
    }
}
