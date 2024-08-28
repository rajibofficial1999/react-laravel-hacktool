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
        $user = Auth::user();

        if($user->isAdmin){
            $accounts = Account::whereHas("owner", function ($query) use ($user) {
                return $query->where('team_id', $user->id);
            })->orWhere('user_id', $user->id)->with(['type','owner'])->latest()->paginate(10);
        }

        if($user->isSuperAdmin){
            $accounts = Account::with(['type','owner' => function ($query) {
                return $query->with(['team']);
            }])->latest()->paginate(10);
        }

        if(!$user->isSuperAdmin && !$user->isAdmin){
            $accounts = Account::where('user_id', $user->id)->with(['type','owner'])->latest()->paginate(10);
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
