<template>
  <div class="app">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body{
  margin: 0;
  height: 100%;
  font-family: "Onest", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    overflow-x: hidden;
}

/* Fonts */
.inter-font-200 {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
}

.inter-font-500 {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
}

.inter-font-900 {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
}

.text {
    background: radial-gradient(farthest-corner at 20% 20%,
            #041B2d 30%,
            #004E9A 80%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.text2 {
  background: linear-gradient(to right bottom, #004E9A, #EA4492);
  -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>