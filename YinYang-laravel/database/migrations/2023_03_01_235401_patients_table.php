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
            $table->string('sobrenome', 100);
            $table->string('email', 100);
            $table->string('contato', 13);
            $table->integer('ativo');
            $table->string('cidade', 50);
            $table->string('endereco', 150);
            $table->integer('idade');
            $table->char('sexo', 1);
            $table->float('pesoInicial', 10, 2);
            $table->string('usoMedicamento', 100);
            $table->string('exercicios', 100);
            $table->string('observacao', 200);
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
