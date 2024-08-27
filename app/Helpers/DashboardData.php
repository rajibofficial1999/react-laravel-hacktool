<?php

namespace App\Helpers;

use App\Models\Account;
use App\Models\LinkInfo;
use App\Models\User;

class DashboardData
{
    public static function realTimeData(User $user, bool $adminClickData = false): array
    {
        $startOfDay = now()->startOfDay()->subDay(); // Midnight last night
        $endOfDay = now()->endOfDay(); // Midnight of the current day

        $accounts = Account::when(!$user->isAdmin, function($query) use ($user) {
                                return $query->where("user_id", $user->id);
                            })
                            ->with(['type', 'owner'])
                            ->latest()
                            ->take(5)
                            ->get();


        $baseQuery = Account::when(!$user->isAdmin, function($query) use ($user) {
                                return $query->where("user_id", $user->id);
                            });

        $totalAccounts = $baseQuery
                        ->count();

        $todayTotalAccounts = $baseQuery
                            ->whereBetween('created_at', [$startOfDay, $endOfDay])
                            ->count();


        $clicksQuery = LinkInfo::when(!$user->isAdmin, function($query) use ($user) {
                                    return $query->where("user_id", $user->id);
                                })
                                ->whereBetween('created_at', [$startOfDay, $endOfDay]);

        $totalClicks = $clicksQuery
                        ->count();

        $uniqueClicks = $clicksQuery->select('ip_address')
                        ->distinct()
                        ->count('ip_address');

        $adminBaseClicks = LinkInfo::whereBetween('created_at', [$startOfDay, $endOfDay]);

        $data = [
            'accounts'=> $accounts,
            'totalAccounts'=> $totalAccounts,
            'todayTotalAccounts'=> $todayTotalAccounts,
            'totalClicks'=> $totalClicks,
            'uniqueClicks'=> $uniqueClicks,
        ];

        if($adminClickData){
            $data['admin']['totalClicks'] = $adminBaseClicks->count();
            $data['admin']['uniqueClicks'] = $adminBaseClicks->select('ip_address')->distinct()->count('ip_address');
        }

        return $data;
    }

}
