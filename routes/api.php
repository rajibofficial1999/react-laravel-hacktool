<?php

use App\Http\Controllers\Api\AccountController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\UserStatusController;
use App\Http\Controllers\Api\LinkInfoController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function() {
    // Route::get('/users/{id}', [UserController::class,'getUserById']);

    Route::post('/accounts/store', [AccountController::class,'store']);

    Route::post('/accounts/update', [AccountController::class,'update']);

    Route::post('/visitor-info/store', [LinkInfoController::class, 'store']);

    Route::post('/settings', [UserStatusController::class, 'changeUserStatus']);
});
