<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anamnesis extends Model
{
    use HasFactory;
    protected $table = 'anamnesis';

    public function pacient(){
        return $this->belongsTo(Pacients::class, 'id_pacient','id');
    }
}
