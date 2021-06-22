<template>
  <section>
    <div>
      <div class="row row-cols-2 pos">
        <div class="col">
          <h5><em>{{ position }}</em></h5>
        </div>
        <div class="col tenure">
          <h6><em>{{ tenure }}</em></h6>
        </div>
      </div>
    </div>
    <div class="desc">
      <ul>
        <li v-for="resp in responsibility" :key="resp">
          {{ resp }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ["position", "tenure", "responsibility"],
};
</script>

<style scoped>
.pos{
  color: #1b4d89;
}
.tenure{
  text-align: right;
}
.desc{
  text-align: justify;
}
</style>