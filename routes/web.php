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

Route::get('/', function () {
    return view('landingPage');
});
Route::get('/landingPage', function () {
    return view('landingPage');
});
Route::get('/subway', function () {
    return view('subway');
});

Route::get('/subwayD', function () {
    return view('subwayD');
});
Route::get('/subwayBlack', function () {
    return view('subwayBlack');
});
Route::get('/subwayBlackColor', function () {
    return view('subwayBlackColor');
});
Route::get('/inquire', function () {
    return view('inquire');
});

Route::get('/vision', function () {
    return view('vision');
});


Route::get('/team', function () {
    return view('team');
});

Route::get('/press', function () {
    return view('press');
});

Route::get('/legal', function () {
    return view('legal');
});
