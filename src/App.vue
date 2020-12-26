<template>
  <div class="flex">
    <rune-card v-for="rune in runes" v-bind:key="rune.name" :name="rune.name" :image="charImages[rune.name]" :data="rune.data" />
    <p class="hint">Нажмите Ctrl + F для поиска.</p>
  </div>
</template>

<script>
import RuneCard from './components/RuneCard.vue';
import runes from './runes';
import charImages from './charImages';

export default {
  name: 'App',
  components: {
    RuneCard
  },
  computed: {
    charImages() {
      return charImages
    }
  },
  data() {
    return {
      runes: null
    }
  },
  created() {
    this.$data.runes = runes.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
  }
}
</script>

<style>
body {
  background: repeating-linear-gradient(45deg, #333 0px, #333 1px, transparent 1px, transparent 25px),
              repeating-linear-gradient(-45deg, #333 0px, #333 1px, #131313 1px, #131313 25px);
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>
