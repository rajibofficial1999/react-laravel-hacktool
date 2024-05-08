<?php
namespace App\Rules;

use App\Models\LinkDomain;
use Illuminate\Contracts\Validation\Rule;

class UniqueDomainEndpoint implements Rule
{
    public function __construct(protected string $endpoint, protected ?LinkDomain $linkDomain = null){}

    public function passes($attribute, $value)
    {
        $linkDomain = LinkDomain::whereDomain($value)->whereEndpoint($this->endpoint);
        if($this->linkDomain && $this->linkDomain !== null){
            $linkDomain = $linkDomain->where('id', '!=', $this->linkDomain->id);
        }

        if($linkDomain->first()){
            return false;
        }

        return true;
    }

    public function message()
    {
        return 'The :attribute already exists with same endpoint.';
    }
}
