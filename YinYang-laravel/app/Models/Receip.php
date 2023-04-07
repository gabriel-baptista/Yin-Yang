<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receip extends Model
{
    use HasFactory;
    protected $table = 'receips';

    public function pacients(){
        return $this->hasMany(Pacients::class, 'id_pacient', 'id');
    }
}
