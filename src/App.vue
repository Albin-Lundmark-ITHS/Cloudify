<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterBar from './components/FooterBar.vue'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <v-app>
    <header>
      <NavBar />
    </header>
    <RouterView />
    <FooterBar />
  </v-app>
</template>

<style scoped></style>
