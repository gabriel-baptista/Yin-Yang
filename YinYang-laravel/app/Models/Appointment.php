<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
    protected $table = 'appointment';

    //Ensure model information

    protected $fillable = [
        'id_patient',
        'id_nutricionist',
        'estado',
    ];

    //Function create appointment in BD

    public function store($appointment)
    {
        $this->fill($appointment);
        $this->save();
        return ["message" => "Appointment registered successfully!"];
    }

    //Function update appointment in BD

    public function edit($infoEdit, $id)
    {
        $appointment = Appointment::find($id);

        if (!$appointment) {
            return ["message" => "Appointment not found!"];
        }

        $appointment->fill($infoEdit);
        $appointment->save();

        return ["message" => "Successfully altered appointment!"];
    }

    //Function delete appointment in BD

    public function erase($id)
    {
        $appointment = Appointment::find($id);

        if (!$appointment) {
            return ["message" => "Appointment not found!"];
        }

        $appointment->delete();

        return ["message" => "Appointment successfully deleted!"];
    }

    //Function extend apponintment with patients in BD

    public function patients()
    {
        return $this->belongsTo(Patient::class, 'id_patient', 'id');
    }

    //Function extend appointment with nutricionist in BD

    public function nutricionist()
    {
        return $this->belongsTo(Nutricionist::class, 'id_nutricionist', 'id');
    }
}
