<template>
  <div v-if="!navigationStatus">
    <button class="open-button btn btn-white" @click="openNav">
      <i class="fas fa-ellipsis-h"></i>
    </button>
    <main>
      <router-view></router-view>
    </main>
    <the-footer v-if="$route.path==='/home'?false:true"></the-footer>
  </div>
  <div v-else>
    <the-navigation :navigation-status="navigationStatus" @toggle-status="toggleStatus"></the-navigation>
  </div>
</template>

<script>
import TheNavigation from "./components/base/TheNavigation.vue";
import TheFooter from  "./components/base/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
    TheFooter
  },
  data() {
    return {
      navigationStatus: false,
    };
  },
  computed:{
    checkHome(){
      console.log(this.$route.path);
      if(this.$route.path === "/"){
        return false;
      }else{
        return true;
      }
    }
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
