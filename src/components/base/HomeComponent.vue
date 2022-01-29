<template>
  <section class="container">
    <div class="full-name">
      <h1 class="name">PUSHKAR</h1>
      <h1 class="surname">PATIL</h1>
    </div>
    <div class="navigation-tabs">
      <ul>
        <li>About</li>
        <li>Work</li>
        <li>Scribble</li>
        <li>Playground</li>
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

</style>