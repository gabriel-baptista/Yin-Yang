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
        Schema::create('nutricionist', function (Blueprint $table) {
            $table->increments('id')->unique();
            $table->unsignedInteger('id_user');
            $table->string('nome', 100);
            $table->string('email', 100);
            $table->string('celular', 13);
            $table->string('crn', 100)->unique();
            $table->string('estado', 100);
            $table->string('cidade', 100);
            $table->string('bairro', 100);
            $table->string('rua', 100);
            $table->string('cep', 9);
            $table->timestamps();

            $table->foreign('id_user')->references('id')->on('users');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nutricionist');
    }
};
