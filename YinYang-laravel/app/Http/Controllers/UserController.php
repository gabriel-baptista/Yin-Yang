<?php

namespace App\Http\Controllers;

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

    public function __construct(private User $user)
    {
    }

    public function store(Request $request)
    {
        $this->user->store($request->input());

        return ['message' => 'Cadatrado com sucesso'];
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

    public function resetPassword(Request $request, $id)
    {
        $this->user->resetPassword($request->input(), $id);

        return ['message' => 'Senha alterada com sucesso'];
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
}
