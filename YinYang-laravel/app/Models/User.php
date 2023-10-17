<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'login',
        'password',
        'ativo',
        'nivel_acesso',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

     //Function create user in BD

     public function store($user)
     {
         $this->fill($user);
         $this->save();
         return ["message" => "Anaminesia registered successfully!"];
     }
 
     //Function update user in BD
 
     public function edit($user, $id)
     {
         $infoEdit = User::find($id);
 
         if (!$infoEdit) {
             return ["message" => "User not found!"];
         }
 
         $infoEdit->fill($user);
         $infoEdit->save();
 
         return ["message" => "Successfully altered anaminesia!"];
     }
 
     //Function delete user in BD
 
     public function erase($id)
     {
         $infoErase = User::find($id);
 
         if (!$infoErase) {
             return ["message" => "User not found!"];
         }
 
         $infoErase->delete();
 
         return ["message" => "User successfully deleted!"];
     }
 
     //Function extend anamneses with patient in BD
 
     public function patients()
     {
         return $this->belongsTo(Patient::class, 'id_patient', 'id');
     }
}
