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
        Schema::create('bioimpedence_appointment', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->double('peso_consulta', 3, 2);
            $table->double('musculo_esqueletico', 3, 2);
            $table->double('massa_magra', 3, 2);
            $table->double('gordura_corporal', 3, 2);
            $table->double('massa_gorda', 3, 2);
            $table->double('agua_consulta', 3, 2);
            $table->double('circunferencia_cintura', 3, 2);
            $table->double('imc', 3, 2);
            $table->double('tmb', 3, 2);
            $table->double('pontuacao', 3, 2);
            $table->timestamps();
            
            $table->foreign('id_appointment')->references('id')->on('appointment');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bioimpedence_appointment');
    }
};
