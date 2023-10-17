<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    use HasFactory;
    protected $table = 'meal';

    //Ensure model information

    protected $fillable = [
        'id_patient',
        'horario',
        'refeicao',
    ];

    //Function create meal in BD

    public function store($meal)
    {
        $this->fill($meal);
        $this->save();
        return ["message" => "Anaminesia registered successfully!"];
    }

    //Function update meal in BD

    public function edit($meal, $id)
    {
        $infoEdit = Meal::find($id);

        if (!$infoEdit) {
            return ["message" => "Meal not found!"];
        }

        $infoEdit->fill($meal);
        $infoEdit->save();

        return ["message" => "Successfully altered anaminesia!"];
    }

    //Function delete meal in BD

    public function erase($id)
    {
        $infoErase = Meal::find($id);

        if (!$infoErase) {
            return ["message" => "Meal not found!"];
        }

        $infoErase->delete();

        return ["message" => "Meal successfully deleted!"];
    }

    //Function extend anamneses with patient in BD

    public function patients()
    {
        return $this->belongsTo(patient::class, 'id_patient', 'id');
    }
}
