<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Link extends Model
{
    use HasFactory;

    protected $fillable = ["domain_id", "endpoint", "type", "is_query_link"];

    public function type(): BelongsTo
    {
        return $this->belongsTo(AccountType::class, 'type');
    }

    public function domain(): BelongsTo
    {
        return $this->belongsTo(Domain::class);
    }
}
