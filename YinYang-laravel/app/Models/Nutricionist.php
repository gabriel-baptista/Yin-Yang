<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nutricionist extends Model
{
    use HasFactory;
    protected $table = 'nutrocionist';

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

    public function edit($nutricionist, $id)
    {
        $infoEdit = Nutricionist::find($id);

        if (!$infoEdit) {
            return ["message" => "Nutricionist not found!"];
        }

        $infoEdit->fill($nutricionist);
        $infoEdit->save();

        return ["message" => "Successfully altered anaminesia!"];
    }

    //Function delete nutricionist in BD

    public function erase($id)
    {
        $infoErase = Nutricionist::find($id);

        if (!$infoErase) {
            return ["message" => "Nutricionist not found!"];
        }

        $infoErase->delete();

        return ["message" => "Nutricionist successfully deleted!"];
    }

    //Function extend nutricionist with users in BD

    public function users()
    {
        return $this->belongsTo(User::class, 'id_user', 'id');
    }
}
