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
        Schema::create('receips', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->unsignedInteger('id_nutricionist');
            $table->longText('ingredientes');
            $table->longText('modo_preparo');
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
        Schema::dropIfExists('receips');
    }
};
