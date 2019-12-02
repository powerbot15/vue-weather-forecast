<template>
<div class="search-weather">
  <h2>City to search</h2>
  <form @submit="searchWeather">
    <div>
      <label for="city">City</label>
      <input
        id="city"
        type="text"
        placeholder="Cherkassy"
        v-model="city"
      >
    </div>
    <div>
      <label for="country">Country</label>
      <input
        id="country"
        type="text"
        placeholder="ua"
        v-model="country"
      >
    </div>
    <div>
      <button type="submit">Show weather</button>
    </div>
    <div
      v-if="apiError"
      class="error-block"
    >
      {{apiError}}
    </div>
  </form>
</div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'SearchWeather',

  data () {
    return {
      city: 'Cherkasy',
      country: 'ua',
      apiError: ''
    }
  },
  methods: {
    searchWeather (event) {
      event.preventDefault();
      this.apiError = '';
      console.dir(this.city);
      axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.VUE_APP_WEATHER_KEY}&q=${this.city},${this.country.toLowerCase()}`)
        .then((res) => {
          console.dir(transformForecast(res.data));
          this.$store.commit('setForecast', transformForecast(res.data));
        })
        .catch((err) => {
          if (err.response.data.message) {
            this.apiError = err.response.data.message;
          }
        })
    }
  }
}

function transformForecast (forecast) {
  const dates = [];
  forecast.list.forEach((forecastItem) => {
    const date = moment(forecastItem.dt * 1000);
    const foundDate = dates.find((dateToRender) => {
      return moment(dateToRender.date).isSame(date, 'day');
    });
    if (foundDate) {
      foundDate.parts.push(forecastItem);
    } else {
      dates.push({
        date: forecastItem.dt * 1000,
        parts: [forecastItem]
      });
    }
  });
  return dates;
}
</script>

<style scoped>

</style>
