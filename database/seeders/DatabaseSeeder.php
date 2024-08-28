<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $superAdminRole = Role::create([
            "name"=> "super-admin",
        ]);

        Role::create([
            "name"=> "admin",
        ]);

        Role::create([
            "name"=> "user",
        ]);

        $superAdminUser = User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'superadmin@admin.com',
            "status" => 'approved',
        ]);

        $superAdminUser->roles()->attach($superAdminRole->id);
    }
}
