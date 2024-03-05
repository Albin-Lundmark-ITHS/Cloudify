<template>
  <v-responsive class="mx-auto text-container">
    <v-text-field
      id="city-input"
      label="Enter a city or country"
      v-model="cityInput"
      append-inner-icon="mdi-magnify"
      class="text-field-input"
      @keydown.enter="fetchWeatherData()"
    ></v-text-field>
  </v-responsive>
  <v-card :class="backgroundImage" class="weather-card mx-auto">
    <v-card-item :title="currentCity + ', ' + currentCountry">
      <template v-slot:subtitle>
        {{ text }}
      </template>
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
        <v-list-item class="icon" density="compact" prepend-icon="mdi-weather-windy">
          <v-list-item-subtitle class="reportInfo"
            >Wind Speed: {{ windSpeed }}</v-list-item-subtitle
          >
        </v-list-item>

        <!-- Humidity -->
        <v-list-item class="icon" density="compact" prepend-icon="mdi-water-percent">
          <v-list-item-subtitle class="reportInfo">Humidity: {{ humidity }}</v-list-item-subtitle>
        </v-list-item>
        <!-- Feels like -->

        <v-list-item class="icon" density="compact" prepend-icon="mdi-thermometer-low">
          <v-list-item-subtitle class="reportInfo"
            >Feels Like: {{ feelsLike }}</v-list-item-subtitle
          >
        </v-list-item>
        <!-- UV index -->

        <v-list-item class="icon" density="compact" prepend-icon="mdi-white-balance-sunny">
          <v-list-item-subtitle class="reportInfo">
            UV Index: {{ uvIndex }}</v-list-item-subtitle
          ></v-list-item
        >
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
    expand: false,
    lastUpdated: '',
    currentTemp: '',
    currentConditionIcon: '',
    windSpeed: '',
    humidity: '',
    text: '',
    currentCity: '',
    currentCountry: '',
    cityInput: 'Stockholm',
    weatherCode: 0,
    isDay: 0
  }),
  watch: {
    cityInput() {
      this.fetchWeatherData()
    }
  },
  methods: {
    fetchWeatherData() {
      const url = `http://api.weatherapi.com/v1/current.json?key=3cdf684a5804447ebbb83645240503&q=${this.cityInput}&aqi=no`

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
          this.weatherCode = data.current.condition.code
          this.isDay = data.current.is_day
        })
        .catch((error) => {
          console.error('Could not fetch weather data:', error)
        })
    }
  },

  created() {
    this.fetchWeatherData()
  },
  computed: {
    backgroundImage() {
      if (this.weatherCode === 1000 && this.isDay === 1) {
        return 'bg-sunny'
      } else if (this.weatherCode === 1000 && this.isDay === 0) {
        return 'bg-clear-night'
      } else if (
        this.weatherCode === 1003 ||
        this.weatherCode === 1006 ||
        this.weatherCode === 1009
      ) {
        return 'bg-cloudy'
      } else if (
        this.weatherCode === 1030 ||
        this.weatherCode === 1135 ||
        this.weatherCode === 1147
      ) {
        return 'bg-foggy'
      } else if (
        this.weatherCode === 1063 ||
        this.weatherCode === 1072 ||
        this.weatherCode === 1150 ||
        this.weatherCode === 1153 ||
        this.weatherCode === 1168 ||
        this.weatherCode === 1180 ||
        this.weatherCode === 1183 ||
        this.weatherCode === 1186 ||
        this.weatherCode === 1189 ||
        this.weatherCode === 1192 ||
        this.weatherCode === 1195 ||
        this.weatherCode === 1198 ||
        this.weatherCode === 1201 ||
        this.weatherCode === 1240 ||
        this.weatherCode === 1243 ||
        this.weatherCode === 1246
      ) {
        return 'bg-rain'
      } else if (
        this.weatherCode === 1066 ||
        this.weatherCode === 1069 ||
        this.weatherCode === 1114 ||
        this.weatherCode === 1117 ||
        this.weatherCode === 1171 ||
        this.weatherCode === 1204 ||
        this.weatherCode === 1207 ||
        this.weatherCode === 1210 ||
        this.weatherCode === 1213 ||
        this.weatherCode === 1216 ||
        this.weatherCode === 1219 ||
        this.weatherCode === 1222 ||
        this.weatherCode === 1225 ||
        this.weatherCode === 1237 ||
        this.weatherCode === 1249 ||
        this.weatherCode === 1252 ||
        this.weatherCode === 1255 ||
        this.weatherCode === 1258 ||
        this.weatherCode === 1261 ||
        this.weatherCode === 1264
      ) {
        return 'bg-snowfall'
      } else if (
        this.weatherCode === 1087 ||
        this.weatherCode === 1273 ||
        this.weatherCode === 1276 ||
        this.weatherCode === 1279 ||
        this.weatherCode === 1282
      ) {
        return 'bg-thunder'
      } else {
        return 'bg-default'
      }
    }
  }
}
</script>

<style>
.v-responsive__content {
  display: flex;
  justify-content: center;
}
.text-field-input {
  max-width: 55vw;
}
.v-input__control {
  border: none;
  margin-top: 30px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 5px 0px inset;
}

@media (max-width: 800px) {
  .text-field-input {
    max-width: 80vw;
  }
}
</style>

<style scoped>
.weather-card {
  max-width: 90%;
  margin-top: 2vh;
  margin-bottom: 5vh;
}

.reportInfo {
  opacity: 90%;
  border-bottom: 2px solid #a39e9e;
  width: 25%;
}

.last-updated {
  font-size: 1rem;
}
.weather-card {
  max-width: 90%;
  color: white;
}
.bg-sunny {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('../assets/bilder/sunny.jpg');
  background-size: cover;
}
.bg-clear-night {
  background-image: url('../assets/bilder/clear-night.jpg');
  background-size: cover;
}
.bg-cloudy {
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url('../assets/bilder/cloudly.jpg');
  background-size: cover;
}
.bg-snowfall {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    url('../assets/bilder/snowfall.jpg');
  background-size: cover;
}
.bg-rain {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url('../assets/bilder/rain.jpg');
  background-size: cover;
}
.bg-thunder {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url('../assets/bilder/thunder.jpg');
  background-size: cover;
}
.bg-foggy {
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url('../assets/bilder/foggy.jpg');
  background-size: cover;
}
.bg-default {
  background-color: #d4e9f4;
}

@media (min-width: 800px) {
  .weather-card {
    max-width: 65%;
  }
}
</style>
