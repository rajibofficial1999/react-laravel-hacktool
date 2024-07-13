<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\LinkStoreRequest;
use App\Http\Requests\LinkUpdateRequest;
use App\Models\AccountType;
use App\Models\Link;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class LinkController extends Controller
{

    public function index()
    {
        $links = Link::with('type')->latest()->paginate(10);

        return Inertia::render("Admin/MyLinks/Index", [
            "links"=> $links,
        ]);
    }

    public function viewLinks()
    {
        $links = Link::with('type')->latest()->paginate(10);



        return Inertia::render("Admin/Links/Index", [
            "links"=> $links,
        ]);
    }

    public function create()
    {
        return Inertia::render("Admin/Links/Create", [
            'types' => AccountType::whereStatus(true)->get()
        ]);
    }

    public function store(LinkStoreRequest $request): RedirectResponse
    {
        $data = $request->validated();

        Link::create($data);

        return redirect()->route('admin.links.viewLinks')->with('success','The link has successfully created');
    }

    public function edit(Link $link)
    {
        return Inertia::render("Admin/Links/Edit", [
            'link' => $link,
            'types' => AccountType::whereStatus(true)->get()
        ]);
    }

    public function update(LinkUpdateRequest $request, Link $link): RedirectResponse
    {
        $data = $request->validated();

        $link->update($data);

        return redirect()->route('admin.links.viewLinks')->with('success','The link has successfully updated');
    }

    public function destroy(Link $link): RedirectResponse
    {
        $link->delete();

        return redirect()->back()->with('success','The link has successfully deleted');
    }
}
