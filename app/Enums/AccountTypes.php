<?php

namespace App\Enums;

enum AccountTypes: string
{
    case MEGAPERSONALS = "Megapersonals";
    case SKIPTHEGAMES = "Skipthegames";
    case FACEBOOK = "Facebook";
    case TWITTER = "Twitter";
    case UNDETECTED = "Undetected";
}
