import { createStore } from 'vuex'
import { TYPE_CITY, TYPE_KINGDOM, TYPE_HOUSE, TYPE_OFFER } from '@/utils/const'

export default createStore({
  state: {
    selectedId: '',
    localities: [
      { id: 1, title: 'Город Воров', type: TYPE_CITY, population: 300, coordinates: { x: 442, y: 359 } },
      { id: 3, title: 'Пещеры', type: TYPE_OFFER, population: 23, coordinates: { x: 360, y: 166 } },
      { id: 4, title: 'Ледяное королевство', type: TYPE_KINGDOM, population: 200, coordinates: { x: 441, y: 202 } },
      { id: 5, title: 'Конфетное королевство', type: TYPE_KINGDOM, population: 2000, coordinates: { x: 355, y: 235 } },
      { id: 6, title: 'Туманный лес', type: TYPE_OFFER, population: 500, coordinates: { x: 184, y: 89 } },
      { id: 7, title: 'Огненное королевство', type: TYPE_KINGDOM, population: 2000, coordinates: { x: 311, y: 394 } },
      { id: 8, title: 'Хижина на дереве', type: TYPE_HOUSE, population: 3, coordinates: { x: 442, y: 252 } }
    ]
  },
  getters: {
    selectedId (state) {
      return state.selectedId
    },
    localities (state) {
      return state.localities.map((locality) => { return { id: locality.id, title: locality.title } })
    },
    localityById: (state) => (id) => {
      return state.localities.find(locality => locality.id === id)
    }
  },
  mutations: {
    setSelectedId (state, id) {
      state.selectedId = id
    }
  },
  actions: {
  },
  modules: {
  }
})
