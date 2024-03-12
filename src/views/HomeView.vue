<script setup>
import WeatherCards from '../components/WeatherCards.vue'
import DailyForecastWeatherList from '@/components/DailyForecastWeatherList.vue'
import FavouriteList from '@/components/FavouriteList.vue'
import SearchPanel from '@/components/SearchPanel.vue'
import SearchCards from '@/components/SearchCards.vue';
import { useDark } from '@vueuse/core'
const isDark = useDark()
</script>

<template>
  <main>
    <SearchPanel :class="{ dark: isDark }" />
    <WeatherCards />
    <h1 class="text-center">See your local forecast</h1>
    <DailyForecastWeatherList :class="{ dark: isDark }" />
    <FavouriteList :class="{ dark: isDark }" />
    <h2>Your search history</h2>
    <SearchCards />
  </main>
</template>
