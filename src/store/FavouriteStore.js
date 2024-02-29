import {defineStore} from 'pinia'

export const useFavouriteStore = defineStore('favouriteStore', {
  state: () => ({
    favourites: []
  }),
  getters: {
    favouriteCount(state) {
      return state.favourites.length
    },
    getFavourites(state) {
      return state.favourites
    },
    isFavourite: (state) => (city) => {
      return state.favourites.includes(city)
    }
  },
  actions: {
    addToFavourites(city) {
      const index = this.favourites.indexOf(city)
      if (index !== -1) {
        // City is already a favorite, remove it
        this.favourites.splice(index, 1)
      } else {
        // City is not a favorite, add it
        this.favourites.push(city)
      }
    },
    removeFromFavourites(city) {
        const index = this.favourites.indexOf(city)
        if (index !== -1) {
          this.favourites.splice(index, 1)
        }
      }
  }
})
