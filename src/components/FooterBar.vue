<script setup></script>

<template>
  <footer class="footer">
    <div id="linksFooter">
      <RouterLink to="/">TEXT</RouterLink>
      <RouterLink to="/">TEXT</RouterLink>
      <RouterLink to="/about">TEXT</RouterLink>
    </div>
    <div id="iconsFooter">
      <a href="https://www.facebook.com/" target="_blank">
        <v-icon class="footerIcon" icon="mdi-facebook"></v-icon>
      </a>
      <a href="https://www.github.com/" target="_blank">
        <v-icon class="footerIcon" icon="mdi-github"></v-icon>
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <v-icon class="footerIcon" icon="mdi-linkedin"></v-icon>
      </a>
      <!--  <a href="https://www.youtube.com/" target="_blank">
        <v-icon class="footerIcon" icon="mdi-youtube"></v-icon>
      </a> -->
      <a href="https://www.instagram.com/" target="_blank">
        <v-icon class="footerIcon" icon="mdi-instagram"></v-icon>
      </a>
      <!--    <a href="https://www.twitter.com/" target="_blank">
        <v-icon class="footerIcon" icon="mdi-twitter"></v-icon>
      </a> -->
    </div>
  </footer>
</template>

<style scoped>
#footerLogo {
  height: auto;
  width: 50px;
}
.footerIcon {
  width: 32px;
  height: 32px;
  font-size: 32px;
}
#iconsFooter {
  color: black;
  margin: 20px;
  display: flex;
  justify-content: center;
  gap: 55px;
}
#linksFooter {
  margin-top: 10px;
  gap: 40px;
  display: flex;
  justify-content: center;
}
.footer {
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background-color: #d4f0fd;
  color: white;
  text-align: center;
  box-shadow: 10px 5px 20px rgb(0, 0, 0);
  overflow-y: hidden;
}
a:visited {
  color: black;
}
a {
  text-decoration: none;
}
</style>

<script></script>
