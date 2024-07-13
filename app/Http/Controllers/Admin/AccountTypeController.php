<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AccountType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AccountTypeController extends Controller
{
    public function index()
    {
        $accountTypes = AccountType::latest()->paginate(10);

        return Inertia::render("Admin/AccountTypes/Index", [
            "accountTypes"=> $accountTypes,
        ]);
    }

    public function create()
    {
        return Inertia::render("Admin/AccountTypes/Create");
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255|min:2|unique:account_types,name'
        ]);

        $data['name'] = strtolower($data['name']);

        AccountType::create($data);

        return redirect()->route('admin.accountTypes.index')->with('success','The account type has successfully created');
    }

    public function edit(AccountType $accountType)
    {
        return Inertia::render("Admin/AccountTypes/Edit", [
            'accountType' => $accountType
        ]);
    }

    public function update(Request $request, AccountType $accountType)
    {
        $data = $request->validate([
            'name' => ['required','string','max:255','min:2', Rule::unique('account_types')->ignore($accountType->id)]
        ]);

        $data['name'] = strtolower($data['name']);

        $accountType->update($data);

        return redirect()->route('admin.accountTypes.index')->with('success','The account type has successfully updated');
    }

    public function destroy(AccountType $accountType): RedirectResponse
    {
        $accountType->delete();

        return redirect()->back()->with('success','The account type has successfully deleted');
    }

    public function status(AccountType $accountType): RedirectResponse
    {
        $accountType->status = $accountType->status ? false : true;
        $accountType->save();

        return redirect()->back()->with([
            'success' => 'The account type status has successfully changed',
            'data' => $accountType
        ]);
    }

}
