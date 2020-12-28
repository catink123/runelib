<template>
  <div :class="'RuneCard' + isPressed" @click="runeOnClick" v-on:mousedown="playClickSound">
    <img class="image" :src="image" draggable="false" />
    <p class="name">{{ name }}</p>
  </div>
</template>

<script>
import sounds from '../sounds';

export default {
  props: {
    name: String,
    image: String,
    data: Object,
    toggleRuneVisibility: Function,
    runeIsVisible: Boolean,
    setData: Function,
    currentOpened: String,
    setCurrentOpened: Function
  },
  data() {
    return {
      showRune: false
    }
  },
  computed: {
    isPressed() {
      if (this.runeIsVisible == true & this.currentOpened === this.name) return ' pressed'
      else return ''
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
      if (this.$props.runeIsVisible == true) {
        if (this.$props.currentOpened === this.$props.name) {
          this.$props.toggleRuneVisibility();
        } else {
          this.setData(this.$props.data);
          this.$props.setCurrentOpened(this.$props.name);
        }
      } else {
        this.setData(this.$props.data);
        this.$props.toggleRuneVisibility();
        this.$props.setCurrentOpened(this.$props.name);
      }
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
</style>