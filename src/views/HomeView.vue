<script setup>
import WeatherCards from '../components/WeatherCards.vue'
import DailyForecastWeatherList from '@/components/DailyForecastWeatherList.vue'
</script>

<template>
  <main>
    <WeatherCards />
    <h1 class="text-center">See your local forecast</h1>
    <DailyForecastWeatherList />
  </main>
</template>
