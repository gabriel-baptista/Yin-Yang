<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Anamnesis extends Model
{
    use HasFactory;
    protected $table = 'anamnesis';

    //Ensure model information

    protected $fillable = [
        'id_patient',
        'objetivo_acompanhamento',
        'plano_mais_execicios',
        'dificuldades',
        'uso_medicamentos',
        'medicamentos',
        'doencas',
        'alergias_intolerancias',
        'horario_mais_fome',
        'mastigacao',
        'habito_alimentacao',
        'agua_dia',
        'peso_anamnese',
        'intestino',
        'sensacao_comer',
        'peso_inicial',
        'horas_sono',
        'tipo_sono',
        'estresse',
        'ansiedade',
        'equilibrio_vida',
        'motivacao',
    ];

    //Function create anamnesis in BD

    public function store($anamnesis)
    {
        $this->fill($anamnesis);
        $this->save();
        return ["message" => "Anaminesia registered successfully!"];
    }

    //Function update anamnesis in BD

    public function edit($infoEdit, $id)
    {
        $anamnesis = Anamnesis::find($id);

        if (!$anamnesis) {
            return ["message" => "Anamnesis not found!"];
        }

        $anamnesis->fill($infoEdit);
        $anamnesis->save();

        return ["message" => "Successfully altered anaminesia!"];
    }

    //Function delete anamnesis in BD

    public function erase($id)
    {
        $anamnesis = Anamnesis::find($id);

        if (!$anamnesis) {
            return ["message" => "Anamnesis not found!"];
        }

        $anamnesis->delete();

        return ["message" => "Anamnesis successfully deleted!"];
    }

    //Function extend anamneses with patient in BD

    public function patients()
    {
        return $this->belongsTo(Patient::class, 'id_patient', 'id');
    }
}
