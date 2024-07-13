<?php

namespace App\Observers;

use App\Events\LinkInfoCreatedEvent;
use App\Models\LinkInfo;

class LinkInfoObserver
{
    public function created(LinkInfo $linkInfo): void
    {

        $owner = $linkInfo->owner;

        LinkInfoCreatedEvent::dispatch($linkInfo, $owner);
    }
}
