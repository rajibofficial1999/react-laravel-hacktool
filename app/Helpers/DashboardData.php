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

        $accounts = self::applyUserAccountFilter(Account::query(), $user)
                            ->with(['type', 'owner'])
                            ->latest()
                            ->take(5)
                            ->get();

        $baseQuery = self::applyUserAccountFilter(Account::query(), $user);

        $totalAccounts = $baseQuery
                        ->count();

        $todayTotalAccounts = $baseQuery
                            ->whereBetween('created_at', [$startOfDay, $endOfDay])
                            ->count();


        $clicksQuery = self::applyUserAccountFilter(LinkInfo::query(), $user)
                                ->whereBetween('created_at', [$startOfDay, $endOfDay]);

        $totalClicks = $clicksQuery
                        ->count();

        $uniqueClicks = $clicksQuery->select('ip_address')
                        ->distinct()
                        ->count('ip_address');

        $data = [
            'accounts' => $accounts,
            'totalAccounts' => $totalAccounts,
            'todayTotalAccounts' => $todayTotalAccounts,
            'totalClicks' => $totalClicks,
            'uniqueClicks' => $uniqueClicks,
            'admin' => [
                'totalClicks' => $totalClicks,
                'uniqueClicks' => $uniqueClicks,
            ],
        ];

        return $data;
    }

    protected static function applyUserAccountFilter($query, $user)
    {
        return $query->when(!$user->isSuperAdmin, function($query) use ($user) {
            return $query->when(!$user->isAdmin, function ($query) use ($user) {
                return $query->where("user_id", $user->id);
            });
        })
        ->when($user->isAdmin, function ($query) use ($user) {
            return $query->whereHas("owner", function ($query) use ($user) {
                return $query->where('team_id', $user->id);
            })->orWhere('user_id', $user->id);
        });
    }
}
