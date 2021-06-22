<template>
  <section>
    <div>
      <div class="row row-cols-2">
        <div class="col">
          <h5>{{ position }}</h5>
        </div>
        <div class="col">
          <h6>{{ tenure }}</h6>
        </div>
      </div>
    </div>
    <div>
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