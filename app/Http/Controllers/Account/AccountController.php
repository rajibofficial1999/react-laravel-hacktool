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

        if(isset($data['account']['id'])){
            $account_id = $data['account']['id'];
            return redirect()->route('megapersonals.verification', $account_id);
        }{
            abort(404);
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
