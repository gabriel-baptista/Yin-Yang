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

    public function edit($infoEdit, $id)
    {
        $patients = Patient::find($id);

        if (!$patients) {
            return ["message" => "Patients not found!"];
        }

        $patients->fill($infoEdit);
        $patients->save();

        return ["message" => "Successfully altered anaminesia!"];
    }

    //Function delete patients in BD

    public function erase($id)
    {
        $patients = Patient::find($id);

        if (!$patients) {
            return ["message" => "Patients not found!"];
        }

        $patients->delete();

        return ["message" => "Patients successfully deleted!"];
    }

    //Function extend anamneses with patient in BD

    public function nutricionist()
    {
        return $this->belongsTo(Nutricionist::class, 'id_nutricionist', 'id');
    }
}
