<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $appointment = $request->only([
            'id_pacient',
            'id_nutricionist',
            'status',
        ]);

        Appointment::create($appointment);

        return ['message' => 'Cadastrado com sucesso!'];
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
        $appointment = Appointment::find($id);

        $appointmentEdit = $request->only([
            'id_pacient',
            'is_nutricionist',
            'status',
        ]);

        $appointment->fill($appointmentEdit);
        $appointment->save();

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
        $appointment = Appointment::find($id);

        $appointment->desroy();

        return ['message' => 'Deletado com sucesso!'];
    }
}
