<template>
  <locality-list />
  <section class="map-info">
    <map-template class="map-info__map" />
    <detailed-info class="map-info__info" />
  </section>
</template>

<script>
import LocalityList from '@/components/LocalityList'
import DetailedInfo from '@/components/DetailedInfo'
import MapTemplate from '@/components/MapTemplate'

export default {
  name: 'App',
  components: {
    LocalityList,
    DetailedInfo,
    MapTemplate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.map-info {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.map-info__map {
  height: 624px;
  width: 70%;
}
.map-info__info {
  width: 30%;
}
</style>
