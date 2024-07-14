<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\LinkInfoService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LinkInfoController extends Controller
{
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'visitor_ip' => 'required'
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        (new LinkInfoService())->create($request->visitor_ip, $request->user_id);


        return [
            'success' => true,
            'redirect_url' => 'https://megapersonals.eu/home'
        ];
    }
}
