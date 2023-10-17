<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patient extends Model
{
    use HasFactory;
    protected $table = 'patients';

    //Ensure model information

    protected $fillable = [
        'id_nutricionist',
        'nome',
        'login',
        'password',
        'email',
        'celular',
        'ativo',
        'nivel_acesso',
    ];

    //Function create patients in BD

    public function store($patients)
    {
        $this->fill($patients);
        $this->save();
        return ["message" => "Anaminesia registered successfully!"];
    }

    //Function update patients in BD

    public function edit($patients, $id)
    {
        $infoEdit = Patient::find($id);

        if (!$infoEdit) {
            return ["message" => "Patients not found!"];
        }

        $infoEdit->fill($patients);
        $infoEdit->save();

        return ["message" => "Successfully altered anaminesia!"];
    }

    //Function delete patients in BD

    public function erase($id)
    {
        $infoErase = Patient::find($id);

        if (!$infoErase) {
            return ["message" => "Patients not found!"];
        }

        $infoErase->delete();

        return ["message" => "Patients successfully deleted!"];
    }

    //Function extend anamneses with patient in BD

    public function nutricionist()
    {
        return $this->belongsTo(Nutricionist::class, 'id_nutricionist', 'id');
    }
}
