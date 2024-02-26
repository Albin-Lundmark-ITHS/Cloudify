<template>
  <v-card class="weather-card mx-auto" color="#D4E9F4" >
    <v-card-item :title= currentCity >
      <template v-slot:subtitle>
       {{text}}
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align:center no-gutters>
        <v-col class="text-h2" cols="6"> {{ currentTemp }} </v-col>

        <v-col cols="6" class="text-right">
          <img :src="currentConditionIcon" alt="Current Weather" style="width: 100px; height: 100px;">
        </v-col>
      </v-row>
    </v-card-text>
    <div class="d-flex py-3 justify-space-between">
      <v-list-item density="compact" prepend-icon="mdi-weather-windy">
        <v-list-item-subtitle>{{ windSpeed }}</v-list-item-subtitle>
      </v-list-item>

      <v-list-item density="compact" prepend-icon="mdi-cloud-percent-outline">
        <v-list-item-subtitle>{{ humidity }}</v-list-item-subtitle>
      </v-list-item>
    </div>

    <v-expand-transition>
      <div v-if="expand">

        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in forecast"
            :key="item.day"
            :title="item.day"
            :append-icon="item.icon"
            :subtitle="item.temp"
          >
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn @click="expand = !expand">
        {{ !expand ? 'Full Report' : 'Hide Report' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  data: () => ({
    labels: {
      0: 'SU',
      1: 'MO',
      2: 'TU',
      3: 'WED',
      4: 'TH',
      5: 'FR',
      6: 'SA',
    },
    expand: false,
    time: 0,
    forecast: [],
    currentTemp: '',
    currentConditionIcon: '',
    windSpeed: '',
    humidity: '',
    text: '',
    currentCity: ''
  }),
  methods: {
    fetchWeatherData() {
      const city = 'Stockholm'
      const url = `http://api.weatherapi.com/v1/current.json?key=2a1aabcb3f8f49fca60101701242002&q=${city}&aqi=no`

      axios.get(url)
        .then(response => {
          const data = response.data
          this.currentTemp = `${data.current.temp_c}°C`
          this.currentConditionIcon = data.current.condition.icon
          this.windSpeed = `${data.current.wind_kph} km/h`
          this.humidity = `${data.current.humidity}%`
          this.text = `${data.current.condition.text}`
          this.currentCity = `${data.location.name}`
        })
        .catch(error => {
          console.error('Error fetching weather data:', error)
        })
    }
  },
  created() {
    this.fetchWeatherData()
  }
}
</script>
<style>

.weather-card {
  max-width: 90%;
}

@media (min-width: 800px) {
.weather-card {
  max-width: 65%;
}
}</style>
