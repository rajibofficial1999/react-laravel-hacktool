<?php

namespace App\Http\Controllers\Auth;

use App\Enums\UserStatus;
use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\User;
use App\Models\UserStatusControl;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'password_confirmation' => ['same:password'],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'reference_id' => random_int(1111111111, 99999999999)
        ]);

        $role_id = Role::whereName('user')->whereStatus(true)->first()->id;

        $user->roles()->attach($role_id);

        event(new Registered($user));

        $userStatusController = UserStatusControl::first();

        if($userStatusController && $userStatusController->is_auto_approved){
            $user->updateStatus(UserStatus::APPROVED);

            Auth::login($user);

            return redirect()->route('admin.dashboard');

        }else{
            return redirect()->route('login')->withSuccess('Your account is under review.');
        }
    }
}
