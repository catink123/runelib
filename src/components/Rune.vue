<template>
  <div class="main">
    <div class="sideBar">
      <div class="spells">
        <img :src="spellImages[spells[0]]" />
        <img :src="spellImages[spells[1]]" />
      </div>
      <p class="runeName">{{ name }}</p>
      <div class="lanes">
        <img v-for="lane in lanes" v-bind:key="lane" :src="laneImages[lane]" />
      </div>
    </div>
    <div class="runeIterator" v-for="i in dummyList" v-bind:key="i">
      <div :class="'rune Precision' + (i == 1 ? ' SecondRune ' + Object.keys(data)[0] + 'FirstRune': '')" v-if="Object.keys(data)[i] == 'Precision'">
        <img draggable="false" class="runeIcon" :src="images.Precision.Precision" />
        <div v-if="i == 0" class="subIcons">
          <img draggable="false" :class="visible(i, 0, 0)" :src="images.Precision.PressTheAttack" />
          <img draggable="false" :class="visible(i, 0, 1)" :src="images.Precision.LethalTempo" />
          <img draggable="false" :class="visible(i, 0, 2)" :src="images.Precision.FleetFootwork" />
          <img draggable="false" :class="visible(i, 0, 3)" :src="images.Precision.Conqueror" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 1, 0)" :src="images.Precision.Overheal" />
          <img draggable="false" :class="visible(i, 1, 1)" :src="images.Precision.Triumph" />
          <img draggable="false" :class="visible(i, 1, 2)" :src="images.Precision.PresenceOfMind" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 2, 0)" :src="images.Precision.LegendAlacrity" />
          <img draggable="false" :class="visible(i, 2, 1)" :src="images.Precision.LegendTenacity" />
          <img draggable="false" :class="visible(i, 2, 2)" :src="images.Precision.LegendBloodline" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 3, 0)" :src="images.Precision.CoupDeGrace" />
          <img draggable="false" :class="visible(i, 3, 1)" :src="images.Precision.CutDown" />
          <img draggable="false" :class="visible(i, 3, 2)" :src="images.Precision.LastStand" />
        </div>
        <div v-if="i == 1" class="statModsIcons">
          <div>
            <img draggable="false" :class="visible(i, 4, 0)" :src="images.StatMods.AdaptiveForceIcon" />
            <img draggable="false" :class="visible(i, 4, 1)" :src="images.StatMods.AttackSpeedIcon" />
            <img draggable="false" :class="visible(i, 4, 2)" :src="images.StatMods.CDRScalingIcon" />
          </div>
          <div>
            <img draggable="false" :class="visible(i, 5, 0)" :src="images.StatMods.AdaptiveForceIcon" />
            <img draggable="false" :class="visible(i, 5, 1)" :src="images.StatMods.ArmorIcon" />
            <img draggable="false" :class="visible(i, 5, 2)" :src="images.StatMods.MagicResIcon" />
          </div>
          <div>
            <img draggable="false" :class="visible(i, 6, 0)" :src="images.StatMods.HealthScalingIcon" />
            <img draggable="false" :class="visible(i, 6, 1)" :src="images.StatMods.ArmorIcon" />
            <img draggable="false" :class="visible(i, 6, 2)" :src="images.StatMods.MagicResIcon" />
          </div>
        </div>
      </div>
      <div :class="'rune Domination' + (i == 1 ? ' SecondRune ' + Object.keys(data)[0] + 'FirstRune': '')" v-if="Object.keys(data)[i] == 'Domination'">
        <img draggable="false" class="runeIcon" :src="images.Domination.Domination" />
        <div v-if="i == 0" class="subIcons">
          <img draggable="false" :class="visible(i, 0, 0)" :src="images.Domination.Electrocute" />
          <img draggable="false" :class="visible(i, 0, 1)" :src="images.Domination.Predator" />
          <img draggable="false" :class="visible(i, 0, 2)" :src="images.Domination.DarkHarvest" />
          <img draggable="false" :class="visible(i, 0, 3)" :src="images.Domination.HailOfBlades" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 1, 0)" :src="images.Domination.CheapShot" />
          <img draggable="false" :class="visible(i, 1, 1)" :src="images.Domination.TasteOfBlood" />
          <img draggable="false" :class="visible(i, 1, 2)" :src="images.Domination.SuddenImpact" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 2, 0)" :src="images.Domination.ZombieWard" />
          <img draggable="false" :class="visible(i, 2, 1)" :src="images.Domination.GhostPoro" />
          <img draggable="false" :class="visible(i, 2, 2)" :src="images.Domination.EyeballCollection" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 3, 0)" :src="images.Domination.RavenousHunter" />
          <img draggable="false" :class="visible(i, 3, 1)" :src="images.Domination.IngeniousHunter" />
          <img draggable="false" :class="visible(i, 3, 2)" :src="images.Domination.RelentlessHunter" />
          <img draggable="false" :class="visible(i, 3, 3)" :src="images.Domination.UltimateHunter" />
        </div>
        <div v-if="i == 1" class="statModsIcons">
          <div>
            <img draggable="false" :class="visible(i, 4, 0)" :src="images.StatMods.AdaptiveForceIcon" />
            <img draggable="false" :class="visible(i, 4, 1)" :src="images.StatMods.AttackSpeedIcon" />
            <img draggable="false" :class="visible(i, 4, 2)" :src="images.StatMods.CDRScalingIcon" />
          </div>
          <div>
            <img draggable="false" :class="visible(i, 5, 0)" :src="images.StatMods.AdaptiveForceIcon" />
            <img draggable="false" :class="visible(i, 5, 1)" :src="images.StatMods.ArmorIcon" />
            <img draggable="false" :class="visible(i, 5, 2)" :src="images.StatMods.MagicResIcon" />
          </div>
          <div>
            <img draggable="false" :class="visible(i, 6, 0)" :src="images.StatMods.HealthScalingIcon" />
            <img draggable="false" :class="visible(i, 6, 1)" :src="images.StatMods.ArmorIcon" />
            <img draggable="false" :class="visible(i, 6, 2)" :src="images.StatMods.MagicResIcon" />
          </div>
        </div>
      </div>
      <div :class="'rune Sorcery' + (i == 1 ? ' SecondRune ' + Object.keys(data)[0] + 'FirstRune': '')" v-if="Object.keys(data)[i] == 'Sorcery'">
        <img draggable="false" class="runeIcon" :src="images.Sorcery.Sorcery" />
        <div v-if="i == 0" class="subIcons">
          <img draggable="false" :class="visible(i, 0, 0)" :src="images.Sorcery.SummonAery" />
          <img draggable="false" :class="visible(i, 0, 1)" :src="images.Sorcery.ArcaneComet" />
          <img draggable="false" :class="visible(i, 0, 2)" :src="images.Sorcery.PhaseRush" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 1, 0)" :src="images.Sorcery.NullifyingOrb" />
          <img draggable="false" :class="visible(i, 1, 1)" :src="images.Sorcery.ManaflowBand" />
          <img draggable="false" :class="visible(i, 1, 2)" :src="images.Sorcery.NimbusCloak" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 2, 0)" :src="images.Sorcery.Transcendence" />
          <img draggable="false" :class="visible(i, 2, 1)" :src="images.Sorcery.Celerity" />
          <img draggable="false" :class="visible(i, 2, 2)" :src="images.Sorcery.AbsoluteFocus" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 3, 0)" :src="images.Sorcery.Scorch" />
          <img draggable="false" :class="visible(i, 3, 1)" :src="images.Sorcery.Waterwalking" />
          <img draggable="false" :class="visible(i, 3, 2)" :src="images.Sorcery.GatheringStorm" />
        </div>
        <div v-if="i == 1" class="statModsIcons">
          <div>
            <img draggable="false" :class="visible(i, 4, 0)" :src="images.StatMods.AdaptiveForceIcon" />
            <img draggable="false" :class="visible(i, 4, 1)" :src="images.StatMods.AttackSpeedIcon" />
            <img draggable="false" :class="visible(i, 4, 2)" :src="images.StatMods.CDRScalingIcon" />
          </div>
          <div>
            <img draggable="false" :class="visible(i, 5, 0)" :src="images.StatMods.AdaptiveForceIcon" />
            <img draggable="false" :class="visible(i, 5, 1)" :src="images.StatMods.ArmorIcon" />
            <img draggable="false" :class="visible(i, 5, 2)" :src="images.StatMods.MagicResIcon" />
          </div>
          <div>
            <img draggable="false" :class="visible(i, 6, 0)" :src="images.StatMods.HealthScalingIcon" />
            <img draggable="false" :class="visible(i, 6, 1)" :src="images.StatMods.ArmorIcon" />
            <img draggable="false" :class="visible(i, 6, 2)" :src="images.StatMods.MagicResIcon" />
          </div>
        </div>
      </div>
      <div :class="'rune Resolve' + (i == 1 ? ' SecondRune ' + Object.keys(data)[0] + 'FirstRune': '')" v-if="Object.keys(data)[i] == 'Resolve'">
        <img draggable="false" class="runeIcon" :src="images.Resolve.Resolve" />
        <div v-if="i == 0" class="subIcons">
          <img draggable="false" :class="visible(i, 0, 0)" :src="images.Resolve.GraspOfTheUndying" />
          <img draggable="false" :class="visible(i, 0, 1)" :src="images.Resolve.Aftershock" />
          <img draggable="false" :class="visible(i, 0, 2)" :src="images.Resolve.Guardian" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 1, 0)" :src="images.Resolve.Demolish" />
          <img draggable="false" :class="visible(i, 1, 1)" :src="images.Resolve.FontOfLife" />
          <img draggable="false" :class="visible(i, 1, 2)" :src="images.Resolve.ShieldBash" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 2, 0)" :src="images.Resolve.Conditioning" />
          <img draggable="false" :class="visible(i, 2, 1)" :src="images.Resolve.SecondWind" />
          <img draggable="false" :class="visible(i, 2, 2)" :src="images.Resolve.BonePlating" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 3, 0)" :src="images.Resolve.Overgrowth" />
          <img draggable="false" :class="visible(i, 3, 1)" :src="images.Resolve.Revitalize" />
          <img draggable="false" :class="visible(i, 3, 2)" :src="images.Resolve.Unflinching" />
        </div>
        <div v-if="i == 1" class="statModsIcons">
          <div>
            <img draggable="false" :class="visible(i, 4, 0)" :src="images.StatMods.AdaptiveForceIcon" />
            <img draggable="false" :class="visible(i, 4, 1)" :src="images.StatMods.AttackSpeedIcon" />
            <img draggable="false" :class="visible(i, 4, 2)" :src="images.StatMods.CDRScalingIcon" />
          </div>
          <div>
            <img draggable="false" :class="visible(i, 5, 0)" :src="images.StatMods.AdaptiveForceIcon" />
            <img draggable="false" :class="visible(i, 5, 1)" :src="images.StatMods.ArmorIcon" />
            <img draggable="false" :class="visible(i, 5, 2)" :src="images.StatMods.MagicResIcon" />
          </div>
          <div>
            <img draggable="false" :class="visible(i, 6, 0)" :src="images.StatMods.HealthScalingIcon" />
            <img draggable="false" :class="visible(i, 6, 1)" :src="images.StatMods.ArmorIcon" />
            <img draggable="false" :class="visible(i, 6, 2)" :src="images.StatMods.MagicResIcon" />
          </div>
        </div>
      </div>
      <div
        :class="'rune Inspiration' + (i == 1 ? ' SecondRune ' + Object.keys(data)[0] + 'FirstRune': '')"
        v-if="Object.keys(data)[i] == 'Inspiration'"
      >
        <img draggable="false" class="runeIcon" :src="images.Inspiration.Inspiration" />
        <div v-if="i == 0" class="subIcons">
          <img draggable="false" :class="visible(i, 0, 0)" :src="images.Inspiration.GlacialAugment" />
          <img draggable="false" :class="visible(i, 0, 1)" :src="images.Inspiration.UnsealedSpellbook" />
          <img draggable="false" :class="visible(i, 0, 2)" :src="images.Inspiration.PrototypeOmnistone" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 1, 0)" :src="images.Inspiration.HextechFlashtraption" />
          <img draggable="false" :class="visible(i, 1, 1)" :src="images.Inspiration.MagicalFootwear" />
          <img draggable="false" :class="visible(i, 1, 2)" :src="images.Inspiration.PerfectTiming" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 2, 0)" :src="images.Inspiration.FuturesMarket" />
          <img draggable="false" :class="visible(i, 2, 1)" :src="images.Inspiration.MinionDematerializer" />
          <img draggable="false" :class="visible(i, 2, 2)" :src="images.Inspiration.BiscuitDelivery" />
        </div>
        <div class="subIcons">
          <img draggable="false" :class="visible(i, 3, 0)" :src="images.Inspiration.CosmicInsight" />
          <img draggable="false" :class="visible(i, 3, 1)" :src="images.Inspiration.ApproachVelocity" />
          <img draggable="false" :class="visible(i, 3, 2)" :src="images.Inspiration.TimeWarpTonic" />
        </div>
        <div v-if="i == 1" class="statModsIcons">
          <div>
            <img draggable="false" :class="visible(i, 4, 0)" :src="images.StatMods.AdaptiveForceIcon" />
            <img draggable="false" :class="visible(i, 4, 1)" :src="images.StatMods.AttackSpeedIcon" />
            <img draggable="false" :class="visible(i, 4, 2)" :src="images.StatMods.CDRScalingIcon" />
          </div>
          <div>
            <img draggable="false" :class="visible(i, 5, 0)" :src="images.StatMods.AdaptiveForceIcon" />
            <img draggable="false" :class="visible(i, 5, 1)" :src="images.StatMods.ArmorIcon" />
            <img draggable="false" :class="visible(i, 5, 2)" :src="images.StatMods.MagicResIcon" />
          </div>
          <div>
            <img draggable="false" :class="visible(i, 6, 0)" :src="images.StatMods.HealthScalingIcon" />
            <img draggable="false" :class="visible(i, 6, 1)" :src="images.StatMods.ArmorIcon" />
            <img draggable="false" :class="visible(i, 6, 2)" :src="images.StatMods.MagicResIcon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import images from "./runeImages";
