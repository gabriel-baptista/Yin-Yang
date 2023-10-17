<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Anamnesis;
use Illuminate\Routing\Controller;
use Symfony\Component\HttpKernel\Event\RequestEvent;

class AnamnesisController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __construct(private Anamnesis $anamnesis)
    {   
    }

    public function store(Request $request)
    {
        $this->anamnesis->store($request->input());
        
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
        $this->anamnesis->edit($request->input(), $id);
        
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
        $this->anamnesis->destroy($id);

        return ['message' => 'Deletado com sucesso'];
    }

    public function search($id = null){

    }
}
