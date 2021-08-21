import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datasets: [
      { tags: ['classification', 'text', 'English', 'tensorflow'], title: 'imdb', id: Symbol('id'), size: 23 },
      { tags: ['timeseries', 'audio', 'Terra AI'], title: 'sber', id: Symbol('id'), size: 53 },
      { tags: ['images', 'classification', 'tagONE', 'Russian'], title: 'test', id: Symbol('id'), size: 90 }
    ],
    showForm: false,
    selected: '',
    edit: false,
    layers: [],
    links: [],
    linksOn: false
  },

  getters: {
    tagList(state) {
      return new Set(state.datasets.flatMap((item) => {
        return item.tags
      }))
    },
    sorted: state => tags => {
      return state.datasets.filter((val) => {
        return tags.every(el => {
          return val.tags.indexOf(el) >= 0
        })
      })
    },
    typeLayers: state => type => {
      return state.layers.filter(el => el.type === type)
    },
    getLink: state => name => {
      return state.links.find(el => el.name === name)
    }
  },

  mutations: {
    addSet(state, payload) {
      const tags = payload.tags.split(',').map((i) => {
        return i.replaceAll(',', '').trim()
      }).filter((i) => !!i)

      const newSet = {
        id: Symbol(payload.title),
        title: payload.title,
        tags: [...new Set(tags)],
        size: parseFloat(payload.size)
      }

      state.datasets.push(newSet)
    },
    delSet(state, payload) {
      state.datasets = state.datasets.filter((i) => i.id !== payload)
    },
    toggleForm(state, payload) {
      state.edit = payload.edit
      state.showForm = payload.show
    },
    selectSet(state, payload) {
      state.selected = payload
    },
    editSet(state, payload) {
      let tags
      if (!Array.isArray(payload.tags)) {
        tags = payload.tags.split(',').map((i) => {
          return i.replaceAll(',', '').trim()
        }).filter((i) => !!i)
      } else {
        tags = payload.tags
      }
      const idx = state.datasets.indexOf(state.selected)
      tags = [...new Set(tags)]
      state.datasets[idx] = Object.assign(state.datasets[idx], { tags, title: payload.title, size: payload.size })
    },
    addLayer(state, payload) {
      state.layers.push({
        name: `слой ${state.layers.length+1}`,
        type: payload
      })
    },
    delLayer(state, name) {
      state.layers = state.layers.filter(el => el.name !== name)
    },
    toggleLink(state) {
      state.linksOn = !state.linksOn
    }
  },

  actions: {
    openForm(ctx, payload) {
      ctx.commit('selectSet', payload[0])
      ctx.commit('toggleForm', {edit: payload[1], show: true})
    },
    calcLine(ctx, data) {
      const p1 = data.p1
      const p2 = data.p2
    }
  },

  modules: {
  }
})
