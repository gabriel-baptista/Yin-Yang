<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receip extends Model
{
    use HasFactory;
    protected $table = 'receips';

    //Ensure model information

    protected $fillable = [
        'id_nutricionist',
        'ingredientes',
        'modo_preparo',
    ];

    //Function create receips in BD

    public function store($receips)
    {
        $this->fill($receips);
        $this->save();
        return ["message" => "Anaminesia registered successfully!"];
    }

    //Function update receips in BD

    public function edit($receip, $id)
    {
        $infoEdit = Receip::find($id);

        if (!$infoEdit) {
            return ["message" => "Receips not found!"];
        }

        $infoEdit->fill($receip);
        $infoEdit->save();

        return ["message" => "Successfully altered anaminesia!"];
    }

    //Function delete receips in BD

    public function erase($id)
    {
        $infoErase = Receip::find($id);

        if (!$infoErase) {
            return ["message" => "Receips not found!"];
        }

        $infoErase->delete();

        return ["message" => "Receips successfully deleted!"];
    }

    //Function extend receips with nutriocionist in BD

    public function nutricionist()
    {
        return $this->hasMany(Nutricionist::class, 'id_nutricionist', 'id');
    }
}
