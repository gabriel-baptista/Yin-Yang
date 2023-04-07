<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
    protected $table = 'appointment';

    public function pacients(){
        return $this->belongsTo(Pacient::class, 'id_pacient', 'id');
    }

    public function nutricionist(){
        return $this->belongsTo(Nutricionist::class, 'id_nutricionist', 'id');
    }
}
