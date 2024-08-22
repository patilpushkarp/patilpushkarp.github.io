<!-- pages/markdown/[...slug].vue -->
<template>
  <div class="page-content">
    <ContentDoc :path="article" v-if="article">
      <template #not-found>
        <div class="not-found">
          <p class="greet">OOPS!!!</p>
          <p class="message">I am working on fixing this! I appreciate your patience.</p>
          <p class="message">Thank you for understanding</p>
        </div>
      </template>
    </ContentDoc>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
const route = useRoute()
const article = "scribbles/" + route.params.slug.join('/');
console.log(article);
</script>

<style scoped>

.not-found{
  height: 80vh;
}

.greet {
  font-size: 7vw;
  font-weight: 500;
  background: radial-gradient(farthest-corner at 10% 10%,
      #FF9CDA 20%,
      #428CD4 70%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.message {
  font-size: 2vw;
  font-weight: 300;
}
</style>