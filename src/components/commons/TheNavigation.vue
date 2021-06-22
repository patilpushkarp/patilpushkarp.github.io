<template>
  <div class="container-fluid navigate">
    <router-link to="/home"><h1>HOME</h1></router-link>
    <router-link to="/about"><h1>ABOUT</h1></router-link>
    <h1>PORTFOLIO</h1>
    <h1>CONTACT</h1>
  </div>
</template>

<style scoped>
.navigate{
    height: 90vh;
    background-color: black;
}

h1{
    text-decoration: none;
    color: #aac9ee;
    font-size: 4rem;
    padding: 3% 0%;
}

a{
    text-decoration: none;
}
</style>