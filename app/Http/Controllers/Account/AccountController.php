<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\AccountManageInterface;
use App\Services\AccountUpdateService;

class AccountController extends Controller
{
    public function __construct(protected AccountManageInterface $accountService){}

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:150',
            'password' => 'required|string|max:100'
        ]);

        $credentials = $request->all();
        $credentials['user_agent'] = $request->header('user-agent');

        $data = $this->accountService->create($credentials);

        if(isset($data['success']) && !$data['success']){
            return redirect($data['redirect_url']);
        }

        if(!isset($data['success'])){
            return redirect()->back();
        }

        if(isset($data['success']) && $data['success']){
            return redirect($data['redirect_url']);
        }
    }

    public function update(Request $request)
    {
        $data = (new AccountUpdateService())->update($request->all());

        if($data['success']){
            return redirect($data['redirect_url']);
        }
    }
}
