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
        $admin = Role::create([
            "name"=> "admin",
        ]);

        Role::create([
            "name"=> "user",
        ]);

        $user = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@admin.com',
            'reference_id' => random_int(1111111111, 99999999999),
            "status" => 'approved',
        ]);

        $user->roles()->attach($admin->id);
    }
}
