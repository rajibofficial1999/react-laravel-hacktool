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
        $data = $this->accountService->create($request->all());

        if($data['success']){
            return redirect('http://127.0.0.1:8000/email-verification/' . $data['account']['id']);
        }else{
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
