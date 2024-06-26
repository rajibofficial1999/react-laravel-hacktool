<?php

use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\Admin\AccountTypeController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\LinkController;
use App\Http\Controllers\Admin\LinkDomainController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ViewPageController;
use App\Models\LinkDomain;
use Illuminate\Support\Facades\Route;

// Local url also can be used for the links
$linkDomains = LinkDomain::whereDomain(env('APP_DOMAIN'))->get();

$linkDomains->each(function($linkDomain){
    Route::get("/{$linkDomain?->endpoint}/{user}", ViewPageController::class);
});

Route::post('/accounts/store', [AccountController::class, 'store'])->name('accounts.store');

Route::middleware(['auth', 'verified'])->as('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/settings', [DashboardController::class, 'index'])->name('settings');

    Route::controller(UserController::class)->middleware('can:has-permission')->prefix('users')->as('users.')->group(function(){
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/{user}/edit', 'edit')->name('edit');
        Route::put('/{user}', 'update')->name('update');
        Route::delete('/delete/{user}', 'destroy')->name('destroy');
        Route::put('/status/change/{user}/{statusName}', 'status')->name('status');
        Route::put('/role/change/{user}', 'role')->name('role');
    });

    Route::controller(LinkDomainController::class)->middleware('can:has-permission')->prefix('link-domains')->as('linkdomains.')->group(function(){
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/{linkDomain}/edit', 'edit')->name('edit');
        Route::put('/{linkDomain}', 'update')->name('update');
        Route::delete('/delete/{linkDomain}', 'destroy')->name('destroy');
        Route::put('/status/change/{linkDomain}/{statusName}', 'status')->name('status');
        Route::put('/role/change/{linkDomain}', 'role')->name('role');
    });

    Route::controller(LinkController::class)->prefix('links')->as('links.')->group(function(){
        Route::get('/', 'index')->name('index');
    });

    Route::controller(AccountTypeController::class)->middleware('can:has-permission')->prefix('account-types')->as('accountTypes.')->group(function(){
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/{accountType}/edit', 'edit')->name('edit');
        Route::put('/{accountType}', 'update')->name('update');
        Route::delete('/delete/{accountType}', 'destroy')->name('destroy');
        Route::put('/status/change/{accountType}', 'status')->name('status');
    });

    Route::controller(AccountController::class)->prefix('accounts')->as('accounts.')->group(function(){
        Route::get('/', 'index')->name('index');
        Route::delete('/delete/{account}', 'destroy')->name('destroy')->middleware('can:has-action-permission, account.id');
    });

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




require __DIR__ . '/auth.php';
