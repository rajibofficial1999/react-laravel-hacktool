<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ValidHCaptcha implements Rule
{
    public function passes( $attribute, $value )
    {
        $data = array(
            'secret' => config('services.hcaptcha.secret'),
            'response' => $value
        );

        $verify = curl_init();

        curl_setopt($verify, CURLOPT_URL, "https://hcaptcha.com/siteverify");
        curl_setopt($verify, CURLOPT_POST, true);
        curl_setopt($verify, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($verify, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($verify);
        $responseData = json_decode( $response );

        if($responseData->success) {
            return true;
        } else {
            return false;
        }
    }

    public function message()
    {
        return 'Invalid CAPTCHA. You need to prove you are human.';
    }

}
