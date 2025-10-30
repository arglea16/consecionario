<?php

use App\Http\Controllers\DealershipController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/d', function () {
    return Inertia::render('welcomeD');
})->name('homes');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// routas para busqueda de carros y renderizar page
Route::get('/dealerships',[DealershipController::class,'carousel']);
Route::get('dealershipPage/dealeship',[DealershipController::class,'index'])->name('dealership');
Route::get('/cars/search',[DealershipController::class,'search']);


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
