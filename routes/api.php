<?php

use App\Http\Controllers\Api\AccountController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/v1/users/{id}', [UserController::class,'getUserById']);

Route::post('/v1/accounts', [AccountController::class,'store']);
