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

//Appointment
Route::post('/appointment/store', 'App\Http\Controllers\AppointmentController@store');
Route::put('/appointment/update/{id}', 'App\Http\Controllers\AppointmentController@update');
Route::delete('/appointment/destroy/{id}', 'App\Http\Controllers\AppointmentController@destroy');
Route::get('/appointment/list', 'App\Http\Controllers\AppointmentController@list');

//Bioimpedance
Route::post('/bioimpedance/store', 'App\Http\Controllers\BioimpedanceController@store');
Route::put('/bioimpedance/update/{id}', 'App\Http\Controllers\BioimpedanceController@update');
Route::delete('/bioimpedance/destroy/{id}', 'App\Http\Controllers\BioimpedanceController@destroy');
Route::get('/bioimpedance/info/{id}', 'App\Http\Controllers\BioimpedanceController@infoPatient');
Route::get('/bioimpedance/info/chart/{id}', 'App\Http\Controllers\BioimpedanceController@infoChartPatient');

//Dashboard
Route::get('/dashboard/chart', 'App\Http\Controllers\PatientController@chart');

//Meal
Route::post('/meal/store', 'App\Http\Controllers\MealController@store');
Route::put('/meal/update/{id}', 'App\Http\Controllers\MealController@update');
Route::delete('/meal/destroy/{id}', 'App\Http\Controllers\MealController@destroy');

//Nutricionist
Route::post('/nutricionist/store', 'App\Http\Controllers\NutricionistController@store');
Route::put('/nutricionist/update/{id}', 'App\Http\Controllers\NutricionistController@update');
Route::delete('/nutricionist/destroy/{id}', 'App\Http\Controllers\NutricionistController@destroy');

//Patient
Route::post('/patient/store', 'App\Http\Controllers\PatientController@store');
Route::put('/patient/update/{id}', 'App\Http\Controllers\PatientController@update');
Route::delete('/patient/destroy/{id}', 'App\Http\Controllers\PatientController@destroy');
Route::get('/patient/list', 'App\Http\Controllers\PatientController@list');

//Receip
Route::post('/recipe/store', 'App\Http\Controllers\ReceipController@store');
Route::put('/recipe/update/{id}', 'App\Http\Controllers\ReceipController@update');
Route::delete('/recipe/destroy/{id}', 'App\Http\Controllers\ReceipController@destroy');
Route::get('/recipe/list/', 'App\Http\Controllers\ReceipController@list');

//User
Route::post('/user/store', 'App\Http\Controllers\UserController@store');
Route::post('/user/login/', 'App\Http\Controllers\UserController@login');
Route::get('/user/session/{id}', 'App\Http\Controllers\UserController@session');
Route::put('/user/update/{id}', 'App\Http\Controllers\UserController@update');
Route::put('/user/password/{id}', 'App\Http\Controllers\UserController@resetPassword');
Route::delete('/user/destroy/{id}', 'App\Http\Controllers\UserController@destroy');
