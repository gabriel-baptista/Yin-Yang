<?php

namespace App\Models;

use Illuminate\Contracts\Session\Session;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class patient extends Model
{
    use HasFactory;
    protected $table = 'patients';

    //Ensure model information

    protected $fillable = [
        'id_nutricionist',
        'nome',
        'sobrenome',
        'email',
        'contato',
        'ativo',
        'cidade',
        'endereco',
        'idade',
        'sexo',
        'pesoInicial',
        'usoMedicamento',
        'exercicios',
        'observacao'
    ];

    //Function create patients in BD

    public function store($patients)
    {
        $idNutricionist = session()->get('id') ?? 1;

        $patients['id_nutricionist'] = $idNutricionist;
        $patients['ativo'] = 1;

        $this->fill($patients);
        $this->save();
        return ["message" => "Patient registered successfully!"];
    }

    //Function update patients in BD

    public function edit($infoEdit, $id)
    {
        $patients = Patient::find($id);

        if (!$patients) {
            return ["message" => "Patients not found!"];
        }

        $patients->fill($infoEdit);
        $patients->save();

        return ["message" => "Successfully altered anaminesia!"];
    }

    //Function delete patients in BD

    public function erase($id)
    {
        $patients = Patient::find($id);

        if (!$patients) {
            return ["message" => "Patients not found!"];
        }

        $patients->delete();

        return ["message" => "Patients successfully deleted!"];
    }

    public function list()
    {
        $patients = Patient::where('id_nutricionist', session()->get('id') ?? 1)
            ->where('ativo', 1)
            ->orderBy('nome')
            ->get(['id', 'nome', 'email', 'contato', 'idade']);

        return $patients;
    }

    public function chart()
    {
        $currentDate = now();
        $oneMonthAgo = now()->subMonth();

        $allPatients = Patient::where('id_nutricionist', session()->get('id') ?? 1)
            ->count('id');

        $patientsMonth = Patient::where('id_nutricionist', session()->get('id') ?? 1)
            ->whereBetween('created_at', [$oneMonthAgo, $currentDate])
            ->count('id');

        $allAppointment = Appointment::where('id_nutricionist', session()->get('id') ?? 1)
            ->count('id');

        $appointmentMonth = Appointment::where('id_nutricionist', session()->get('id') ?? 1)
            ->whereBetween('created_at', [$oneMonthAgo, $currentDate])
            ->count('id');

        $patientsYear = Patient::where('id_nutricionist', session()->get('id') ?? 1)
            ->whereYear('created_at', date('Y'))
            ->select(DB::raw('count(id) as pacientes'), DB::raw('MONTH(created_at) month'))
            ->groupBy('month')
            ->get();
            
        return [
            'total_pacientes' => $allPatients,
            'pacientes_mes' => $patientsMonth,
            'total_agendamentos' => $allAppointment,
            'agendamentos_mes' => $appointmentMonth,
            'pacientes_ano' => $patientsYear
        ];
    }

    //Function extend anamneses with patient in BD

    public function nutricionist()
    {
        return $this->belongsTo(Nutricionist::class, 'id_nutricionist', 'id');
    }
}

