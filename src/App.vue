<template>
  <div id="app">
    <div>
      Test Datamax with Vue
      <InDeNumber/>
    </div>
  </div>
</template>

<script>

import InDeNumber from './components/IncrementDecrementNumber'
export default {
  name: 'App',
  components: {
    InDeNumber
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
