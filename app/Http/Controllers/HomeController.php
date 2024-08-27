<?php

namespace App\Http\Controllers;

use App\Models\Link;
use App\Models\User;

class HomeController extends Controller
{
    public function index()
    {
        $user = User::inRandomOrder()->first();

        $link = Link::whereHas('type', function($query){
            $query->whereName('megapersonals');
        })->whereStatus(true)->where('endpoint','!=', '/due-live-chat')->first();

        abort_if(!$user, 404);
        abort_if(!$link, 404);

        return redirect("{$link->endpoint}/{$user->id}");
    }
}
