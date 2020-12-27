<template>
  <div :class="'RuneCard' + (showRune == true ? ' pressed' : '')" v-on:click="showRune = !showRune" v-on:mousedown="playClickSound">
    <img class="image" :src="image" draggable="false" />
    <p class="name">{{ name }}</p>
    <div class="runeContainer" v-if="showRune">
    <rune v-for="entry in data" v-bind:key="entry" class="minirune" :data="entry.runes" :spells="entry.spells" :lanes="entry.lanes" :name="entry.name" />
    </div>
  </div>
</template>

<script>
import Rune from './Rune.vue';
import sounds from '../sounds';

export default {
  props: {
    name: String,
    image: String,
    data: Object
  },
  components: { Rune },
  data() {
    return {
      showRune: false
    }
  },
  methods: {
    playClickSound() {
      var audio = new Audio(sounds.click);
      audio.volume = 0.1;
      audio.oncanplay = function () {
        audio.play();
      }
    },
    runeOnClick() {
      this.$data.showRune = !this.$data.showRune; this.playClickSound();
    }
  }
};
</script>

<style scoped>
.RuneCard {
  background: rgb(25, 25, 25);
  color: white;
  border-radius: 50px 20px 20px 50px;
  border: 1px solid rgb(150, 150, 150);
  display: flex;
  height: 75px !important;
  transition-duration: .1s;
}

.RuneCard:active {
  background: rgb(100, 100, 100)
}

.RuneCard.pressed {
  background: white;
}

.RuneCard.pressed .name {
  color: black;
}

.image {
  height: 75px;
  margin: 0;
  border-radius: 50%;
  user-select: none;
  background: rgba(255, 255, 255, 0.1);
}

.name {
  flex-grow: 1;
  margin: auto;
  padding: 20px;
  user-select: none;
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.runeContainer {
  display: flex;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%)
}

.minirune {
  pointer-events: none;
  border-radius: 5px;
  border: 1px solid rgb(150, 150, 150);
  animation: 0.2s ease-in-out forwards pulldown;
  overflow: hidden;
}

@keyframes pulldown {
  0% {
    height: 0px;
    opacity: 0;
  }

  100% {
    height: 415px;
    opacity: 1;
  }
}
</style>