import spellImages from './spellImages';
import laneImages from './laneImages';

export default {
  name: "Rune",
  props: {
    name: String,
    spells: Array,
    lanes: Array,
    data: Object
  },
  data() {
    return {
      dummyList: [0, 1]
    };
  },
  computed: {
    images() {return images},
    spellImages() {return spellImages},
    laneImages() {return laneImages},
    visibilityList() {
      var returnList = [];
      var converted = [];
      converted = Object.values(this.$props.data);
      converted.forEach((value, index) => {
        var completedRune = [];
        if (index == 0) {
          completedRune = [
            [0, 0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0, 0]
          ];
          value.forEach((number, numberIndex) => {
            completedRune[numberIndex][number - 1] = 1;
          });
          returnList.push(completedRune);
        } else {
          completedRune = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
          ];
          value.forEach((number, numberIndex) => {
            completedRune[numberIndex][number - 1] = 1;
          });
          returnList.push(completedRune);
        }
      });
      return returnList;
    }
  },
  methods: {
    visible(index, x, y) {
      if (index == 1) {
        if (this.visibilityList[index][x - 1][y] == 1) {
          return 'selected'
        } else {
          return null
        }
      } else {
        if (this.visibilityList[index][x][y] == 1) {
          return 'selected'
        } else {
          return null
        }
      }
    }
  }
};
</script>

