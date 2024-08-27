<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AccountController extends Controller
{
    public function index()
    {
        $accounts = Account::with(['type','owner'])->latest()->paginate(10);

        if(!Auth::user()->isAdmin){
            $accounts = Account::where('user_id', Auth::id())->with(['type','owner'])->latest()->paginate(10);
        }

        return Inertia::render("Admin/Accounts/Index", [
            "accounts"=> $accounts,
        ]);
    }

    public function destroy(Account $account): RedirectResponse
    {
        $account->delete();

        return redirect()->back()->with('success','The account has successfully deleted');
    }
}
