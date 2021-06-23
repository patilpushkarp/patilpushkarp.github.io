<template>
  <div class="container-fluid navigate">
    <router-link to="/home"><h1>HOME</h1></router-link>
    <router-link to="/about"><h1>ABOUT</h1></router-link>
    <router-link to="/contact"><h1>CONTACT</h1></router-link>
  </div>
</template>

<style scoped>
.navigate {
  height: 90vh;
  background-color: black;
}

h1 {
  /* color: #aac9ee; */
  font-size: 4rem;
  padding: 5% 0%;
}

a {
  color: #aac9ee;
  text-decoration: none;
}

a:hover {
  color: #e6005c;
}
</style>