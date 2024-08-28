<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        $roles = [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
        ];

        if(!Auth::user()->isAdmin){
            $roles['reference_id'] = ['nullable', 'string', 'max:50', 'min:5', Rule::unique(User::class)->ignore($this->user()->id)];
        }else{
            $roles['reference_id'] = ['required', 'string', 'max:50', 'min:5', Rule::unique(User::class)->ignore($this->user()->id)];
        };

        return $roles;
    }

    protected function prepareForValidation(): void
    {
        $this->merge([
            'reference_id' => $this->reference_id ? strtoupper($this->reference_id) : null,
        ]);
    }
}
