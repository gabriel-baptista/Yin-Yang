<?php

namespace App\Http\Controllers;

use App\Models\Nutricionist;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class NutricionistController extends Controller
{
    public function __construct(private Nutricionist $nutricionist)
    {   
    }

    public function store(Request $request)
    {
        $this->nutricionist->store($request->input());
        
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
        $this->nutricionist->edit($request->input(), $id);
        
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
        $this->nutricionist->destroy($id);

        return ['message' => 'Deletado com sucesso'];
    }
}
