<template>
  <div class="card">
      <h2>{{ data.title }}</h2>
      <ul class="card__tags">
          <li v-for="item in data.tags" :key="item">
              <span class="material-icons">local_offer</span>
              <span>{{item}}</span>
          </li>
      </ul>
      <p>
          Размер: {{ data.size > 0 ? data.size + ' мб' : 'Не указано'}}
      </p>
      <button type="button" class="material-icons edit" @click="openForm([data, true])">edit</button>
      <button type="button" class="material-icons delete" @click="$store.commit('delSet', data.id)">delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'my-card',
    props: ['data'],
    methods: mapActions(['openForm'])
}
</script>

<style lang="scss" scoped>
h2 {
    margin-top: 0;
    flex-grow: 1;
}

p {
    margin-bottom: 0;
}

.card {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 0 0 5px black;
    width: 250px;
    min-height: 200px;
    border-radius: 6px;
    background: #242f3d;
    position: relative;
    height: max-content;
    &__tags {
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            span {
                vertical-align: middle;
                padding-right: 5px;
            }
        }
    }
}

.edit, .delete {
    width: fit-content;
    font-size: 17px;
    position: absolute;
    top: 0;
    transform: translate(-50%, 50%);
}

.delete {
    right: 0;
    color: red;
}
.edit {
    right: 2em;
}
</style>