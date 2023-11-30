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
        'id_patient',
        'peso_gordura',
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

    public function infoPatient($id_patient)
    {
        $infoPatient = Bioimpedance::where('id_patient', $id_patient)
            //->where('id_nutricionist', session()->get('id')??1)
            ->get();

        return $infoPatient;
    }

    public function infoChartPatient($id_patient)
    {
        $currentDate = now();
        $oneMonthAgo = now()->subMonth();

        $infoMuscle = Bioimpedance::where('id_patient', $id_patient)
            // ->whereBetween('data_consulta', [$oneMonthAgo, $currentDate])
            ->orderBy('data_consulta')
            ->get(['peso_muscular AS y', 'data_consulta AS x']);

        $infoWater = Bioimpedance::where('id_patient', $id_patient)
            // ->whereBetween('data_consulta', [$oneMonthAgo, $currentDate])
            ->orderBy('data_consulta')
            ->get(['agua_consulta AS y', 'data_consulta AS x']);

        $infoBody = Bioimpedance::where('id_patient', $id_patient)
            // ->whereBetween('data_consulta', [$oneMonthAgo, $currentDate])
            ->orderBy('data_consulta')
            ->get(['peso_consulta AS y', 'data_consulta AS x']);

        $infoFat = Bioimpedance::where('id_patient', $id_patient)
            // ->whereBetween('data_consulta', [$oneMonthAgo, $currentDate])
            ->orderBy('data_consulta')
            ->get(['peso_gordura AS y', 'data_consulta AS x']);

        $infoPercentFat = Bioimpedance::where('id_patient', $id_patient)
            // ->whereBetween('data_consulta', [$oneMonthAgo, $currentDate])
            ->orderBy('data_consulta')
            ->get(['percentual_gordura AS y', 'data_consulta AS x']);

        $infoCards = Bioimpedance::where('id_patient', $id_patient)
            ->orderByDesc('data_consulta')
            ->first(['peso_consulta', 'imc', 'basal', 'pontuacao']);

        $formattedCharts = [
            [
                'muscleChart' => $infoMuscle,
                'waterChart' => $infoWater,
                'bodyChart' => $infoBody,
                'fatChart' => $infoFat,
                'percentFatChart' => $infoPercentFat,
            ],
        ];

        $formattedCards = [
            [
                'peso' => $infoCards['peso_consulta'],
                'imc' => $infoCards['imc'],
                'basal' => $infoCards['basal'],
                'pontuacao' => $infoCards['pontuacao'],
            ]
        ];

        $formattedData = [
            [
                'charts' => $formattedCharts,
                'cards' => $formattedCards,
            ],
        ];

        return $formattedData;
    }

    //Function extend bioimpedance with appointment in BD

    public function appointment()
    {
        return $this->belongsTo(Appointment::class, 'id_appointment', 'id');
    }
}
