<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nutricionist extends Model
{
    use HasFactory;
    protected $table = 'nutricionist';

    //Ensure model information

    protected $fillable = [
        'id_user',
        'nome',
        'email',
        'celular',
        'crn',
        'estado',
        'cidade',
        'bairro',
        'rua',
        'cep',
    ];

    //Function create nutricionist in BD

    public function store($nutricionist)
    {
        $this->fill($nutricionist);
        $this->save();
        return ["message" => "Anaminesia registered successfully!"];
    }

    //Function update nutricionist in BD

    public function edit($infoEdit, $id)
    {
        $nutricionist = Nutricionist::find($id);

        if (!$nutricionist) {
            return ["message" => "Nutricionist not found!"];
        }

        $nutricionist->fill($infoEdit);
        $nutricionist->save();

        return ["message" => "Successfully altered anaminesia!"];
    }

    //Function delete nutricionist in BD

    public function erase($id)
    {
        $nutricionist = Nutricionist::find($id);

        if (!$nutricionist) {
            return ["message" => "Nutricionist not found!"];
        }

        $nutricionist->delete();

        return ["message" => "Nutricionist successfully deleted!"];
    }

    //Function extend nutricionist with users in BD

    public function users()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}
