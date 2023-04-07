<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NutricionistController extends Controller
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
         $nutricionist = $request->only([
            'id_user',
            'nome',
            'email',
            'celular',
            'crn',
            'estado',
            'cidade',
            'bairro',
            'rua',
            'cep',
        ]);

        Meal::create($meal);

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
        $meal = Meal::find($id);

        $mealEdit = $request->only([
            'id_user',
            'nome',
            'email',
            'celular',
            'crn',
            'estado',
            'cidade',
            'bairro',
            'rua',
            'cep',
        ]);

        $meal->fill($mealEdit);
        $meal->save();
        
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
