<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\DomainStoreRequest;
use App\Http\Requests\DomainUpdateRequest;
use App\Models\Domain;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class DomainController extends Controller
{
    public function index()
    {
        $domains = Domain::latest()->paginate(10);

        return Inertia::render("Admin/Domains/Index", [
            "domains"=> $domains,
        ]);
    }

    public function create()
    {
        return Inertia::render("Admin/Domains/Create");
    }

    public function store(DomainStoreRequest $request): RedirectResponse
    {
        $data = $request->validated();

        Domain::create($data);

        return redirect()->route('admin.domains.index')->with('success','The domain has successfully created');
    }

    public function edit(Domain $domain)
    {
        return Inertia::render("Admin/Domains/Edit", [
            'domain' => $domain,
        ]);
    }

    public function update(DomainUpdateRequest $request, Domain $domain): RedirectResponse
    {
        $data = $request->validated();

        $domain->update($data);

        return redirect()->route('admin.domains.index')->with('success','The domain has successfully updated');
    }

    public function destroy(Domain $domain): RedirectResponse
    {
        $domain->delete();

        return redirect()->back()->with('success','The domain has successfully deleted');
    }
}
