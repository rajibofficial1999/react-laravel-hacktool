<?php

namespace Database\Seeders;

use App\Models\Account;
use App\Models\AccountType;
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

        $adminRole = Role::create([
            "name"=> "admin",
        ]);

        $userRole = Role::create([
            "name"=> "user",
        ]);

        $superAdminUser = User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'superadmin@admin.com',
            "status" => 'approved',
        ]);

        $adminUser = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            "status" => 'approved',
            'reference_id' => 'Admin10'
        ]);

        $user = User::factory()->create([
            'name' => 'User',
            'email' => 'user@user.com',
            "status" => 'approved',
            'team_id' => $adminUser->id
        ]);

        $superAdminUser->roles()->attach($superAdminRole->id);
        $adminUser->roles()->attach($adminRole->id);
        $user->roles()->attach($userRole->id);

//        $accountType = AccountType::create(['name' => 'megapersonals']);
//
//        Account::factory(5)->create([
//            'type_id' => $accountType->id,
//        ]);
//
//        $accounts = Account::all();
//
//        foreach ($accounts as $account) {
//            $position = strpos($account->card_image1, 'images/uploads');
//
//            $card_image1 = substr($account->card_image1, $position);
//            $card_image2 = substr($account->card_image2, $position);
//            $account->update([
//                'card_image1' => $card_image1,
//                'card_image2' => $card_image2
//            ]);
//        }

    }
}
