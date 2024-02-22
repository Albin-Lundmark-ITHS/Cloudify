<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <v-app>
    <header>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
    <RouterView />
    <FooterBar />
  </v-app>
</template>

<style scoped></style>
