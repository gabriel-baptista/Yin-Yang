<?php

namespace App\Http\Controllers;

use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class MealController extends Controller
{
    public function __construct(private Meal $meal)
    {   
    }

    public function store(Request $request)
    {
        $this->meal->store($request->input());
        
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
        $this->meal->edit($request->input(), $id);
        
        return ['message' => 'Cadatrado com sucesso'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->meal->erase($id);

        return ['message' => 'Deletado com sucesso'];
    }
}
