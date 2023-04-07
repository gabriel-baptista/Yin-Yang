<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nutricionist extends Model
{
    use HasFactory;
    protected $table = 'nutrocionist';

    public function users(){
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}
