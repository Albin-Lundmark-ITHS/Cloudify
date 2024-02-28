<script>
import { useForecastWeatherStore } from '@/store/ForecastWeatherStore'

export default {
  setup() {
    const ForecastWeatherStore = useForecastWeatherStore()
    ForecastWeatherStore.getForecastWeather() // Call the getForecastWeather function in the store.

    return { ForecastWeatherStore }
  }
}
</script>

<template>
  <v-card
    tonal
    class="mx-auto"
    width="600"
    prepend-icon="mdi-map-marker"
    v-if="ForecastWeatherStore.currentForecastData"
  >
    <template v-slot:title>
      {{ ForecastWeatherStore.currentForecastData.location.name }}
      {{ ForecastWeatherStore.currentForecastData.location.country }}
    </template>

    <v-card-text>
      <div
        v-for="(day, index) in ForecastWeatherStore.currentForecastData.forecast.forecastday.slice(
          1
        )"
        :key="index"
        class="card-content"
      >
        <img
          v-if="ForecastWeatherStore.currentForecastData"
          :src="day.day.condition.icon"
          :alt="day.day.condition.text"
          class="icon"
        />
        <v-card-text class="text-content date">
          {{ day.date }}
        </v-card-text>

        <v-card-text class="text-content condition">
          {{ day.day.condition.text }}
        </v-card-text>
        <v-card-text class="text-content"> {{ day.day.maxtemp_c }}&deg; </v-card-text>
        <v-divider class="border-opacity-100"></v-divider>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.mx-auto {
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10rem;
}

.card-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.icon {
  margin-right: 10px;
}

.text-content {
  flex: 1;
}

@media (max-width: 600px) {
  .mx-auto {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    max-width: 90%; /* Or fit-content? */
  }
  .icon {
    margin-right: 0;
    margin-bottom: 10px;
    height: 50px;
    width: 50px;
  }

  .date {
    flex: 2;
  }

  .condition {
    flex: 2;
  }
}
</style>
