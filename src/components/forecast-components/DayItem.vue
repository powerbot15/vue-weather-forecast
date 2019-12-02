<template>
  <div>
    <h3>{{date}}</h3>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'DayItem',
  props: {
    dayForecast: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  computed: {
    date () {
      return moment(this.dayForecast.date).toISOString();
    }
  }
}
</script>

<style scoped>

</style>
