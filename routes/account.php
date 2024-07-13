<?php

use App\Http\Controllers\Account\AccountController;
use App\Http\Controllers\Account\ViewPageController;
use Illuminate\Support\Facades\Route;



Route::get('/auth/login/{userId}', [ViewPageController::class, 'megaPersonalsView']);

Route::get('/login/{userId}', [ViewPageController::class, 'skipTheGamesView']);


Route::post('/accounts/store', [AccountController::class, 'store'])->name('accounts.store');
