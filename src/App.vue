<template>
  <navigation-header></navigation-header>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import NavigationHeader from "./components/commons/NavigationHeader.vue";

export default {
  name: "App",
  components: {
    NavigationHeader
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
