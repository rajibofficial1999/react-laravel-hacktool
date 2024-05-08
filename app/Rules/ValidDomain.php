<?php
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class ValidDomain implements Rule
{
    public function passes($attribute, $value)
    {
        // Regex pattern for domain validation
        $pattern = '/^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+)(?:\.[a-zA-Z]{2,})$/';

        // Validate domain against regex pattern
        return preg_match($pattern, $value);
    }

    public function message()
    {
        return 'The :attribute must be a valid domain name.';
    }
}