<style scoped>
@keyframes nameShow {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
}

@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

.main {
  background: rgba(15, 15, 15, 0.85);
  display: flex;
  flex-direction: row;
  height: 415px;
  backdrop-filter: blur(10px);
  overflow: hidden;
  color: white;
}

.runeName {
  position: relative;
  /* padding: 10px 0; */
  flex-grow: 1;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  z-index: 1;
  writing-mode: vertical-lr;
  transform: translateX(-100%);
  animation: .25s ease-in-out forwards nameShow;
  animation-delay: 0.25s;
  margin: 10px;
}

.Precision {
  --color: #ceae7b;
  --gradcolor: rgba(255, 157, 0, 0.1);
}

.PrecisionFirstRune {
  --firstgradcolor: rgba(255, 157, 0, 0.1);
}

.Domination {
  --color: #ce4142;
  --gradcolor: rgba(255, 0, 2, 0.1);
}

.DominationFirstRune {
  --firstgradcolor: rgba(255, 0, 2, 0.1);
}

.Sorcery {
  --color: #9ca6f7;
  --gradcolor: rgba(0, 28, 255, 0.1);
}

.SorceryFirstRune {
  --firstgradcolor: rgba(0, 28, 255, 0.1);
}

.Resolve {
  --color: #a4dd86;
  --gradcolor: rgba(88, 255, 0, 0.1);
}

