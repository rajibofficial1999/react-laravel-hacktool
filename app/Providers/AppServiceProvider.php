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
        Gate::define('has-permission', function () {
            return Auth::user()->isAdmin ? Response::allow() : Response::deny('You must be an administrator.');
        });

        Gate::define('has-action-permission', function (User $user, $action_user_id) {
            if(!Auth::user()->isAdmin){
                return $user->id == $action_user_id ? Response::allow() : Response::deny('You do not have permission to do this.');
            }

            return true;
        });

        Account::observe(AccountObserver::class);
        LinkInfo::observe(LinkInfoObserver::class);
    }
}
