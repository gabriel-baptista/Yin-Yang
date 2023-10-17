<?php

namespace App\Http\Controllers;

use App\Models\Bioimpedance;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class BioimpedanceController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __construct(private Bioimpedance $bioimpedance)
    {   
    }

    public function store(Request $request)
    {
        $this->bioimpedance->store($request->input());
        
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
        $this->bioimpedance->edit($request->input(), $id);
        
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
        $this->bioimpedance->destroy($id);

        return ['message' => 'Deletado com sucesso'];
    }
}
