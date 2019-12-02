<template>
<div class="weather-forecast">
  <h2>Forecast</h2>
  <ul v-if="$store.state.forecast.length">
    <li
      v-for="dayForecast of $store.state.forecast"
      :key="dayForecast.date"
    >
      <day-item :dayForecast="dayForecast" />
    </li>
  </ul>
</div>
</template>

<script>
import DayItem from './forecast-components/DayItem.vue';

export default {
  name: 'Forecast',
  components: {
    DayItem
  }
}
</script>

<style scoped>

</style>
