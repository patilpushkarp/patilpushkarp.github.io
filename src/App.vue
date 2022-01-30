<template>
  <div v-if="!navigationStatus">
    <button class="open-button btn btn-white" @click="openNav">
      <i class="fas fa-ellipsis-h"></i>
    </button>
    <main>
      <router-view></router-view>
    </main>
  </div>
  <div v-else>
    <the-navigation :navigation-status="navigationStatus" @toggle-status="toggleStatus"></the-navigation>
  </div>
</template>

<script>
import TheNavigation from "./components/base/TheNavigation.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
  },
  data() {
    return {
      navigationStatus: false,
    };
  },
  computed:{

  },
  methods: {
    openNav() {
      this.navigationStatus = true;
    },
    toggleStatus() {
      this.navigationStatus = false;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

html,
body {
  font-family: "Montserrat", sans-serif;
  height: 100%;
}

#app {
  font-family: "Montserrat", sans-serif;
}

.open-button{
  float: right;
  margin: 2% 3%;
  font-size: 3vw;
}

</style>
