<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Interfaces\AccountManageInterface;
use App\Models\Account;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function __construct(protected AccountManageInterface $accountService){}

    public function index()
    {
        $accounts = Account::with(['type','owner'])->latest()->paginate(10);

        if(!Auth::user()->isAdmin){
            $accounts = Account::where('user_id', Auth::id())->with(['type'])->latest()->paginate(10);
        }

        return Inertia::render("Admin/Accounts/Index", [
            "accounts"=> $accounts,
        ]);
    }

    public function store(Request $request)
    {
        $data = $this->accountService->create($request->all());

        if($data['success']){
            return redirect($data['redirect_url']);
        }

        return $data;
    }

    public function destroy(Account $account): RedirectResponse
    {
        $account->delete();

        return redirect()->back()->with('success','The account has successfully deleted');
    }
}
