<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\LinkDomain;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class LinkController extends Controller
{
    public function index()
    {
        $linkDomains = LinkDomain::with('type')->latest()->paginate(10);

        return Inertia::render("Admin/Links/Index", [
            "linkDomains"=> $linkDomains,
        ]);
    }
}
