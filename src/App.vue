<template>
  <div class="flex">
    <rune-card
      v-for="rune in runes"
      v-bind:key="rune.name"
      :name="rune.name"
      :image="charImages[rune.name]"
      :data="rune.data"
      :setData="setData"
      :runeIsVisible="runeIsVisible"
      :toggleRuneVisibility="toggleRuneVisibility"
      :currentOpened="currentOpened"
      :setCurrentOpened="setCurrentOpened"
    />
    <p class="hint">Нажмите Ctrl + F для поиска.</p>
    <transition name="slide">
    <div
      class="runeContainer"
      v-if="runeIsVisible"
      @click="toggleRuneVisibility"
    >
      <rune
        v-for="entry in currentData"
        v-bind:key="entry"
        class="minirune"
        :data="entry.runes"
        :spells="entry.spells"
        :lanes="entry.lanes"
        :name="entry.name"
      />
    </div>
    </transition>
  </div>
</template>

<script>
import RuneCard from "./components/RuneCard.vue";
import Rune from "./components/Rune.vue";
import runes from "./runes";
import charImages from "./charImages";

export default {
  name: "App",
  components: {
    RuneCard,
    Rune
  },
  computed: {
    charImages() {
      return charImages;
    }
  },
  data() {
    return {
      runes: null,
      runeIsVisible: false,
      currentData: null,
      currentOpened: null
    };
  },
  created() {
    this.$data.runes = runes.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    });
  },
  methods: {
    toggleRuneVisibility() {
      this.$data.runeIsVisible = !this.$data.runeIsVisible;
    },
    setData(data) {
      this.$data.currentData = data;
    },
    setCurrentOpened(name) {
      this.$data.currentOpened = name;
    }
  }
};
</script>

<style>
body {
  background: repeating-linear-gradient(
      45deg,
      #333 0px,
      #333 1px,
      transparent 1px,
      transparent 25px
    ),
    repeating-linear-gradient(
      -45deg,
      #333 0px,
      #333 1px,
      #131313 1px,
      #131313 25px
    );
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
}

div.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: calc(100vh - 50px);
  margin-top: 50px;
  margin-left: 25px;
  margin-right: 25px;
}

div.flex .RuneCard {
  margin-right: 10px;
  margin-bottom: 10px;
}

.hint {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.5;
  color: white;
  user-select: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  pointer-events: none;
}

.runeContainer {
  display: flex;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.minirune {
  pointer-events: none;
  border-radius: 5px;
  border: 1px solid rgb(150, 150, 150);
}

.slide-enter-active, .slide-leave-active, .slide-enter-active .minirune, .slide-leave-active .minirune {
  transition: all .2s;
}

.slide-enter .minirune, .slide-leave-to .minirune, .slide-enter-active .minirune {
  opacity: 0;
  height: 0;
}

.slide-leave .minirune, .slide-enter-to .minirune {
  opacity: 1;
  height: 415px;
}
</style>
