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
        'nome',
        'ingredientes',
        'modo_preparo',
    ];

    //Function create receips in BD

    public function store($receips)
    {
        $idNutricionist = session()->get('id') ?? 1;

        $receips['id_nutricionist'] = $idNutricionist;

        $this->fill($receips);
        $this->save();
        return ["message" => "Recipe registered successfully!"];
    }

    //Function update receips in BD

    public function edit($infoEdit, $id)
    {
        $receip = Receip::find($id);

        if (!$receip) {
            return ["message" => "Receips not found!"];
        }

        $receip->fill($infoEdit);
        $receip->save();

        return ["message" => "Successfully altered recipe!"];
    }

    //Function delete receips in BD

    public function erase($id)
    {
        $receip = Receip::find($id);

        if (!$receip) {
            return ["message" => "Receips not found!"];
        }

        $receip->delete();

        return ["message" => "Receips successfully deleted!"];
    }

    public function list()
    {
        $receips = Receip::where('id_nutricionist', session()->get('id') ?? 1)
            ->orderBy('nome')
            ->get(['id','nome', 'ingredientes', 'modo_preparo']);

        return $receips;
    }

    //Function extend receips with nutriocionist in BD

    public function nutricionist()
    {
        return $this->hasMany(Nutricionist::class, 'id_nutricionist', 'id');
    }
}
