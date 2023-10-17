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
        'musculo_esqueletico',
        'massa_magra',
        'gordura_corporal',
        'massa_gorda',
        'agua_consulta',
        'circunferencia_cintura',
        'imc',
        'tmb',
        'pontuacao',
    ];

    //Function create bioimpedance in BD

    public function store($bioimpedance)
    {
        $this->fill($bioimpedance);
        $this->save();
        return ["message" => "Bioimpedance registered successfully!"];
    }

    //Function update bioimpedance in BD

    public function edit($bioimpedance, $id)
    {
        $infoEdit = Bioimpedance::find($id);

        if (!$infoEdit) {
            return ["message" => "Bioimpedance not found!"];
        }

        $infoEdit->fill($bioimpedance);
        $infoEdit->save();

        return ["message" => "Successfully altered bioimpedance!"];
    }

    //Function delete bioimpedance in BD

    public function erase($id)
    {
        $infoErase = Bioimpedance::find($id);

        if (!$infoErase) {
            return ["message" => "Bioimpedance not found!"];
        }

        $infoErase->delete();

        return ["message" => "Bioimpedance successfully deleted!"];
    }

    //Function extend bioimpedance with appointment in BD

    public function appointment()
    {
        return $this->belongsTo(Appointment::class, 'id_appointment', 'id');
    }
}
