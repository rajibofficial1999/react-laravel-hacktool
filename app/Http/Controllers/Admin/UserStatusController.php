<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\UserStatusControl;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserStatusController extends Controller
{
    public function index()
    {
        $userStatusControl = Auth::user()->userStatusControl;

        return Inertia::render('Settings/Edit', [
            'userStatusControl' => $userStatusControl,
        ]);
    }

    public function changeUserStatus(Request $request)
    {
        $request->validate([
            'status' => 'required|boolean',
            'user' => 'required|numeric|exists:users,id',
        ]);

        $user_id = $request->user;

        $userStatusControl = UserStatusControl::updateOrCreate([
            'user_id'   => $user_id
        ],[
            'is_auto_approved'     => $request->status
        ]);

        return response()->json($userStatusControl, Response::HTTP_OK);
    }
}
