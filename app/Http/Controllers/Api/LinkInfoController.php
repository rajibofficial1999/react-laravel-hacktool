<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\LinkInfoService;
use Illuminate\Http\Request;

class LinkInfoController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required|integer|exists:users,id',
            'visitor_ip' => 'required'
        ]);

        (new LinkInfoService())->create($data['visitor_ip'], $data['user_id']);

        return [
            'success' => true,
            'redirect_url' => 'https://megapersonals.eu/home'
        ];
    }
}
