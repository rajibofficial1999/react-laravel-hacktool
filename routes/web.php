<?php

use App\Http\Controllers\Admin\AccountController;
use App\Http\Controllers\Admin\AccountTypeController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\LinkController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->as('admin.')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/settings', [DashboardController::class, 'index'])->name('settings');

    Route::get('/testing', function() {
        return view('testing');
    })->name('testing');

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

    Route::controller(LinkController::class)->middleware('can:has-permission')->prefix('links')->as('links.')->group(function(){
        Route::get('/view', 'viewLinks')->name('viewLinks');
        Route::get('/create', 'create')->name('create');
        Route::post('/', 'store')->name('store');
        Route::get('/{link}/edit', 'edit')->name('edit');
        Route::put('/{link}', 'update')->name('update');
        Route::delete('/delete/{link}', 'destroy')->name('destroy');
        Route::put('/status/change/{link}/{statusName}', 'status')->name('status');
        Route::put('/role/change/{link}', 'role')->name('role');
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
        Route::get('/download-cards/{accountId}', 'cardsDownload')->name('cards.download');
        Route::delete('/delete/{account}', 'destroy')->name('destroy')->middleware('can:has-action-permission, account.id');
    });

});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';
