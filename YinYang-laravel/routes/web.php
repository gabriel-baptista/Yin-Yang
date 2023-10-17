<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$controllerPath = 'App\Http\Controllers';
//Home
Route::get('/', function () {
    return view('welcome');
});

//Anamnese
Route::resource('/anamnese', $controllerPath . '\AnamnesisController')->names('anamnesis')->parameters(['anamnesis' => 'anamnesis']);

//Apponintment
Route::resource('/consulta', $controllerPath . '\AppointmentController')->names('appointment')->parameters(['appointment' => 'appointment']);

//Bioimpendance
Route::resource('/bioimpedancia', $controllerPath . '\BioimpedanceController')->names('bioimpedance')->parameters(['bioimpedance' => 'bioimpedance']);

//Meal
Route::resource('/refeicao', $controllerPath . '\MealController')->names('meal')->parameters(['meal' => 'meal']);

//Nutricionist
Route::resource('/nutricionista', $controllerPath . '\NutricionistController')->names('nutricionist')->parameters(['nutricionist' => 'nutricionist']);

//patient
Route::resource('/patiente', $controllerPath . '\patientController')->names('patient')->parameters(['patient' => 'patient']);

//Receips
Route::resource('/receitas', $controllerPath . '\ReceipController')->names('receip')->parameters(['receip' => 'receip']);

//User
Route::resource('/usuario', $controllerPath . '\UserController')->names('user')->parameters(['user' => 'user']);