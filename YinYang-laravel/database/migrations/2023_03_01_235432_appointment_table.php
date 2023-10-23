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
        Schema::create('appointment', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->unsignedInteger('id_patient');
            $table->unsignedInteger('id_nutricionist');
            $table->integer('status');
            $table->timestamps();
            
            $table->foreign('id_patient')->references('id')->on('patients');
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
        Schema::dropIfExists('appointment');
    }
};
