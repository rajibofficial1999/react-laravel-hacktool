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
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class UserController extends Controller
{
    protected User $authUser;

    public function __construct(){
        $this->authUser = Auth::user();
    }

    public function index()
    {
        if($this->authUser->isSuperAdmin) {
            $users = User::with('roles')->whereHas('roles', function ($query){
                return $query->where('name', '!=', 'super-admin');
            })->latest()->paginate(10);
        }

        if($this->authUser->isAdmin) {
            $users = $this->authUser->members()->latest()->paginate(10);
        }

        return Inertia::render("Admin/Users/Index", [
            "users"=> $users,
            'statuses' => UserStatus::cases()
        ]);
    }

    public function create()
    {
        $roles = Role::when($this->authUser->isAdmin, function ($query) {
            $query->whereName('user');
        })->when($this->authUser->isSuperAdmin, function ($query) {
            $query->where('name','!=', 'user');
        })->whereStatus(true)->get();

        return Inertia::render("Admin/Users/Create", [
            'roles' => $roles
        ]);
    }

    public function store(UserStoreRequest $request)
    {
        $data = $request->validated();

        $role = Role::find($data['role']);

        if($role->name == 'admin') {
            $reference_id = bin2hex(random_bytes(5));
            $data['reference_id'] = strtoupper($reference_id);
        }

        if($role->name == 'user') {
            $user = $this->authUser->members()->create($data);
        }else{
            $user = User::create($data);
        }

        $user->roles()->attach($data['role']);

        $user->updateStatus(UserStatus::APPROVED);

        return redirect()->route('admin.users.index')->with('success','The user has successfully created');
    }

    public function edit(User $user)
    {
        Gate::authorize('manage-users', $user);

        $userRole = $user->roles()->first();

        $roles = Role::when($this->authUser->isAdmin, function ($query) {
            $query->whereName('user');
        })->when($this->authUser->isSuperAdmin, function ($query) use ($userRole) {
            $query->when($userRole->name == 'user', function ($query) {
                $query->where('name','!=', 'super-admin');
            })->when($userRole->name == 'admin', function ($query) {
                $query->where('name','!=', 'user');
            });
        })->whereStatus(true)->get();

        return Inertia::render("Admin/Users/Edit", [
            'user' => $user,
            'roles' => $roles
        ]);
    }

    public function update(UserUpdateRequest $request, User $user)
    {
        Gate::authorize('manage-users', $user);

        $data = $request->validated();

        if(!$data['password'] || $data['password'] == null){
            unset($data['password']);
        }

        $role = Role::findOrFail($data['role']);

        if($role->name == 'admin') {
            $reference_id = bin2hex(random_bytes(5));
            $data['reference_id'] = strtoupper($reference_id);
            $data['team_id'] = null;
        }

        if($role->name == 'super-admin') {
            $data['reference_id'] = null;
            $data['team_id'] = null;

            // Delete all team members after assign admin to user admin
            $user->members()->delete();
        }

        $user->update($data);

        $user->roles()->sync($data['role']);

        return redirect()->route('admin.users.index')->with('success','The user has successfully updated');
    }

    public function destroy(User $user): RedirectResponse
    {
        Gate::authorize('manage-users', $user);

        $user->delete();

        return redirect()->back()->with('success','The user has successfully deleted');
    }

    public function status(User $user, string $statusName): RedirectResponse
    {
        Gate::authorize('manage-users', $user);

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
