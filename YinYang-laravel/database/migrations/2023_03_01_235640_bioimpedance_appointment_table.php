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
            $table->decimal('peso_consulta', 3, 2);
            $table->decimal('peso_muscular', 3, 2);
            $table->decimal('massa_magra', 3, 2);
            $table->decimal('percentual_gordura', 3, 2);
            $table->decimal('agua_consulta', 3, 2);
            $table->decimal('imc', 3, 2);
            $table->decimal('basal', 5, 2);
            $table->decimal('pontuacao', 3, 2);
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
