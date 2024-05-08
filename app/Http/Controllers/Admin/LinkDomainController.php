<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\LinkDomainStoreRequest;
use App\Http\Requests\LinkDomainUpdateRequest;
use App\Models\AccountType;
use App\Models\LinkDomain;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class LinkDomainController extends Controller
{
    public function index()
    {
        $linkDomains = LinkDomain::with('type')->latest()->paginate(10);

        return Inertia::render("Admin/LinkDomains/Index", [
            "linkDomains"=> $linkDomains,
        ]);
    }

    public function create()
    {
        return Inertia::render("Admin/LinkDomains/Create", [
            'types' => AccountType::whereStatus(true)->get()
        ]);
    }

    public function store(LinkDomainStoreRequest $request): RedirectResponse
    {
        $data = $request->validated();

        if (!Str::contains($data['endpoint'], '/')) {
            $data['endpoint'] = '/' . $data['endpoint'];
        }

        if (Str::contains($data['domain'], 'www.')) {
            $data['domain'] = explode('www.', $data['domain'])[1];
        }

        LinkDomain::create($data);

        return redirect()->route('admin.linkdomains.index')->with('success','The link domain has successfully created');
    }

    public function edit(LinkDomain $linkDomain)
    {
        return Inertia::render("Admin/LinkDomains/Edit", [
            'linkDomain' => $linkDomain,
            'types' => AccountType::whereStatus(true)->get()
        ]);
    }

    public function update(LinkDomainUpdateRequest $request, LinkDomain $linkDomain): RedirectResponse
    {
        $data = $request->validated();

        if (!Str::contains($data['endpoint'], '/')) {
            $data['endpoint'] = '/' . $data['endpoint'];
        }

        $linkDomain->update($data);

        return redirect()->route('admin.linkdomains.index')->with('success','The link domain has successfully updated');
    }

    public function destroy(LinkDomain $linkDomain): RedirectResponse
    {
        $linkDomain->delete();

        return redirect()->back()->with('success','The link domain has successfully deleted');
    }
}
