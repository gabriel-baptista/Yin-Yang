<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bioimpedance extends Model
{
    use HasFactory;
    protected $table = 'bioimpedance_appointment';

    //Ensure model information

    protected $fillable = [
        'id_appointment',
        'peso_consulta',
        'peso_muscular',
        'massa_magra',
        'percentual_gordura',
        'agua_consulta',
        'imc',
        'basal',
        'pontuacao',
        'data_consulta',
    ];

    //Function create bioimpedance in BD

    public function store($bioimpedance)
    {
        $this->fill($bioimpedance);
        $this->save();
        return ["message" => "Bioimpedance registered successfully!"];
    }

    //Function update bioimpedance in BD

    public function edit($infoEdit, $id)
    {
        $bioimpedance = Bioimpedance::find($id);

        if (!$bioimpedance) {
            return ["message" => "Bioimpedance not found!"];
        }

        $bioimpedance->fill($infoEdit);
        $bioimpedance->save();

        return ["message" => "Successfully altered bioimpedance!"];
    }

    //Function delete bioimpedance in BD

    public function erase($id)
    {
        $bioimpedance = Bioimpedance::find($id);

        if (!$bioimpedance) {
            return ["message" => "Bioimpedance not found!"];
        }

        $bioimpedance->delete();

        return ["message" => "Bioimpedance successfully deleted!"];
    }

    //Function extend bioimpedance with appointment in BD

    public function appointment()
    {
        return $this->belongsTo(Appointment::class, 'id_appointment', 'id');
    }
}
