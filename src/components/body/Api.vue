<template>
  <div id="api">
    <h1>What's the actual weather in ... </h1>
    <div id="api-body">
      <form>
        <input type="text" ref="city" placeholder="City"/>
        <button @click.prevent="getCoordinates()">Search !</button>
      </form>
      {{coordinates}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Api',
  data: function () {
    return {
      key: 'AIzaSyDMOXJVPPER4RBqY3UU3eTk-oyJnz8jY9c',
      city: '',
      coordinates: {}
    }
  },
  methods: {
    getCoordinates(city) {
      this.city = this.$refs.city.value
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=`+this.city+`&key=`+this.key)
        .then(response => {
          this.coordinates = response.data.results[0].geometry.bounds.northeast
        })
        .catch(e => {
          this.errors.push(e)
        })

    }
  }
}
</script>

<style scoped>

</style>
