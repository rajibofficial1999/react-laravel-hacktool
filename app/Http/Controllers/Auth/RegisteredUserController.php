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
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'reference_id' => 'required|string|max:50|exists:users,reference_id',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'password_confirmation' => ['same:password'],
        ]);

        $team = User::where('reference_id', $request->reference_id)->get()->first();

        $user = $team->members()->create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        $role_id = Role::whereName('user')->whereStatus(true)->first()->id;

        $user->roles()->attach($role_id);

        event(new Registered($user));

        $userStatusController = $team->userStatusControl;

        if($userStatusController && $userStatusController->is_auto_approved){
            $user->updateStatus(UserStatus::APPROVED);

            Auth::login($user);

            return redirect()->route('admin.dashboard');

        }else{
            return redirect()->route('login')->withSuccess('Your account is under review.');
        }
    }
}
