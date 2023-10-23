<?php

use App\Http\Controllers\AnamnesisController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\MealController;
use App\Http\Controllers\NutricionistController;
use App\Http\Controllers\ReceipController;
use App\Http\Controllers\UserController;
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
Route::post('/anamnese', 'App\Http\Controllers\AnamnesisController@store');
Route::put('/anamnese/{id}', 'App\Http\Controllers\AnamnesisController@update');
Route::delete('/anamnese/{id}', 'App\Http\Controllers\AnamnesisController@destroy');

//Appointment
Route::post('/appointment', 'App\Http\Controllers\AppointmentController@store');
Route::put('/appointment/{id}', 'App\Http\Controllers\AppointmentController@update');
Route::delete('/appointment/{id}', 'App\Http\Controllers\AppointmentController@destroy');

//Bioimpedance
Route::post('/bioimpedance', 'App\Http\Controllers\BioimpedanceController@store');
Route::put('/bioimpedance/{id}', 'App\Http\Controllers\BioimpedanceController@update');
Route::delete('/bioimpedance/{id}', 'App\Http\Controllers\BioimpedanceController@destroy');

//Meal
Route::post('/meal', 'App\Http\Controllers\MealController@store');
Route::put('/meal/{id}', 'App\Http\Controllers\MealController@update');
Route::delete('/meal/{id}', 'App\Http\Controllers\MealController@destroy');

//Nutricionist
Route::post('/nutricionist', 'App\Http\Controllers\NutricionistController@store');
Route::put('/nutricionist/{id}', 'App\Http\Controllers\NutricionistController@update');
Route::delete('/nutricionist/{id}', 'App\Http\Controllers\NutricionistController@destroy');

//Receip
Route::post('/receip', 'App\Http\Controllers\ReceipController@store');
Route::put('/receip/{id}', 'App\Http\Controllers\ReceipController@update');
Route::delete('/receip/{id}', 'App\Http\Controllers\ReceipController@destroy');

//User
Route::post('/user/store', 'App\Http\Controllers\UserController@store');
Route::put('/user/update/{id}', 'App\Http\Controllers\UserController@update');
Route::put('/user/password/{id}', 'App\Http\Controllers\UserController@resetPassword');
Route::delete('/user/destroy/{id}', 'App\Http\Controllers\UserController@destroy');
