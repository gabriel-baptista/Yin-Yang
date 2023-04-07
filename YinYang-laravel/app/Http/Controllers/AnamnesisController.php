<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Anamnesis;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class AnamnesisController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $anamnesis = $request->only([
            'id_pacient', 
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
        ]);

        Anamnesis::create($anamnesis);
        
        return ['message' => 'Cadatrado com sucesso'];
    }

    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $anamnesis = Anamnesis::find($id);

        $anamnesisEdit = $request->only([
            'id_pacient', 
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
        ]);

        $anamnesis->fill($anamnesisEdit);
        $anamnesis->save();
        
        return ['message' => 'Editado com sucesso'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Anamnesis::destroy($id);

        return ['message' => 'Deletado com sucesso'];
    }
}
