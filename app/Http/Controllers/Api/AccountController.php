<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Interfaces\AccountManageInterface;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AccountController extends Controller
{
    public function __construct(protected AccountManageInterface $accountService){}

    public function store(Request $request): JsonResponse
    {
        $data = $this->accountService->create($request->all());

        return response()->json($data, Response::HTTP_OK);
    }
}
