<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LinkInfo extends Model
{
    use HasFactory;

    protected $fillable = [
        'account_type_id',
        'user_id',
        'ip_address',
        'country',
        'city',
        'state_name',
        'zip_code'
    ];
}
