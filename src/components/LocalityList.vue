<template>
  <div class="localities">
  <select class="localities__select" v-model="select">
    <option disabled value="">Выберите населённый пункт</option>
    <option v-for="option in localities" :value="option.id" :key="option.id">
      {{ option.title }}
    </option>
  </select>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'LocalityList',
  data () {
    return {
      select: ''
    }
  },
  computed: {
    localities () {
      return store.getters.localities
    },
    selectedID () {
      return store.state.selectedId
    }
  },
  watch: {
    select: function (val) {
      this.$store.commit('setSelectedId', val)
    },
    selectedID: function (val) {
      this.select = val
    }
  }
}
</script>

<style scoped>
  .localities {
    margin-bottom: 10px;
  }
  .localities__select {
    background-color: #d5d1d133;
    width: 100%;
    padding: 10px;
  }
</style>
