<template>
  <div id="app">
    <mheador></mheador>
    <router-view/>
  </div>
</template>

<script>
import mheador from 'components/header/Heador'
export default {
  name: 'App',
  components: {mheador}
}
</script>

<style>

</style>
