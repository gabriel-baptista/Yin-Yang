<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pacient extends Model
{
    use HasFactory;
    protected $table = 'pacients';

    public function pacients(){
        return $this->belongsTo(User::class, 'id_user', 'id');
    }

    public function nutricionist(){
        return $this->belongsTo(Nutricionist::class, 'id_nutricionist', 'id');
    }
}
