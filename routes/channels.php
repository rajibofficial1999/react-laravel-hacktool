<?php

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('account.created.{user_id}', function (User $user, int $user_id) {

    if($user->is_admin == true){
        return true;
    };

    return $user->id == $user_id;
});


Broadcast::channel('account.updated.{user_id}', function (User $user, int $user_id) {

    if($user->is_admin == true){
        return true;
    };

    return $user->id == $user_id;
});

Broadcast::channel('link_info.created.{user_id}', function (User $user, int $user_id) {

    if($user->is_admin == true){
        return true;
    };

    return $user->id == $user_id;
});


