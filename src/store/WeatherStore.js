import { defineStore } from 'pinia'
import axios from 'axios'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weatherData: null,
    currentWeatherData: null,
    search: '',
    weatherCode: null,
    isDay: null
  }),
  actions: {
    async getAutomaticPosition() {
      try {
        const apiKey = '3cdf684a5804447ebbb83645240503'
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=auto:ip`

        const response = await axios.get(apiUrl)
        console.log('Full Response:', response)

        if (!this.weatherData || !this.weatherData.data) {
          this.weatherData = response.data
          console.log('Weather Data:', response.data)
        }
      } catch (error) {
        console.error('Error fetching weather:', error)
      }
    },
    async getWeather(place) {
      try {
        const apiKey = '3cdf684a5804447ebbb83645240503'
        const apiUrl = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${place}`

        const response = await axios.get(apiUrl)
        console.log('Full Response:', response)
        this.weatherData = response.data
        console.log('Weather Data:', response.data)
      } catch (error) {
        console.error('Error fetching weather:', error)
      }
    },
    async getCurrentWeather(place) {
      try {
        const apiKey = '3cdf684a5804447ebbb83645240503'
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${place}&days=8&alerts=yes`

        const response = await axios.get(apiUrl)
        console.log('Full Response:', response)
        this.currentWeatherData = response.data
        console.log('Weather Data:', response.data.location.name)
        this.weatherCode = response.data.current.condition.code
        console.log(this.weatherCode)
        this.isDay = response.data.current.is_day
        console.log(this.isDay)
      } catch (error) {
        console.error('Error fetching weather:', error)
      }
    }
  }
})
