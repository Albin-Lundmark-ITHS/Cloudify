<template>
  <div class="card" @click="flipCard">
    <div class="card__inner" :class="{ 'is-flipped': isFlipped }">
      <div class="card__face card__face--front">
        <h4>Dark Mode</h4>
      </div>
      <div class="card__face card__face--back">
        <div class="card__content">
          <div class="card__body">
            <h4>Light Mode</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  margin: 0 auto;
  width: 6rem;
  height: 2rem;
}

.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card__inner.is-flipped {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__face--front {
  background-color: rgb(218, 231, 241);
}

.card__face--front h4 {
  color: #000;
}

.card__face--back {
  background-color: rgb(136, 151, 165);
  transform: rotateY(180deg);
}

h4 {
  font-size: 0.9rem;
  margin: 0;
}
</style>

<script>
export default {
  data() {
    return {
      isFlipped: false
    }
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped
    }
  }
}
</script>
