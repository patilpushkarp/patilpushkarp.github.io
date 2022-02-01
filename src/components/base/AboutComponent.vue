<template>
  <section>
    <div class="jumbotron container">
      <h2>
        A professional raised by software and is out on the journey of
        exploration.
      </h2>
      <hr />
    </div>
    <div class="salutation container">
      <h1>HEY!</h1>
    </div>
    <div class="jumbotron container">
      <h2>
        I'M <em><u>PUSHKAR</u> <u>PATIL</u></em
        >. <br />A {{ age }} YO {{ intro }}.
      </h2>
    </div>

    <!-- About Section -->
    <div class="heading container">
      <h1>ABOUT</h1>
    </div>
    <div class="about-body container-fluid">
      <p v-for="bodyContent in aboutBody" :key="bodyContent">
        {{ bodyContent }}
      </p>
      <p
        class="about-sub-body"
        v-for="bodyContent in aboutSubBody"
        :key="bodyContent"
      >
        {{ bodyContent }}
      </p>
    </div>

    <!-- Studies Section -->
    <div class="heading container">
      <h1>STUDIES</h1>
    </div>
    <div class="studies container-fluid">
        <hr>
      <div
        class="studies-content"
        v-for="study in studies"
        :key="study.institue"
      >
        <h3>{{ study.institute }}</h3>
        <div class="row">
          <div class="col">
            <h4>{{ study.study }}</h4>
          </div>
          <div class="score col">
              <h4> {{ study.score_type}} : {{ study.score }}</h4>
          </div>
        </div>
        <p>{{ study.description }}</p>
        <br>
        <hr>
        <br>
      </div>
    </div>

    <!-- Fun facts -->
    <div class="fun-fact container-fluid">
      <h4>Fun facts ( Well, the red carpets are still rolling ..... 😅)</h4>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    intro() {
      return this.$store.getters["about/intro"];
    },
    age() {
      return this.$store.getters["about/age"];
    },
    aboutBody() {
      return this.$store.getters["about/aboutBody"];
    },
    aboutSubBody() {
      return this.$store.getters["about/aboutSubBody"];
    },
    studies() {
      return this.$store.getters["about/studies"];
    },
  },
  beforeCreate() {
    this.$store.commit("about/computeAge");
  },
};
</script>

<style scoped>
.jumbotron {
  background-color: white;
  padding: 12% 5%;
  height: 100%;
  justify-content: center;
}
h2 {
  font-size: 5vw;
  font-weight: 800;
  padding: 8% 0%;
}
hr {
  border: 1px solid red;
}

.salutation {
  min-height: 100%;
  color: grey;
}

h1 {
  font-size: 20vw;
  text-align: center;
  justify-content: center;
  display: flex;
  padding: 20% 5%;
}
u {
  color: indianred;
}

.heading {
  color: lightskyblue;
}
.about-body {
  padding-top: 5%;
  padding-bottom: 7%;
  padding-left: 25%;
  padding-right: 5%;
  font-size: 2vw;
}
.about-sub-body {
  font-size: 1.5vw;
}

.studies {
  padding: 5%;
}
.studies-content h3 {
  font-size: 3vw;
  font-weight: 700;
  margin: 2% 0%;
}
.studies-content h4 {
  margin: 2% 0%;
}
.score{
    text-align: right;
}
.studies-content p{
  margin: 2% 0%;
  padding-left: 20%;

}

.fun-fact {
  padding: 10% 20%;
  background-color: linen;
}
</style>