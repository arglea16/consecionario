<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DealershipTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('cars')->insert([
            [
                'model' => 'X5',
                'brand' => 'BMW',
                'engine' => '3.0L Turbo I6',
                'power' => '335 hp',
                'price' => 61000.00,
                'year' => 2023,
                'image_path' => 'bmw_x5.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'model' => 'M3',
                'brand' => 'BMW',
                'engine' => '3.0L Twin-Turbo I6',
                'power' => '473 hp',
                'price' => 70000.00,
                'year' => 2023,
                'image_path' => 'bmw_m3.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'model' => 'Corolla',
                'brand' => 'Toyota',
                'engine' => '1.8L I4',
                'power' => '139 hp',
                'price' => 21000.00,
                'year' => 2023,
                'image_path' => 'toyota_corolla.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'model' => 'Camry',
                'brand' => 'Toyota',
                'engine' => '2.5L I4',
                'power' => '203 hp',
                'price' => 25000.00,
                'year' => 2023,
                'image_path' => 'toyota_camry.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
