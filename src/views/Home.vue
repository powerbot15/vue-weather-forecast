<template>
  <div class="home-wrap">
    <h1>Weather widget</h1>
    <search-weather />
    <forecast />
  </div>
</template>

<script>
import SearchWeather from '../components/SearchWeather';
import Forecast from '../components/Forecast';
export default {
  name: 'Home',

  components: {
    SearchWeather,
    Forecast
  }
}
</script>

<style scoped>

</style>
