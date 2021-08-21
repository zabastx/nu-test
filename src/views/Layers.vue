<template>
  <main class="layers">
    <div class="btns">
      <button type="button" class="btn" @click="addLayer(0)">
        <span class="material-icons" >add</span> Входной слой
      </button>
      <button type="button" class="btn" @click="addLayer(1)">
        <span class="material-icons">add</span> Внутренний слой
      </button>
      <button type="button" class="btn" @click="addLayer(2)">
        <span class="material-icons">add</span> Выходной слой
      </button>
    </div>
    <div class="interface">
      <my-layer
        v-for="item in layers"
        :key="item.name"
        :name="item.name"
        :type="item.type"
        :class="{[`type${item.type}`]: true}"
        @link="handleLink"
      />
    </div>
    <div class="line"></div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import MyLayer from '../components/MyLayer.vue'

export default {
  components: {
    MyLayer
  },
  methods: {
    addLayer(type) {
      this.$store.commit('addLayer', type)
    },
    handleLink(event, el) {
      this.$store.commit('toggleLink')
    }
  },
  computed: mapState(['layers', 'links'])
}
</script>

<style lang="scss" scoped>
.interface {
  min-height: 100px;
  position: relative;
}

.line {
  position: absolute;
  background: white;
  background: 
         linear-gradient(to top left,
             rgba(0,0,0,0) 0%,
             rgba(0,0,0,0) calc(50% - 0.8px),
             rgba(0,0,0,1) 50%,
             rgba(0,0,0,0) calc(50% + 0.8px),
             rgba(0,0,0,0) 100%)
}
</style>
