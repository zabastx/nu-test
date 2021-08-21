<template>
  <div class="form__bg">
    <div class="form__overlay"></div>
    <form class="form" @submit.prevent="handleSubmit">
      <h2 v-if="edit">Редактировать датасет</h2>
      <h2 v-else>Добавить датасет</h2>
      <label class="form__label">
        Название
        <input type="text" class="form__input" v-model.trim="title" required>
      </label>
      <label class="form__label">
        Теги
        <input type="text" class="form__input" v-model.trim="tags" required>
      </label>
      <label class="form__label">
        Размер, мб
        <input type="number" class="form__input" v-model.trim="size" step="0.01" min="0">
      </label>
      <button type="button" class="material-icons" @click="$store.commit('toggleForm', false)">close</button>
      <button class="btn">Сохранить</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'my-form',
    computed: {
      ...mapState(['selected', 'edit'])
    },
    data() {
      return {
        title: '',
        tags: '',
        size: ''
      }
    },
    methods: {
      handleSubmit() {
        if (this.edit) {
          this.$store.commit('editSet', {
            title: this.title,
            tags: this.tags,
            size: this.size
          })
        } else {
          this.$store.commit('addSet', {
            title: this.title,
            tags: this.tags,
            size: this.size
          })
        }
        this.$store.commit('toggleForm', {show: false, edit: false})
      }
    },
    created() {
      if (this.edit) {
        Object.assign(this, this.selected)
      }
    }
}
</script>

<style lang="scss" scoped>
.form {
  width: 320px;
  background: #242f3d;
  box-shadow: 0 0 5px black;
  padding: 10px;
  border-radius: 10px;
  z-index: 11;
  position: relative;
  &__input {
    display: block;
    width: 100%;
    margin: 10px auto;
  }
  &__bg {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  &__overlay {
    background: black;
    filter: opacity(0.5);
    width: 100%;
    height: 100%;
    position: fixed;
  }
}

.material-icons {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 50%);
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  color: white;
}
</style>