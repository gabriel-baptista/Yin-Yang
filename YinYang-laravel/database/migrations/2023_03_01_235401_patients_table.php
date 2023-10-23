<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patients', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->unsignedInteger('id_nutricionist');
            $table->string('nome', 100);
            $table->string('login', 100)->unique();
            $table->string('password', 100);
            $table->string('email', 100);
            $table->string('celular', 13);
            $table->char('ativo', 1);
            $table->integer('nivel_acesso');
            $table->timestamps();

            $table->foreign('id_nutricionist')->references('id')->on('nutricionist');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patients');        
    }
};
