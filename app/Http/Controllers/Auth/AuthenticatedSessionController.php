<?php

namespace App\Http\Controllers\Auth;

use App\Enums\UserStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();

        $this->checkAccountStatus();

        return redirect()->intended(route('admin.dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('login');
    }

    protected function checkAccountStatus(): void
    {
        if(Auth::user()->status == UserStatus::PENDING){
            Auth::logout();

            throw ValidationException::withMessages([
                'email' => 'The account is pending',
            ]);
        }

        if(Auth::user()->status == UserStatus::SUSPENDED){
            Auth::logout();

            throw ValidationException::withMessages([
                'email' => 'The account has been suspended',
            ]);
        }

        if(Auth::user()->status == UserStatus::REJECTED){
            Auth::logout();

            throw ValidationException::withMessages([
                'email' => 'The account has been rejected',
            ]);
        }
    }
}
