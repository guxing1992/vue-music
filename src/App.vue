<template>
  <div id="app">
    <m-heador></m-heador>
    <m-tab></m-tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import MHeador from 'components/header/Heador'
import MTab from 'components/tab/tab'
export default {
  name: 'App',
  components: {MHeador, MTab}
}
</script>

<style>

</style>
