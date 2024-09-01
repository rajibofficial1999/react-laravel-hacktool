<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PhotoController extends Controller
{
    public function index()
    {
        $authUser = Auth::user();

        $photos = $this->applyUserAccountFilter(Account::query(), $authUser)
                ->whereNotNull('card_image1')
                ->paginate(20);

        return Inertia::render('Admin/Photos/Index', [
            'photos' => $photos
        ]);
    }

    protected function applyUserAccountFilter($query, $user)
    {
        return $query->when(! $user->isSuperAdmin, function($query) use ($user) {
            return $query->when(! $user->isAdmin, function ($query) use ($user) {
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
