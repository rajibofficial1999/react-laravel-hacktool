<?php

namespace App\Providers;

use App\Implemantations\AccountProccess;
use App\Interfaces\AccountManageInterface;
use App\Models\Account;
use App\Models\LinkInfo;
use App\Models\User;
use App\Observers\AccountObserver;
use App\Observers\LinkInfoObserver;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Illuminate\Auth\Access\Response;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(AccountManageInterface::class, AccountProccess::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Gate::define('user-action-permission', function () {
            return Auth::user()->isSuperAdmin || Auth::user()->isAdmin ? Response::allow() : Response::deny('You must be an administrator.');
        });

        Gate::define('has-permission', function () {
            return Auth::user()->isSuperAdmin ? Response::allow() : Response::deny('You must be an administrator.');
        });

        Gate::define('manage-users', function (User $authUser, User $user) {
            if($authUser->isSuperAdmin){
                return true;
            }

            return $authUser->id === $user->team_id;
        });

//        Account::observe(AccountObserver::class);
//        LinkInfo::observe(LinkInfoObserver::class);
    }
}
