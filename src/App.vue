<template>
  <div id="app">
    <Navbar />
    <div>
      <router-view class="vh-100" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/NavbarPage";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
