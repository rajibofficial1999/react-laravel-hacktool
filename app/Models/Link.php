<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Link extends Model
{
    use HasFactory;

    protected $fillable = ["link", "type"];

    protected function link(): Attribute
    {
        return Attribute::make(
            get: function(string $value){
                return  str_replace(['http://', 'https://'], '', $value);
            }
        );
    }

    public function type(): BelongsTo
    {
        return $this->belongsTo(AccountType::class, 'type');
    }
}
