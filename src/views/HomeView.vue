<script setup>
import WeatherCards from '../components/WeatherCards.vue'
import DailyForecastWeatherList from '@/components/DailyForecastWeatherList.vue'
import SearchPanel from '@/components/SearchPanel.vue';
import SearchCards from '@/components/SearchCards.vue';
</script>

<template>
  <main>
    <SearchPanel />
    <WeatherCards />
    <h1 class="text-center">See your local forecast</h1>
    <DailyForecastWeatherList />
    <h2>Your search history</h2>
    <SearchCards />
  </main>
</template>
