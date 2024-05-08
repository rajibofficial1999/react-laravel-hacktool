<?php

namespace App\Http\Controllers\Admin;

use App\Enums\UserStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('roles')->where('id', '!=', Auth::id())->latest()->paginate(10);

        // return $users;

        return Inertia::render("Admin/Users/Index", [
            "users"=> $users,
            'statuses' => UserStatus::cases()
        ]);
    }

    public function create()
    {
        return Inertia::render("Admin/Users/Create", [
            'roles' => Role::whereStatus(true)->get()
        ]);
    }

    public function store(UserStoreRequest $request)
    {
        $data = $request->validated();
        $data['reference_id'] = random_int(1111111111,9999999999);

        $user = User::create($data);

        $user->roles()->attach($data['role']);

        return redirect()->route('admin.users.index')->with('success','The user has successfully created');
    }

    public function edit(User $user)
    {
        $user->load('roles');

        return Inertia::render("Admin/Users/Edit", [
            'user' => $user,
            'roles' => Role::whereStatus(true)->get()
        ]);
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        $data = $request->validated();

        if(!$data['password'] || $data['password'] == null){
            unset($data['password']);
        }

        $user->update($data);

        $user->roles()->attach($data['role']);

        return redirect()->route('admin.users.index')->with('success','The user has successfully updated');
    }

    public function destroy(User $user): RedirectResponse
    {
        $user->delete();

        return redirect()->back()->with('success','The user has successfully deleted');
    }

    public function status(User $user, string $statusName): RedirectResponse
    {

        $user->status = $statusName;
        $user->save();

        return redirect()->back()->with([
            'success' => 'The user status has successfully changed',
            'data' => $user
        ]);
    }

    public function getUserById($userId)
    {
        $user = User::find($userId);

        if(!$user) {
            return response()->json([
                'error' => "User not found"
            ], Response::HTTP_NOT_FOUND);
        }

        return response()->json($user, Response::HTTP_OK);
    }
}
