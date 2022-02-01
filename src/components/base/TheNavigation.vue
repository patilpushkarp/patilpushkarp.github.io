<template>
  <nav class="navbar">
    <div class="row">
      <div class="col">
        <div class="contact">
          <p>Contact</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/patilpushkarp/">Linedin </a>
            </li>
            <li>
              <a href="https://github.com/patilpushkarp">Github</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <button class="close-button btn btn-dark" @click="closeNav">
          <i class="fa fa-times fa-3x close"></i>
        </button>
        <div class="other">
          <ul>
            <li>
              <router-link to='/' @click="closeNav">Home</router-link>
            </li>
            <li>
              <router-link to='/about' @click="closeNav">About</router-link>
            </li>
            <li>
              <router-link to='/work' @click="closeNav">Work</router-link>
            </li>
            <li>
              <router-link to='/scribble' @click="closeNav">Scribble</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["navigationStatus"],
  methods: {
    closeNav() {
      this.$emit("toggle-status");
    },
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  height: 100vh;
  background-color: black;
  z-index: 2;
  top: 0;
  left: 0;
}
.row {
  width: 100%;
  height: 90%;
  top: 0;
  left: 0;
}
ul {
  list-style-type: none;
}
.contact {
  margin-top: 10%;
  margin-left: 20%;
}
.contact p {
  font-size: 4vw;
  color: wheat;
}

.contact li {
  margin-left: -10%;
  padding: 2% 0%;
}
.contact li a {
  text-decoration: none;
  font-size: 1.5vw;
  color: white;
}
.other {
  padding: 20% 5%;
}
.other li {
  padding: 2% 0%;
}
.other li a {
  text-decoration: none;
  font-size: 4vw;
  color: wheat;
}

.close-button {
  background: transparent;
  color: white;
  border-color: black;
  float: right;
}
.close {
  color: white;
}
</style>