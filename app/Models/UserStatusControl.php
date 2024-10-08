<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserStatusControl extends Model
{
    use HasFactory;

    protected $fillable = ['is_auto_approved', 'user_id'];

}
