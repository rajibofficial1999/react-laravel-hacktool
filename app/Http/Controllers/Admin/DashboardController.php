<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\DashboardData;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $auth_user = Auth::user();

        $data = DashboardData::realTimeData($auth_user);

        return Inertia::render('Admin/Dashboard', $data);
    }
}
