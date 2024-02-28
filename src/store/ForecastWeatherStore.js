import { defineStore } from 'pinia'
import axios from 'axios'

export const useForecastWeatherStore = defineStore('forecast-weather', {
  state: () => ({
    currentForecastData: null
  }),
  actions: {
    async getForecastWeather() {
      // place as parameter later instead of auto:ip adress?
      try {
        const apiKey = '2a1aabcb3f8f49fca60101701242002'
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=auto:ip&days=8`

        const response = await axios.get(apiUrl)
        console.log('Full Response:', response)
        this.currentForecastData = response.data
        console.log('Weather Data Place:', response.data.location.name)
      } catch (error) {
        console.error('Error fetching weather:', error)
      }
    }
  }
})