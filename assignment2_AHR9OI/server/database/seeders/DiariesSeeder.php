<?php

namespace Database\Seeders;

use App\Models\Diary;
use Illuminate\Database\Seeder;

class DiariesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Diary::factory(5)->create();
    }
}
