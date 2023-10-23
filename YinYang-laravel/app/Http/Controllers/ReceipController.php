<?php

namespace App\Http\Controllers;

use App\Models\Receip;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ReceipController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

     public function __construct(private Receip $receips)
     {   
     }
 
     public function store(Request $request)
     {
         $this->receips->store($request->input());
         
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
         $this->receips->edit($request->input(), $id);
         
         return ['message' => 'Cadatrado com sucesso'];
     }
 
     /**
      * Remove the specified resource from storage.
      *
      * @param  int  $id
      * @return \Illuminate\Http\Response
      */
     public function destroy($id)
     {
         $this->receips->erase($id);
 
         return ['message' => 'Deletado com sucesso'];
     }
}
