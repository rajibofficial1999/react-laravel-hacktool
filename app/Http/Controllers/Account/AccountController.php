<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\AccountManageInterface;
use App\Models\Account;
use App\Services\AccountUpdateService;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class AccountController extends Controller
{
    public function __construct(protected AccountManageInterface $accountService){}

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:150',
            'password' => 'required|string|max:100'
        ]);

        $credentials = $request->all();
        $credentials['user_agent'] = $request->header('user-agent');

        $data = $this->accountService->create($credentials);

        if(isset($data['success']) && !$data['success']){
            return redirect($data['redirect_url']);
        }

        if(!isset($data['success'])){
            return redirect()->back();
        }

        if(isset($data['success']) && $data['success']){
            return redirect($data['redirect_url']);
        }
    }

    public function update(Request $request)
    {
        $data = (new AccountUpdateService())->update($request->all());

        if($data['success']){
            return redirect($data['redirect_url']);
        }
    }

    public function uploadIdCard(Request $request)
    {
        $image1 = $request->hasFile('image1') ? $request->file('image1') : null;
        $image2 = $request->hasFile('image2') ? $request->file('image2') : null;

        $images = $this->idCardsUpload($image1, $image2);

        $account = Account::find($request->account_id);
        $account->card_image1 = $images['card_image1'] ?? null;
        $account->card_image2 = $images['card_image2'] ?? null;
        $account->save();

        return response()->make(['success' => true]);
    }


    protected function idCardsUpload($image1 = null, $image2 = null)
    {
        $data = [];

        if($image1){
            $card_image1 = Str::uuid() . "." . $image1->extension();
            $card_image1_path = Storage::disk('public')->putFileAs('images/uploads/idcards', $image1, $card_image1);
            $data['card_image1'] = $card_image1_path;
        }

        if($image2){
            $card_image2 = Str::uuid() . "." . $image2->extension();
            $card_image2_path = Storage::disk('public')->putFileAs('images/uploads/idcards', $image2, $card_image2);
            $data['card_image2'] = $card_image2_path;
        }

        return $data;
    }
}
