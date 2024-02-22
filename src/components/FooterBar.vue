<script setup></script>

<template>
  <footer class="footer">
    <div id="iconsFooter">
      <div id="footerIcon">Icon1</div>
      <div id="footerIcon">Icon2</div>
      <div id="footerIcon">Icon3</div>
    </div>
    <div id="linksFooter">
      <a href="#">Link1</a>
      <a href="#">Link2</a>
      <a href="#">Link3</a>
    </div>
  </footer>
</template>

<style scoped>
#footerIcon {
  border: solid black 4px;
  margin: 5px;
}
#iconsFooter {
  color: black;
  display: flex;
  justify-content: center;
}
#linksFooter {
  display: flex;
  justify-content: center;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #d4f0fd;
  color: white;
  text-align: center;
}
</style>

<script></script>
