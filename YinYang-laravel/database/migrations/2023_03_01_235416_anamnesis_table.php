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
        Schema::create('anamnesis', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->unsignedInteger('id_patient');
            $table->string('objetivo_acompanhamento', 100);
            $table->string('plano_mais_exercicios', 100);
            $table->string('dificuldade', 100);
            $table->char('uso_medicamentos', 1);
            $table->string('medicamentos', 100);
            $table->string('doencas', 100);
            $table->string('alergias_intolerancias', 100);
            $table->string('horario_mais_fome', 100);
            $table->string('mastigacao', 100);
            $table->string('habito_alimentacao', 100);
            $table->double('agua_dia', 3,2);
            $table->double('peso_anamnese', 3,2);
            $table->string('intestino', 100);
            $table->string('sensacao_comer', 100);
            $table->double('peso_inicial', 3,2);
            $table->integer('horas_sono');
            $table->string('tipo_sono', 100);
            $table->string('estresse', 100);
            $table->string('ansiedade', 100);
            $table->string('equilibrio_vida', 100);
            $table->string('motivacao', 100);
            $table->timestamps();
            
            $table->foreign('id_patient')->references('id')->on('patients');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('anamnesis');
    }
};
