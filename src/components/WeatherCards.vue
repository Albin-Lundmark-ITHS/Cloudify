<template>
  <!-- inputfield START -->
  <v-text-field
    id="city-input"
    label="Enter a city or country"
    v-model="cityInput"
    style="width: 300px"
    @keydown.enter="fetchWeatherData()"
  ></v-text-field>
  <!-- inputfield END -->
  <v-card class="weather-card mx-auto" color="#D4E9F4">
    <v-card-item :title="currentCity">
      <v-card-item :title="currentCountry">
        <template v-slot:subtitle>
          {{ text }}
        </template>
      </v-card-item>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align:center no-gutters>
        <v-col class="text-h2" cols="6"> {{ currentTemp }} </v-col>

        <v-col cols="6" class="text-right">
          <img
            :src="currentConditionIcon"
            alt="Current Weather"
            style="width: 100px; height: 100px"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text class="text-left last-updated"> Last updated at: {{ lastUpdated }} </v-card-text>
    <!--    <div class="d-flex py-3 justify-space-between"></div> -->

    <v-expand-transition>
      <div v-if="expand">
        <!-- Windspeed -->
        <v-list-item density="compact" prepend-icon="mdi-weather-windy">
          <v-list-item-subtitle class="reportInfo"
            >Wind Speed: {{ windSpeed }}</v-list-item-subtitle
          >
        </v-list-item>

        <!-- Humidity -->
        <v-list-item density="compact" prepend-icon="mdi-water-percent">
          <v-list-item-subtitle class="reportInfo">Humidity: {{ humidity }}</v-list-item-subtitle>
        </v-list-item>
        <!-- Feels like -->

        <v-list-item density="compact" prepend-icon="mdi-thermometer-low">
          <v-list-item-subtitle class="reportInfo"
            >Feels Like: {{ feelsLike }}</v-list-item-subtitle
          >
        </v-list-item>
        <!-- UV index -->

        <v-list-item density="compact" prepend-icon="mdi-white-balance-sunny">
          <v-list-item-subtitle class="reportInfo">
            UV Index: {{ uvIndex }}</v-list-item-subtitle
          ></v-list-item
        >
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
import axios from 'axios'

export default {
  data: () => ({
    labels: {
      0: 'SU',
      1: 'MO',
      2: 'TU',
      3: 'WED',
      4: 'TH',
      5: 'FR',
      6: 'SA'
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

      axios
        .get(url)
        .then((response) => {
          const data = response.data
          this.currentTemp = `${data.current.temp_c}°C`
          this.currentConditionIcon = data.current.condition.icon
          this.windSpeed = `${data.current.wind_kph} km/h`
          this.humidity = `${data.current.humidity}%`
          this.text = `${data.current.condition.text}`
          this.currentCity = `${data.location.name}`
          this.currentCountry = `${data.location.country}`
          this.feelsLike = `${data.current.feelslike_c}°C`
          this.uvIndex = `${data.current.uv}`
          this.lastUpdated = `${data.current.last_updated}`
        })
        .catch((error) => {
          console.error('Could not fetch weather data:', error)
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
  margin-bottom: 20vh;
}

.reportInfo {
  border-bottom: 2px solid #a39e9e;
  width: 25%;
}

.last-updated {
  font-size: 35px;
}
@media (min-width: 800px) {
  .weather-card {
    max-width: 65%;
  }
}
</style>
