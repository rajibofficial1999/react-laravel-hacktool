<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AccountType;
use App\Models\Domain;
use App\Models\Link;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class LinkController extends Controller
{

    public function index()
    {
        $links = Link::with('type', 'domain')->latest()->paginate(10);

        return Inertia::render("Admin/Links/Index", [
            "links"=> $links,
        ]);
    }

    public function create()
    {
        return Inertia::render("Admin/Links/Create", [
            'types' => AccountType::whereStatus(true)->get(),
            'domains' => Domain::all()
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'endpoint' => 'required|string|max:100',
            'domain' => 'required|exists:domains,id',
            'type' => 'required|exists:account_types,id',
            'is_query_link' => 'required',
        ]);

        $data['endpoint'] = Str::startsWith($data['endpoint'], '/') ? $data['endpoint'] : '/' . Str::lower($data['endpoint']);
        $data['domain_id'] = $data['domain'];
        $data['is_query_link'] = $data['is_query_link'] == 'no' ? false : true;

        unset($data['domain']);

        Link::create($data);

        return redirect()->route('admin.links.index')->with('success','The link has successfully created');
    }

    public function edit(Link $link)
    {

        return Inertia::render("Admin/Links/Edit", [
            'types' => AccountType::whereStatus(true)->get(),
            'domains' => Domain::all(),
            'link' => $link
        ]);
    }

    public function update(Request $request, Link $link): RedirectResponse
    {
        $data = $request->validate([
            'endpoint' => 'required|string|max:100',
            'domain' => 'required|exists:domains,id',
            'type' => 'required|exists:account_types,id',
            'is_query_link' => 'required',
        ]);

        $data['endpoint'] = Str::startsWith($data['endpoint'], '/') ? $data['endpoint'] : '/' . Str::lower($data['endpoint']);
        $data['domain_id'] = $data['domain'];
        $data['is_query_link'] = $data['is_query_link'] == 'no' ? false : true;

        unset($data['domain']);

        $link->update($data);

        return redirect()->route('admin.links.index')->with('success','The link has successfully updated');
    }

    public function destroy(Link $link): RedirectResponse
    {
        $link->delete();

        return redirect()->back()->with('success','The link has successfully deleted');
    }
}
