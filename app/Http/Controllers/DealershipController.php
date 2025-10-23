<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Dealership;

class DealershipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('dealershipPage/dealeship');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    //metodo para buscar el modelo del carro
    public function search(Request $request)
    {
        $query = $request->input('query');

        $dealerships = Dealership::where('model', 'like', "%{$query}%")
            ->orWhere('brand', 'like', "%{$query}%")
            ->get();

        if ($dealerships->count() === 1) {
            return response()->json($dealerships->first());
        } elseif ($dealerships->count() > 1) {
            return response()->json(['message' => 'Se encontraron varios resultados, por favor especifica más.'], 422);
        } else {
            return response()->json(['message' => 'No se encontraron resultados.'], 404);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
