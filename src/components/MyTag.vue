<template>
  <label class="tag" :class="{ checked }">
      <input type="checkbox" :value="text" v-model="model" @change="checked = !checked">
      <span class="tag__text">{{ text }}</span>
  </label>
</template>

<script>
export default {
    name: 'my-tag',
    data() {
        return {
            checked: false
        }
    },
    props: {
        value: Array,
        text: String
    },
    computed: {
        model: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.tag {
    font-size: 1.2rem;
    padding: 5px 10px;
    background: #17212b;
    border: 1px solid #fff;
    user-select: none;
    border-radius: 5px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    input {
        appearance: none;
        position: absolute;
        top: 0;
        left: 0;
    }
}

.checked {
    background: #fff;
    color: black;
}
</style>