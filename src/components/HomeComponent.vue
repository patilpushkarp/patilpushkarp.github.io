<template>
  <section class="container-fluid">
      <div class="row row-cols-2">
        <div class="col">
          <img src="@/assets/me.jpeg" class="me" />
        </div>
        <div class="col intro">
          <h1>Hello</h1>
          <h2>I am <strong>Pushkar Patil</strong></h2>
          <h4>I am a Software Engineer with main focus on developing Data Driven Products</h4>
        </div>
      </div>
  </section>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from "./commons/TheFooter.vue"

export default {
  components: {
    TheFooter
  }
};
</script>


<style scoped>
.me {
  width: 50%;
  border-radius: 50%;
}
.row{
    padding: 14% 3%;
}
.intro{
    text-align: left;
}

h1{
  font-size: 5rem;
  color: #e6005c;
  padding: 5% 0%;
}

h2{
  font-size: 3rem;
  color: #1b4d89;
}

</style>