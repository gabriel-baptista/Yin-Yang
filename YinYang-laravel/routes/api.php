<?php

use App\Http\Controllers\AnamnesisController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$controllerPath = 'App\Http\Controllers';

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Anamese
Route::post('/anamnese', [AnamnesisController::class, 'store']);
Route::put('/anamnese', [AnamnesisController::class, 'update']);