.ResolveFirstRune {
  --firstgradcolor: rgba(88, 255, 0, 0.1);
}

.Inspiration {
  --color: #44acb5;
  --gradcolor: rgba(0, 235, 255, 0.1);
}

.InspirationFirstRune {
  --firstgradcolor: rgba(0, 235, 255, 0.1);
}

.runeList {
  display: flex;
  flex-direction: row;
}

.rune {
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 15px;
  background: linear-gradient(90deg, transparent, var(--gradcolor) 5%);
}

.rune.SecondRune {
  background: linear-gradient(90deg, var(--firstgradcolor), var(--gradcolor) 5%);
}

.runeIcon {
  width: 32px;
  height: 32px;
  padding: 10px;
  border: 1px solid var(--color);
  border-radius: 50%;
  margin: auto;
  margin-bottom: 20px;
  z-index: 2;
}

.name {
  color: white;
}

.subIcons,
.statModsIcons div {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  margin-right: 0;
}

.statModsIcons div:last-child {
  margin-bottom: 0 !important;
}

.subIcons img {
  margin: auto;
  width: 48px;
  height: 48px;
  border: 2px solid var(--color);
  border-radius: 50%;
  filter: grayscale(1);
  opacity: 0.5;
}

.subIcons img:last-child, .statModsIcons div img, .main div:last-child {
  margin-right: 0;
}

