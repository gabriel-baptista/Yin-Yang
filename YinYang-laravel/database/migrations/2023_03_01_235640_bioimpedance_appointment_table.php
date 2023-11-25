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
            $table->unsignedInteger('id_appointment');
            $table->float('peso_consulta', 10, 2);
            $table->float('peso_muscular', 10, 2);
            $table->float('massa_magra', 10, 2);
            $table->float('percentual_gordura', 10, 2);
            $table->float('agua_consulta', 10, 2);
            $table->float('imc', 10, 2);
            $table->float('basal', 10, 2);
            $table->float('pontuacao', 10, 2);
            $table->date('data_consulta');
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
