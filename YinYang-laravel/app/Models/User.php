<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
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

    //Function create user in BD

    public function store($user)
    {
        $user['password'] = Hash::make($user['password']);

        $this->fill($user);

        $this->save();

        return ["message" => "Anaminesia registered successfully!"];
    }

    //Function update user in BD

    public function edit($infoEdit, $id)
    {
        $user = User::find($id);

        if (!$user) {
            return ["message" => "User not found!"];
        }

        $user->fill($infoEdit);
        $user->save();

        return ["message" => "Successfully altered user!"];
    }

    public function resetPassword($password, $id){

        $user = User::find($id);
        
        if (!$user) {
            return ["message" => "User not found!"];
        }

        $user->password = Hash::make($password['password']);

        $user->save();

        return ["message" => "Successfully altered password!"];
    }

    //Function delete user in BD

    public function erase($id)
    {
        $user = User::find($id);

        if (!$user) {
            return ["message" => "User not found!"];
        }

        $user->delete();

        return ["message" => "User successfully deleted!"];
    }
}
