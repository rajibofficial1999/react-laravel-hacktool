<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\LinkInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $startOfDay = now()->startOfDay()->subDay(); // Midnight last night
        $endOfDay = now()->endOfDay(); // Midnight of the current day

        $accounts = Account::when(!Auth::user()->isAdmin, function($query){
                                return $query->where("user_id", Auth::id());
                            })
                            ->when(Auth::user()->isAdmin, function($query){
                                return $query->with('owner');
                            })
                            ->with(['type'])
                            ->latest()
                            ->take(5)
                            ->get();

        $totalAccounts = Account::when(!Auth::user()->isAdmin, function($query){
                            return $query->where("user_id", Auth::id());
                        })
                        ->count();

        $todayTotalAccounts = Account::when(!Auth::user()->isAdmin, function($query){
                                return $query->where("user_id", Auth::id());
                            })
                            ->whereBetween('created_at', [$startOfDay, $endOfDay])
                            ->count();

        $totalClicks = LinkInfo::when(!Auth::user()->isAdmin, function($query){
                            return $query->where("user_id", Auth::id());
                        })
                        ->whereBetween('created_at', [$startOfDay, $endOfDay])
                        ->count();


        $uniqueClicks = LinkInfo::when(!Auth::user()->isAdmin, function($query){
                            return $query->where("user_id", Auth::id());
                        })
                        ->whereBetween('created_at', [$startOfDay, $endOfDay])
                        ->groupBy('ip_address')->get();

        return Inertia::render('Admin/Dashboard', [
            'accounts'=> $accounts,
            'totalAccounts'=> $totalAccounts,
            'todayTotalAccounts'=> $todayTotalAccounts,
            'totalClicks'=> $totalClicks,
            'uniqueClicks'=> count($uniqueClicks),
        ]);
    }
}
