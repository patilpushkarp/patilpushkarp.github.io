<template>
  <section class="container">
    <div class="full-name">
      <h1 class="name">PUSHKAR</h1>
      <h1 class="surname">PATIL</h1>
    </div>
    <div class="navigation-tabs">
      <ul>
        <li><router-link to='/about' @click="closeNav">About</router-link></li>
        <li><router-link to='/work' @click="closeNav">Work</router-link></li>
        <li><router-link to='/scribble' @click="closeNav">Scribble</router-link></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>


<style scoped>
.full-name {
  min-height: 40vw;
  position: relative;
}
h1 {
  font-size: 8vw;
  font-weight: 600;
  position: absolute;
  letter-spacing: 3vw;
}
.name {
  top: 15vw;
  left: 5%;
}
.surname {
  top: 25vw;
  left: 50%;
}
ul{
  padding-top: 5%;
  display: flex;
  justify-content:space-between;
  list-style-type: none;
}
li{
  font-size: 1.5vw;
}
li a {
  color: black;
  text-decoration: none;
}

</style>