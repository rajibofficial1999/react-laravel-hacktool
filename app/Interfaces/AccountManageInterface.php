<?php

namespace App\Interfaces;

use App\Models\User;

interface AccountManageInterface
{
    public function create(array $data);
}
