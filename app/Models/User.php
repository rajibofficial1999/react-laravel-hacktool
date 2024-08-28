<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Enums\UserStatus;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'reference_id',
        'team_id',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'status' => UserStatus::class
        ];
    }

    protected $appends = ['is_admin','is_super_admin'];

    protected function password(): Attribute
    {
        return Attribute::make(
            set: fn (string $value) => bcrypt($value),
        );
    }

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }

    public function accounts(): HasMany
    {
        return $this->hasMany(Account::class);
    }

    public function isAdmin(): Attribute
    {
        return Attribute::make(
            get: function() {
               if($this->roles->first()){
                    return $this->roles->first()->name == 'admin';
               }else{
                    return false;
               }
            }
        );
    }

    public function isSuperAdmin(): Attribute
    {
        return Attribute::make(
            get: function() {
                if($this->roles->first()){
                    return $this->roles->first()->name == 'super-admin';
                }else{
                    return false;
                }
            }
        );
    }

    public function isSuperAdminAndAdmin(): Attribute
    {
        return Attribute::make(
            get: function() {
                if($this->roles->first()){
                    return ($this->roles->first()->name == 'super-admin' || $this->roles->first()->name == 'admin');
                }else{
                    return false;
                }
            }
        );
    }

    public function updateStatus($value)
    {
        $this->status = $value;

        return $this->save();
    }

    public function members()
    {
        return $this->hasMany(User::class, 'team_id');
    }

    public function team()
    {
        return $this->belongsTo(User::class, 'team_id', 'id');
    }

    public function userStatusControl(): HasOne
    {
        return $this->hasOne(UserStatusControl::class);
    }
}
