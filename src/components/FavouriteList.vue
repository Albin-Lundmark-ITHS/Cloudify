<script>
import { useFavouriteStore } from '../store/FavouriteStore'
/* import { useWeatherStore } from '@/store/WeatherStore' */
import { onMounted } from 'vue'
export default {
  setup() {
    const FavouriteStore = useFavouriteStore()
    onMounted(async () => {
      await FavouriteStore.loadFavourites()
      console.log(FavouriteStore.favourites)
    })
    return { FavouriteStore }
  }
  /* methods: {
    selectAlternative(item) {
      this.selected = [item]
      this.WeatherStore.search = ''
      this.WeatherStore.getWeather(item.name)

      // Call the getCurrentWeather method with the selected place name.
      this.WeatherStore.getCurrentWeather(item.name)
    }
  } */
}
</script>

<template>
  <v-card class="favourite mx-auto">
    <v-card-title v-if="FavouriteStore.favouriteCount > 0" class="text-center"
      >Your favourite locations</v-card-title
    >
    <v-card-title v-else class="text-center">Your favourites will be displayed here</v-card-title>

    <v-list v-for="favourite in FavouriteStore.favourites" :key="favourite">
      <v-list-item prepend-icon="mdi-map-marker" append-icon="mdi-heart"
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
  margin-bottom: 145px;
  max-width: 45%;
}
@media screen and (max-width: 640px) {
  .favourite {
    max-width: 95%;
  }
}
</style>
