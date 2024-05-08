<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LinkDomain extends Model
{
    use HasFactory;

    protected $fillable = ["domain", "endpoint", "type"];

    public function type(): BelongsTo
    {
        return $this->belongsTo(AccountType::class, 'type');
    }
}
