<template>
  <div id="app">
    <m-heador></m-heador>
    <m-tab></m-tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
import MHeador from 'components/header/Heador'
import MTab from 'components/tab/tab'
import Player from 'components/player/Player'
export default {
  name: 'App',
  components: {MHeador, MTab, Player}
}
</script>

<style>

</style>
