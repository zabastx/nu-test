<template>
    <VueDragMove class="layer" :class="{ [`type${type}`]: true}">
        <button>
            {{ name }}
            <span class="material-icons clear" @click="$store.commit('delLayer', name)">clear</span>
            <span class="material-icons link" 
            @click="$emit('link', $event, {name, type})" 
            :name="name"
            :class="{'link-on': $store.state.linksOn}"
            >link</span>
        </button>
    </VueDragMove>
</template>

<script>
import VueDragMove from 'vue-drag-move'

export default {
    name: 'my-layer',
    props: ['type', 'name'],
    data() {
        return {
            isLinking: false
        }
    },
    components: {
        VueDragMove
    },
    methods: {
        handleLink(event, obj) {
            if (this.isLinking) {
                this.$store.commit('toggleLink')
            }
            this.$emit('link', $event, {name, type})
            this.$store.commit('changeLinkPos', event)
            this.isLinking = !this.isLinking
        }
    },
    mounted() {
        console.log(this.$el)
    }
}
</script>

<style lang="scss" scoped>
.layer {
    font-size: 1.2rem;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 15px;
    min-width: 200px;
    cursor: pointer;
    text-align: center;
    position: relative;
    > button {
        width: 100%;
        height: 100%;
        display: block;
        background: none;
        border: none;
        font: inherit;
        font-weight: bold;
        position: relative;
    }
}
.type {
    &0 {
        background: #feb055;
    }
    &1 {
        background: #89d763;
    }
    &2 {
        background: #8e51f2;
    }
}

.clear, .link {
    position: absolute;
    font-size: 1.5rem;
    padding: 0;
    &:hover {
        text-shadow: 0 0 5px black;
    }
}

.clear {
    top: 0;
    right: 0;
    color: red;
    transform: translate(50%, 0);
}

.link {
    color: white;
    top: 0;
    left: 0;
    transform: translate(-50%, 0);
    &-on {
        text-shadow: 0 0 5px white;
        transform: scale(1.3);
    }
}
</style>