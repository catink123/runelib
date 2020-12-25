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
      runes: runes
    }
  }
}
</script>

<style>
body {
  background: rgb(50, 50, 50);
}

div.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

div.flex * {
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
