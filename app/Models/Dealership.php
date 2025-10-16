<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dealership extends Model
{
    //nombre de la tabla
     protected $table = 'dealership';
     
     protected $fillable = [
        'model',
        'brand',
        'engine',
        'power',
        'price',
        'year',
        'image_path',
    ];
}
