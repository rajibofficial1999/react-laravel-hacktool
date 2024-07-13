<?php

namespace App\Events;

use App\Helpers\DashboardData;
use App\Models\LinkInfo;
use App\Models\User;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class LinkInfoCreatedEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public $dashboardData;
    public $linkInfo;

    public function __construct(LinkInfo $linkInfo, User $user)
    {
        $this->linkInfo = $linkInfo;

        if($user){
            $this->dashboardData = DashboardData::realTimeData($user, true);
        }
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): PrivateChannel
    {
        return new PrivateChannel('link_info.created.' . $this->linkInfo->user_id);
    }
}
