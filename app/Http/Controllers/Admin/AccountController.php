<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use ZipArchive;

class AccountController extends Controller
{
    public function index()
    {
        $accounts = Account::with(['type','owner'])->latest()->paginate(10);

        if(!Auth::user()->isAdmin){
            $accounts = Account::where('user_id', Auth::id())->with(['type','owner'])->latest()->paginate(10);
        }

        return Inertia::render("Admin/Accounts/Index", [
            "accounts"=> $accounts,
        ]);
    }

    public function destroy(Account $account): RedirectResponse
    {
        $account->delete();

        return redirect()->back()->with('success','The account has successfully deleted');
    }

    // public function cardsDownload($accountId)
    // {
    //     $account = Account::findOrFail($accountId);

    //     $path = Storage::disk('public')->path($account->card_image1);

    //     // return $path;

    //     return response()->download($path);

    //     Storage::download($account->card_image1);

    //     return $account->card_image1;

    //     if (Storage::disk('public')->exists($account->card_image1)) {
    //         $url = Storage::url($account->card_image1);
    //         return redirect($url);
    //     }



    //     return Storage::download($account->card_image1);

    //     $image1_url = Storage::url($account->card_image1);
    //     $image2_url = Storage::url($account->card_image2);

    //     $files = [
    //         'image1_url' => public_path($image1_url),
    //         'image2_url' => public_path($image2_url),
    //     ];

    //     $this->createZip($files);
    // }

    // protected function createZip($files)
    // {
    //     $zip = new ZipArchive;
    //     $fileName = 'cards.zip';

    //     if ($zip->open(public_path($fileName), ZipArchive::CREATE) === TRUE)
    //     {
    //         foreach ($files as $key => $value) {
    //             $relativeName = basename($value);

    //             $zip->addFile($value, $relativeName);
    //         }

    //         $zip->close();
    //     }

    //     // return $zip;

    //     return response()->download(public_path($fileName));
    // }
}
