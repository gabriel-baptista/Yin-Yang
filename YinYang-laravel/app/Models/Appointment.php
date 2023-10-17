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
        'status',
    ];

    //Function create appointment in BD

    public function store($appointment)
    {
        $this->fill($appointment);
        $this->save();
        return ["message" => "Appointment registered successfully!"];
    }

    //Function update appointment in BD

    public function edit($appointment, $id)
    {
        $infoEdit = Appointment::find($id);

        if (!$infoEdit) {
            return ["message" => "Appointment not found!"];
        }

        $infoEdit->fill($appointment);
        $infoEdit->save();

        return ["message" => "Successfully altered appointment!"];
    }

    //Function delete appointment in BD

    public function erase($id)
    {
        $infoErase = Appointment::find($id);

        if (!$infoErase) {
            return ["message" => "Appointment not found!"];
        }

        $infoErase->delete();

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
