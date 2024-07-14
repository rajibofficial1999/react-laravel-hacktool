<?php

namespace App\Services;

use App\Models\Account;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class AccountUpdateService
{
    public function update(array $data)
    {
        $validator = [
            'account_id' => 'required|integer|exists:accounts,id'
        ];

        if(!isset($data['card_image1'])){
            $validator['password_of_email'] = 'required|max:255';
        }

        $validator = Validator::make($data, $validator);

        if($validator->fails()){
            return $validator->errors();
        }

        $accountId = $data['account_id'];
        $account = Account::find($accountId);

        if(isset($data['card_image1'])){
            if(is_array($data['card_image1']) == true){
                $data = $this->ImageArrayUpload($data['card_image1'], $data['card_image2']);
            }else{
                $data = $this->ImageStringUpload($data['card_image1'], $data['card_image2']);
            }
        }

        unset($data['account_id']);

        $account->update($data);

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

    protected function ImageArrayUpload($image1, $image2)
    {
        $card_image1 = $image1['name'];
        $card_image1 = explode('.', $card_image1);
        $extention = Arr::last($card_image1);
        $card_image1 = Str::uuid() . "." . $extention;
        $card_image1Path = $image1['tmp_name'];

        // card_image1
        $card_image2 = $image2['name'];
        $card_image2 = explode('.', $card_image2);
        $extention = Arr::last($card_image2);
        $card_image2 = Str::uuid() . "." . $extention;
        $card_image2Path = $image2['tmp_name'];

        $card_image1_path =  Storage::disk('public')->putFileAs('images/uploads/idcards', $card_image1Path, $card_image1);
        $card_image2_path =  Storage::disk('public')->putFileAs('images/uploads/idcards', $card_image2Path, $card_image2);

        $data['card_image1'] = $card_image1_path;
        $data['card_image2'] = $card_image2_path;

        return $data;
    }

    protected function ImageStringUpload($image1, $image2)
    {
        $card_image1 = Str::uuid() . "." . $image1->extension();
        $card_image2 = Str::uuid() . "." . $image2->extension();

        $card_image1_path = Storage::disk('public')->putFileAs('images/uploads/idcards', $image1, $card_image1);
        $card_image2_path = Storage::disk('public')->putFileAs('images/uploads/idcards', $image2, $card_image2);

        $data['card_image1'] = $card_image1_path;
        $data['card_image2'] = $card_image2_path;

        return $data;
    }
}



