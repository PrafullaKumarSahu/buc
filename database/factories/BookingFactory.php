<?php

use Faker\Generator as Faker;
use Carbon\Carbon;

$factory->define(App\Booking::class, function (Faker $faker) {
    $starts_at = Carbon::createFromTimestamp($faker->dateTimeBetween($startDate = '+2 days', $endDate = '+1 week')->getTimeStamp()) ;

    $ends_at= Carbon::createFromFormat('Y-m-d H:i:s', $starts_at)->addHours( $faker->numberBetween( 1, 8 ) );

    return [
        'title' => $faker->name,
        'start_time' => $starts_at,
        'end_time' => $ends_at,
    ];
});
