<?php

use App\Http\Middleware\whmcs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    $client = \Whmcs::Client();


    dd($client->GetClients());
    // dd($client->GetClientPassword(['email' => 'desarrollo@certerus.com']));
    // dd($client->GetClientPassword(['email' => 'omar@nubew.com']));

    return $request->user();
})->middleware(whmcs::class);