.main .runeIterator:first-child div {
  margin-right: 50px;
}

.statModsIcons div img:first-child, .subIcons img:first-child {
  margin-left: 0;
}

.main .runeIterator:first-child {
  margin-right: 20px;
}

.rune div:nth-child(2) img {
  width: 64px !important;
  height: 64px !important;
  border: none !important;
}

.main div:last-child .rune div:nth-child(2) img {
  width: 48px !important;
  height: 48px !important;
  border: 2px solid var(--color) !important;
}

.runeIterator div:last-child {
  margin-bottom: 0;
}

.main div:last-child .rune .subIcons,
.statModsIcons div {
  margin-bottom: 15px !important;
}

.runeIterator {
  margin-bottom: 0 !important;
}

.statModsIcons img {
  margin: auto;
  width: 24px;
  height: 24px;
  border: 2px solid #f7deb7;
  border-radius: 50%;
  filter: grayscale(1);
  opacity: 0.5;
}

.main div:last-child .rune .statModsIcons div img {
  width: 24px !important;
  height: 24px !important;
  border: 2px solid #f7deb7 !important;
}

.selected {
  filter: none !important;
  opacity: 1 !important;
}

.sideBar {
  display: flex;
  flex-direction: column;
}

.spells, .lanes {
  display: flex;
  flex-direction: column;
  padding: 5px;
  opacity: 0;
}

.spells {
  transform: translateY(-100%);
  animation: .15s ease-in-out forwards slideInFromTop;
  animation-delay: .15s;
}

.lanes {
  transform: translateY(100%);
  animation: .15s ease-in-out forwards slideInFromBottom;
  animation-delay: .15s;
}

.spells img, .lanes img {
  width: 32px;
  height: 32px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.05)
}

.lanes img {
  border-color: rgba(255, 255, 255, 0.25)
}

.spells img:first-child, .lanes img:first-child {
  margin-bottom: 5px;
}

.spells img:only-child, .lanes img:only-child {
  margin-bottom: 0;
}

* {
  user-select: none;
}
</style>