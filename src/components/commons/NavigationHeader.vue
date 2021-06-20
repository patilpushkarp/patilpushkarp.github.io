<template>
  <nav class="navbar navbar-expand-sm bg-white">
    <!-- Links -->
    <router-link to="/home">
      <img class="logo" src="@/assets/logo.svg" />
    </router-link>
    <router-link to="/navigation" class="ml-auto menu"
      ><i class="fas fa-bars"></i
    ></router-link>
  </nav>
</template>

<style scoped>
.logo {
  float: left;
  padding-left: 5%;
}

.menu {
  padding-right: 5%;
}

.fas {
  text-decoration: none;
  font-size: 6vh;
  color: black;
}
</style>