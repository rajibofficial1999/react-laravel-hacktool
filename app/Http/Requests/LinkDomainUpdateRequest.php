<?php

namespace App\Http\Requests;

use App\Rules\UniqueDomainEndpoint;
use App\Rules\ValidDomain;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class LinkDomainUpdateRequest extends FormRequest
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
        return [
            "domain" => ["required","string","min:3","max:255", new ValidDomain, new UniqueDomainEndpoint($this->endpoint, $this->linkDomain)],
            'endpoint' => 'required|string|min:2|max:255',
            'type' => 'required|numeric|max:255|exists:account_types,id',
        ];
    }
}
