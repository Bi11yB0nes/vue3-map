<template>
  <div class="info">
    <div v-if="locality" class="info__container">
      <div  class="info__title">
        Подробная информация:
      </div>
      <div class="info__row">
        <div class="info__row_title">
          Название:
        </div>
        <div class="info__row_value">
           {{ locality.title }}
        </div>
      </div>
      <div class="info__row">
        <div class="info__row_title">
          Тип:
        </div>
        <div class="info__row_value">
          {{ locality.type }}
        </div>
      </div>
      <div class="info__row">
        <div class="info__row_title">
          Население:
        </div>
        <div class="info__row_value">
           {{ locality.population }}
        </div>
      </div>
      <div class="info__row">
        <div class="info__row_title">
          Координаты:
        </div>
        <div class="info__sub-row">
          <div class="info__sub-row_title">
            X:
          </div>
          <div class="info__sub-row_value">
            {{ locality.coordinates.x }}
          </div>
        </div>
        <div class="info__sub-row">
          <div class="info__sub-row_title">
            Y:
          </div>
          <div class="info__sub-row_value">
           {{ locality.coordinates.y }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'DetailedInfo',
  data () {
    return {}
  },
  computed: {
    selectedID () {
      return store.getters.selectedId
    },
    locality () {
      return store.getters.localityById(this.selectedID)
    }
  }
}
</script>

<style scoped>
  .info {
    margin-left: 10px;
    font-size: 15px;
    background-color: #d5d1d133;
    border-radius: 15px;
    z-index: 2;
  }
  .info__container {
    display: flex;
    flex-direction: column;
    max-width: 230px;
    margin-left: auto;
    margin-right: auto;
    align-items: start;
  }
  .info__title {
    margin-bottom: 15px;
    padding: 20px 0 5px 0;
    font-weight: 700;
  }
  .info__row {
    width: 100%;
    margin-bottom: 10px;
    border-bottom: 1px dashed #d5d1d1a8;
    text-align: start;
  }
  .info__row_title {
    padding: 10px 0 0 0;
  }
  .info__row_value {
    padding-bottom: 5px;
    text-align: end;
  }
  .info__sub-row {
    display: flex;
    margin-bottom: 3px;
    padding-left: 170px;
    justify-content: space-between;

  }
  .info__sub-row_title, .info__sub-row_value{
    text-align: end;
  }
</style>
