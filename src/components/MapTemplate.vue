<template>
  <div class="map">
    <div v-for="item in localities" :key="item.id" class="map__item"
         :style="this.getItemStyleObject(item)">
      <div class="map__item-wrapper" :class="{ '-active': selectedId === item.id }">
        <button class="map__location-pointer" :style="this.getPointerStyleObject(item)"
                @click="setSelectedId(item.id)"></button>
        <span class="map__location-title">
          {{ item.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>

import store from '@/store'

export default {
  name: 'MapTemplate',
  data () {
    return {
      activeLocation: ''
    }
  },
  methods: {
    calculateSize (population) {
      const size = population / 10
      if (size < 8) return 8
      if (size > 50) return 50
      return size
    },
    getItemStyleObject (locality) {
      const size = this.calculateSize(locality.population)
      return {
        top: locality.coordinates.y - size / 2 + 'px',
        left: locality.coordinates.x - size / 2 + 'px'
      }
    },
    getPointerStyleObject (locality) {
      const size = this.calculateSize(locality.population)
      return {
        height: size + 'px',
        width: size + 'px'
      }
    },
    setSelectedId (id) {
      this.$store.commit('setSelectedId', id)
    }
  },
  computed: {
    selectedId () {
      return store.getters.selectedId
    },
    localities () {
      return store.state.localities
    }
  }
}
</script>

<style scoped>
  .map {
    position: relative;
    border-radius: 15px;
    background-image: url("../assets/map.jpg");
    object-fit: contain;
  }

  .map__item {
    position: absolute;
    font-size: 15px;
  }

  .map__item-wrapper {
    display: flex;
    flex-direction: column;
  }

  .map__location-pointer {
    height: 10px;
    width: 10px;
    padding: 0;
    border-radius: 50%;
    background-color: #7c6b1b;
    border: none;
    outline: none;
    cursor: pointer;
    opacity: .7;
    z-index: 1;
  }

  .map__location-pointer:hover {
    opacity: 0.9;
  }

  .map__location-pointer:hover {
    opacity: 0.9;
  }

  .map__location-title {
    padding: 3px;
    font-size: 15px;
    user-select: none;
    background-color: rgba(147, 147, 141, 0.7);
  }

  .map__item-wrapper.-active > .map__location-pointer {
    opacity: 1;
    background-color: #B60606FF;
  }

  .map__item-wrapper.-active > .map__location-title {
    font-weight: bold;
    z-index: 2;
  }
</style>
