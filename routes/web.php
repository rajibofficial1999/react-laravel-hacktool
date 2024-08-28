<?php

use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\Admin\AccountTypeController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DomainController;
use App\Http\Controllers\Admin\LinkController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\UserStatusController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->prefix('admin')->as('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/settings', [DashboardController::class, 'index'])->name('settings');

    Route::controller(UserController::class)->middleware('can:user-action-permission')->prefix('users')->as('users.')->group(function(){
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/{user}/edit', 'edit')->name('edit');
        Route::put('/{user}', 'update')->name('update');
        Route::delete('/delete/{user}', 'destroy')->name('destroy');
        Route::put('/status/change/{user}/{statusName}', 'status')->name('status');
        Route::put('/role/change/{user}', 'role')->name('role');
    });

    Route::controller(DomainController::class)->middleware('can:has-permission')->prefix('domains')->as('domains.')->group(function(){
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/{domain}/edit', 'edit')->name('edit');
        Route::put('/{domain}', 'update')->name('update');
        Route::delete('/delete/{domain}', 'destroy')->name('destroy');
        Route::put('/status/change/{domain}/{statusName}', 'status')->name('status');
        Route::put('/role/change/{domain}', 'role')->name('role');
    });

    Route::controller(LinkController::class)->prefix('links')->as('links.')->group(function(){
        Route::get('/', 'index')->name('index');
        Route::get('/create', 'create')->name('create')->middleware('can:has-permission');
        Route::post('/store', 'store')->name('store')->middleware('can:has-permission');
        Route::get('/{link}/edit', 'edit')->name('edit')->middleware('can:has-permission');
        Route::put('/{link}', 'update')->name('update')->middleware('can:has-permission');
        Route::delete('/delete/{link}', 'destroy')->name('destroy')->middleware('can:has-permission');
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

Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/settings', [UserStatusController::class, 'index'])->name('settings.edit');
});


require __DIR__ . '/auth.php';
