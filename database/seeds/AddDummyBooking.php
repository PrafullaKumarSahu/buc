<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Faker\Factory as Faker;

class AddDummyBooking extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        $starts_at = Carbon::createFromTimestamp($faker->dateTimeBetween($startDate = '+2 days', $endDate = '+1 week')->getTimeStamp()) ;

        $ends_at= Carbon::createFromFormat('Y-m-d H:i:s', $starts_at)->addHours( $faker->numberBetween( 1, 8 ) );

        DB::table('bookings')->insert([
            'title' => str_random(10),
            'start_time' => $starts_at,
            'end_time' => $ends_at,
        ]);
    }
}
