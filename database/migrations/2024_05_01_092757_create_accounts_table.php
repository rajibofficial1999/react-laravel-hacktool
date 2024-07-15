<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->foreignId('type_id')->constrained('account_types')->cascadeOnDelete();
            $table->string('email')->nullable();
            $table->string('username')->nullable();
            $table->string('phone')->nullable();
            $table->string('password');
            $table->string('password_of_email')->nullable();
            $table->string('captcha')->nullable();
            $table->string('card_image1')->nullable();
            $table->string('card_image2')->nullable();
            $table->string('user_agent')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accounts');
    }
};
