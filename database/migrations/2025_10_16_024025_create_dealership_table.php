<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dealership', function (Blueprint $table) {
             $table->id();
             $table->string('model');          // Modelo del carro
             $table->string('brand');          // Marca
             $table->string('engine');         // Motor
             $table->string('power');          // Potencia (puede ser string para incluir unidades)
             $table->decimal('price', 10, 2);  // Precio con dos decimales
             $table->year('year');             // Año del carro
             $table->string('image_path');     // Ruta o nombre del archivo de la imagen
             $table->string('model_3d');       // Ruta o nombre del modelo 3d
             $table->timestamps();             // created_at y updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dealership');
    }
};
