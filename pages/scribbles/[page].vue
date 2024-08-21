<template>
    <h2>Something here</h2>
    <p>{{ parameter }}</p>
    <!-- <ContentDoc :path="page" /> -->
     <ContentDoc :path="parameter" />
</template>

<script setup>
const route = useRoute();
const parameter = "scribbles/"+route.params.page;
</script>