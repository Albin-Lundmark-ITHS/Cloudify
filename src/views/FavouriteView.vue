<script>
import { useFavouriteStore } from '@/store/FavouriteStore'
export default {
  setup() {
    const FavouriteStore = useFavouriteStore()

    return { FavouriteStore }
  }
}
</script>

<template>
  <div></div>
</template>

<style scoped></style>
