<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BioimpedanceController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $bioimpedance = $request->only([
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
        ]);

        Bioimpedance::create($bioimpedance);

        return ['message' => 'Cadastrado com sucesso!'];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        $bioimpedance = Bioimpedance::find($id);

        $bioimpedanceEdit = $request->only([
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
        ]);

        $bioimpedance->fill($bioimpedanceEdit);
        $bioimpedance->save();
        
        return ['message' => 'Editado com sucesso!'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
