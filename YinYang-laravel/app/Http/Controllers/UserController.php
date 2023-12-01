<?php

namespace App\Http\Controllers;

use App\Models\Nutricionist;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class UserController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function __construct(private User $user, private Nutricionist $nutricionist)
    {
        // $this->middleware('api')->except(['login', 'store']);
    }

    public function store(Request $information)
    {

        $user = [
            'login' => $information->login,
            'password' => $information->senha,
        ];

        $id_user = $this->user->store($user);

        $nutricionist = [
            'id_user' => $id_user,
            'nome' => $information->nome,
            'email' => $information->email,
            'celular' => $information->celular,
            'crn' => $information->crn,
            'estado' => $information->estado,
            'cidade' => $information->cidade,
            'bairro' => $information->bairro,
            'rua' => $information->rua,
            'cep' => $information->cep,
        ];

        $this->nutricionist->store($nutricionist);

        return ['message' => 'Usuário cadastrado com sucesso!'];
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
        $this->user->edit($request->input(), $id);

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
        $this->user->erase($id);

        return ['message' => 'Deletado com sucesso'];
    }

    public function login(Request $credentials)
    {
        return $this->user->login($credentials);

        // return ['message' => 'Usuário logado com sucesso'];
    }

    public function resetPassword(Request $request, $id)
    {
        $this->user->resetPassword($request->input(), $id);

        return ['message' => 'Senha alterada com sucesso'];
    }

    public function logout()
    {
        $this->user->logout();

        return ['message' => 'Usuário deslogado com sucesso'];
    }
}
