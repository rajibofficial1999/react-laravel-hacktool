<?php

namespace App\Http\Requests;

use App\Rules\ValidDomain;
use Illuminate\Foundation\Http\FormRequest;

class DomainUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $domain = $this->route('domain');

        return [
            "name" => ["required","string","min:3","max:255", 'unique:domains,name,' . $domain->id, new ValidDomain],
        ];
    }

    public function prepareForValidation(): void
    {
        $i_array = ['http://', 'https://', 'www.', 'https://www.', 'http://www.'];

        $this->merge([
            'name' => str_replace($i_array, '', $this->name)
        ]);
    }
}
