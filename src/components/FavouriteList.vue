<script>
import { useFavouriteStore } from '../store/FavouriteStore'
import { useWeatherStore } from '@/store/WeatherStore'
import { onMounted } from 'vue'
export default {
  setup() {
    const FavouriteStore = useFavouriteStore()
    const WeatherStore = useWeatherStore()
    onMounted(async () => {
      await FavouriteStore.loadFavourites()
      console.log(FavouriteStore.favourites)
    })
    return { FavouriteStore, WeatherStore }
  },
  /*  data: () => ({
    selected: []
  }), */
  methods: {
    select(place) {
      this.selected = place
      this.WeatherStore.getWeather(place)
      this.WeatherStore.getCurrentWeather(place)
    }
  }
}
</script>

<template>
  <v-card class="favourite mx-auto">
    <v-card-title v-if="FavouriteStore.favouriteCount > 0" class="text-center"
      >Your favourite locations</v-card-title
    >
    <v-card-title v-else class="text-center">Your favourites will be displayed here</v-card-title>

    <v-list v-for="favourite in FavouriteStore.favourites" :key="favourite">
      <v-list-item
        v-if="favourite"
        class="text-left text-emphasis"
        prepend-icon="mdi-map-marker"
        :key="favourite"
        @click="select(favourite)"
        >{{ favourite }}
        <v-icon
          class="float-right"
          icon="mdi-delete"
          @click="FavouriteStore.removeFromFavourites(favourite)"
        >
        </v-icon
      ></v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped>
.favourite {
  margin-bottom: 150px;
  width: clamp(55%, 600px, 95%);
}
</style>
