<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\UserStatusControl;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class UserStatusController extends Controller
{
    public function index()
    {
        $userStatus = UserStatusControl::first();

        return Inertia::render('Settings/Edit', [
            'userStatus' => $userStatus ?? null,
        ]);
    }

    public function changeUserStatus(Request $request)
    {
        $request->validate([
            'status' => 'required'
        ]);

        $is_auto_approved = $request->status;


        if($existsUserStatus = UserStatusControl::first()){
            $userStatus = UserStatusControl::find($existsUserStatus->id);
        }else{
            $userStatus = new UserStatusControl();
        }

        $userStatus->is_auto_approved = $is_auto_approved;

        $userStatus->save();

        return response()->json($userStatus, Response::HTTP_OK);
    }
}
