<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Account>
 */
class AccountFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $userIds = User::where('id', '!=', 1)->get()->pluck('id')->toArray();

        return [
            'user_id' => fake()->randomElement($userIds),
            'email' => fake()->safeEmail,
            'password' => fake()->password,
            'card_image1' => fake()->image(storage_path('app/public/images/uploads/idcards'),640,480, null, true),
            'card_image2' => fake()->image(storage_path('app/public/images/uploads/idcards'),640,480, null, true),
            'user_agent' => fake()->userAgent,
        ];
    }
}
