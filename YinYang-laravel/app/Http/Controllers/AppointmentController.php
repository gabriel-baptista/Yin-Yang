<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class AppointmentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __construct(private Appointment $appointment)
    {   
    }

    public function store(Request $request)
    {
        $this->appointment->store($request->input());
        
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
        $this->appointment->edit($request->input(), $id);
        
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
        $this->appointment->destroy($id);

        return ['message' => 'Deletado com sucesso'];
    }
}
