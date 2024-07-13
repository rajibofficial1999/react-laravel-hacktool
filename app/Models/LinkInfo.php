<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class,'user_id');
    }
}
