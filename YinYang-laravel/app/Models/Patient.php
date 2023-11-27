<?php

namespace App\Models;

use Illuminate\Contracts\Session\Session;
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
        'sobrenome',
        'email',
        'contato',
        'ativo',
        'cidade',
        'endereco',
        'idade',
        'sexo',
        'pesoInicial',
        'usoMedicamento',
        'exercicios',
        'observacao'
    ];

    //Function create patients in BD

    public function store($patients)
    {
        $idNutricionist = session()->get('id')??1;

        $patients['id_nutricionist'] = $idNutricionist;
        $patients['ativo'] = 1;

        $this->fill($patients);
        $this->save();
        return ["message" => "Patient registered successfully!"];
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
