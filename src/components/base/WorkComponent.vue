<template>
  <section>
    <div class="jumbotron container">
      <h2>
        "The only way to do great work is to love what you do. If you haven't
        found it yet, keep looking. Don't settle." —Steve Jobs
      </h2>
      <hr />
    </div>

    <div class="heading container">
      <h1>WORK</h1>
    </div>
    <!-- Work Experience -->
    <div>
      <div v-for="experience in experiences" :key="experience.company">
        <div class="company">
          <h2>{{ experience.company }}</h2>
        </div>
        <div class="experiences container-fluid">
          <div
            class="experiences-content"
            v-for="workexp in experience.work_experiences"
            :key="workexp.position"
          >
            <h3>{{ workexp.position }}</h3>
            <div class="row">
              <div class="col">
                <h4>{{ workexp.period }}</h4>
              </div>
              <div class="score col">
                <h4>Full Time</h4>
              </div>
            </div>
            <ul>
              <li v-for="desc in workexp.description" :key="desc">
                {{ desc }}
              </li>
            </ul>
            <br />
            <hr />
            <br />
          </div>
        </div>
      </div>
    </div>

    <!-- Tools and Tech -->
    <div class="tools container">
      <div class="row">
        <div class="col-4">
          <h3>Tools & Technologies</h3>
        </div>
        <div class="col-8">
          <table class="table table-borderless">
            <tbody>
              <tr
                class="trow"
                v-for="i in Math.ceil(tools.length / 3)"
                :key="i"
              >
                <td class="tcol" v-for="j in 3" :key="j">
                  {{ tools[3 * (i - 1) + (j - 1)] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div class="skills container">
      <div class="row">
        <div class="col-4">
          <h3>Skills</h3>
        </div>
        <div class="col-8">
          <table class="table table-borderless">
            <tbody>
              <tr
                class="trow"
                v-for="i in Math.ceil(skills.length / 3)"
                :key="i"
              >
                <td class="tcol" v-for="j in 3" :key="j">
                  {{ skills[3 * (i - 1) + (j - 1)] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    experiences() {
      return this.$store.getters["work/experiences"];
    },
    tools() {
      return this.$store.getters["work/tools"];
    },
    skills(){
        return this.$store.getters["work/skills"];
    }
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

h1 {
  font-size: 20vw;
  text-align: center;
  justify-content: center;
  display: flex;
  padding: 20% 5%;
}
.heading {
  color: lightskyblue;
}

.company {
  background-color: black;
  color: white;
  text-align: center;
  padding: 5% 0%;
}
.experiences {
  padding: 5%;
}
.experiences-content h3 {
  font-size: 3vw;
  font-weight: 700;
  margin: 2% 0%;
}
.experiences-content h4 {
  margin: 2% 0%;
}
.score {
  text-align: right;
}
.experiences-content li {
  list-style: none;
  margin: 2% 0%;
  padding-left: 20%;
}

.tools h3, .skills h3 {
  font-size: 3vw;
  font-weight: 800;
  margin-top: 12%;
}
.tools, .skills {
  padding: 2% 0%;
}
table tbody {
  min-width: 100%;
  font-size: 1.5vw;
}
table tbody tr td {
  padding: 6% 0%;
}
</style>