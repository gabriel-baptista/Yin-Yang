<?php

namespace App\Models;

// JWT
use Tymon\JWTAuth\Contracts\JWTSubject;
use Tymon\JWTAuth\Facades\JWTAuth;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Contracts\Session\Session;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $primaryKey = "id";

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

        $user['ativo'] = 1;

        $user['nivel_acesso'] = 1;

        $this->fill($user);

        $this->save();

        return $this->id;
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

    //Funcition verifies the credentials of the user

    public function login($credentials)
    {
        $user = User::where("login",$credentials->login)->first();

        if(!$user)
            return ['message' => 'Incorrect login or password'];

            if(Hash::check($credentials->password,$user->password)) {
                $token = JWTAuth::fromUser($user);

                return [
                    "message" => "Logged in successfully",
                    "token" => $token
                ];
            }
            else
                return ['message' => 'Incorrect login or password'];
    }

    public function session($activeUser)
    {
    }

    //Funcition reset password for a user

    public function resetPassword($password, $id)
    {

        $nutricionistId = Nutricionist::where('id', $id)->get('id_user');

        $user = User::find($nutricionistId[0]->id_user);

        if (!$user) {
            return ["message" => "User not found!"];
        }

        $user->password = Hash::make($password['password']);

        $user->save();

        return ["message" => "Successfully altered password!"];
    }

    //Function logged out the user and cleared the session

    public function logout()
    {
        Auth::logout();
        session()->flush();
        return ['message' => 'User logged out successfully.'];
    }

    public function dropSession()
    {
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    private function nutricionist()
    {

        return $this->hasOne(Nutricionist::class, 'id_user');
    }

    public function getJWTCustomClaims()
    {
        return [];

        // $id = $this->id;
        // $infoNutricionist = Nutricionist::where('id_user', $id)
        //     ->get();

        // return [
        //     "id" => $infoNutricionist['id'],
        //     "nome" => $infoNutricionist['nome'],
        //     "id_user" => $infoNutricionist['id_user'],
        //     "email" => $infoNutricionist['email'],
        // ];

        // return ['message' => 'Session start'];
        // session()->put('id', $infoNutricionist['id']);
        // session()->put('nome', $infoNutricionist['nome']);
        // session()->put('id_user', $infoNutricionist['id_user']);
        // session()->put('email', $infoNutricionist['email']);
    }
}
