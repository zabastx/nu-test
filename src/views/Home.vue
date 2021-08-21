<template>
  <main class="main">
    <h1>Теги</h1>
    <div class="tags">
      <my-tag 
      v-for="item in tagList"
      v-model="selectedTags"
      :key="item"
      :text="item"
      />
    </div>
    <h1>Датасеты</h1>
    <div class="btns">
      <button class="btn" @click="$store.commit('toggleForm', {edit: false, show: true})">
        <span class="material-icons">add</span> Добавить датасет
      </button>
    </div>
    <div class="datasets" v-if="selectedTags.length == 0">
      <my-card
      v-for="item in datasets"
      :key="item.id"
      :data="item"
      />
    </div>
    <div class="datasets" v-else>
      <my-card
      v-for="item in sorted(selectedTags)"
      :key="item.id"
      :data="item"
      />
    </div>
    <my-form v-if="$store.state.showForm" />
  </main>
</template>

<script>
import MyCard from '../components/MyCard.vue'
import MyTag from '../components/MyTag.vue'
import MyForm from '../components/MyForm.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    MyCard,
    MyTag,
    MyForm
  },
  data() {
    return {
      selectedTags: []
    }
  },
  computed: {
    ...mapState(['datasets']),
    ...mapGetters(['tagList', 'sorted'])
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.datasets {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>