<script setup>
import WeatherCards from '../components/WeatherCards.vue'
import DailyForecastWeatherList from '@/components/DailyForecastWeatherList.vue'
import SearchPanel from '@/components/SearchPanel.vue'
import FavouriteList from '@/components/FavouriteList.vue'
</script>

<template>
  <main>
    <SearchPanel />
    <WeatherCards />
    <section>
      <h1 class="text-center">See your local forecast</h1>
      <DailyForecastWeatherList />
    </section>
    <aside>
      <FavouriteList />
    </aside>
  </main>
</template>
