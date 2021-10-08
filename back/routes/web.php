<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClasseController;
use App\Http\Controllers\EtudiantController;

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
Route::get('',[EtudiantController::class,'index']);
Route::get('classe',[ClasseController::class,'index']);
Route::post('create',[EtudiantController::class,'create']);
Route::post('search',[EtudiantController::class,'store']);
Route::get('show/{etudiant}',[EtudiantController::class,'show']);
Route::get('edit/{etudiant}',[EtudiantController::class,'edit']);
Route::put('update/{etudiant}',[EtudiantController::class,'update']);
Route::delete('delete/{etudiant}',[EtudiantController::class,'destroy']);
Route::post('classe',[ClasseController::class,'store']);
