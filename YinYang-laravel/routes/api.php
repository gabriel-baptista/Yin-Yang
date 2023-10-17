<?php

use App\Http\Controllers\AnamnesisController;
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

//Anamese
Route::controller(AnamnesisController::class)
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::post('/anamnese', 'store');
        Route::put('/anamnese/{id}', 'edit');
        Route::delete('/anamnese/{id}', 'erase');
    });


//Appointment
Route::controller(AppointmentController::class)
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::post('/appointment', 'store');
        Route::put('/appointment/{id}', 'edit');
        Route::delete('/appointment/{id}', 'erase');
    });

//Bioimpedance
Route::controller(BioimpedanceController::class)
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::post('/bioimpedance', 'store');
        Route::put('/bioimpedance/{id}', 'edit');
        Route::delete('/bioimpedance/{id}', 'erase');
    });

//Meal
Route::controller(MealController::class)
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::post('/meal', 'store');
        Route::put('/meal/{id}', 'edit');
        Route::delete('/meal/{id}', 'erase');
    });

//Nutricionist
Route::controller(NutricionistController::class)
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::post('/nutricionist', 'store');
        Route::put('/nutricionist/{id}', 'edit');
        Route::delete('/nutricionist/{id}', 'erase');
    });

//Receip
Route::controller(ReceipController::class)
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::post('/receip', 'store');
        Route::put('/receip/{id}', 'edit');
        Route::delete('/receip/{id}', 'erase');
    });

//User
Route::controller(UserController::class)
    ->middleware('auth:sanctum')
    ->group(function () {
        Route::post('/user', 'store');
        Route::put('/user/{id}', 'edit');
        Route::delete('/user/{id}', 'erase');
    });
