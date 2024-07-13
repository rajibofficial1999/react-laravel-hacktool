<?php

namespace App\Observers;

use App\Models\Account;
use App\Events\AccountCreatedEvent;
use App\Events\AccountUpdatedEvent;

class AccountObserver
{
    public function created(Account $account): void
    {
        $owner = $account->owner;
        $account->load('type');

        AccountCreatedEvent::dispatch($account, $owner);
    }


    public function updated(Account $account): void
    {
        AccountUpdatedEvent::dispatch($account);
    }


}
