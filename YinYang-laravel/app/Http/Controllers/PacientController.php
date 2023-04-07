<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PacientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pacient = $request->only([
            'id_user',
            'id_nutricionist',
            'nome',
            'login',
            'password',
            'email',
            'celular',
            'ativo',
            'nivel_acesso',
        ]);

        Pacient::create($pacient);

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
        $pacient = Pacient::find($id);

        $pacientEdit = $request->only([
            'id_user',
            'id_nutricionist',
            'nome',
            'login',
            'password',
            'email',
            'celular',
            'ativo',
            'nivel_acesso',
        ]);

        $pacient->fill($pacientEdit);
        $pacient->save();

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
        //
    }
}
