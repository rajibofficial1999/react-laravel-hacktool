<?php

namespace App\Services;

use App\Models\LinkInfo;
use Illuminate\Support\Facades\Validator;

class LinkInfoService
{
    public function create(array $data, int $user_id, ?int $account_type_id = null)
    {
        $data['ip_address'] = $data['ip'];
        $data['country'] = $data['countryName'];
        $data['city'] = $data['cityName'];
        $data['zip_code'] = $data['zipCode'];
        $data['state_name'] = $data['regionName'];
        $data['account_type_id'] = $account_type_id;
        $data['user_id'] = $user_id;

        Validator::make($data, [
            'account_type_id' => 'nullable|numeric|exists:account_types,id',
            'user_id' => 'required|numeric|exists:users,id',
            'ip_address' => 'required|max:255',
            'country' => 'required|max:255',
            'city' => 'required|max:255',
            'state_name' => 'required|max:255',
            'zip_code' => 'required|max:255',
        ])->validate();


        LinkInfo::create($data);
    }
}
