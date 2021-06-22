<template>
  <section>
    <!-- Work Experience section -->
    <div class="container wex">
      <div>
        <h1>Professional Experience</h1>
      </div>
      <div
        v-for="experience in experiences.work_experience"
        :key="experience.id"
      >
        <h3>{{ experience.company }}</h3>
        <sub-work-experience
          v-for="resp in experience.experience"
          :key="resp.id"
          :position="resp.post"
          :tenure="resp.time_period"
          :responsibility="resp.responsibilities"
        ></sub-work-experience>
      </div>
    </div>

    <!-- Technologies used -->
    <div class="container">
      <div class="tec">
        <h1>Technologies Used</h1>
      </div>

      <div class="container">
        <div v-for="i in 2" :key="i" class="row imgrow">
          <div v-for="j in 3" :key="j" class="col">
            <img
              v-if="parseImgUrl(false)"
              :src="parseImgUrl(true)"
              class="img-fuild imgsize"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- School and College section -->
    <div class="container sch">
      <div>
        <h1>Education</h1>
      </div>
      <div v-for="education in experiences.education" :key="education.id">
        <div class="row row-cols-2">
          <div class="col">
            <h3>{{ education.school }}</h3>
          </div>
          <div class="col tp">
            <p>{{ education.time_period }}</p>
          </div>
        </div>
        <div class="row row-cols-2">
          <div class="col">
            <h6>{{ education.course }}</h6>
          </div>
          <div class="col mk">
            <p>{{ education.marks }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <the-footer></the-footer>
</template>

<script>
import TheFooter from "./commons/TheFooter.vue";
import SubWorkExperience from "./SubWorkExperience.vue";
import about from "@/assets/jsons/about.json";

var counter = 0;

export default {
  components: {
    TheFooter,
    SubWorkExperience,
  },
  data() {
    return {
      experiences: about,
    };
  },
  methods: {
    parseImgUrl(incrementSignal) {
      console.log(this.experiences.tools);
      console.log(counter);

      if (counter < this.experiences.tools.length) {
        var image = this.experiences.tools[counter].img;
        if (incrementSignal) {
          counter++;
        }
        return require("../assets/tools/" + image);
      } else {
        if (incrementSignal) {
          counter++;
        }
        return null;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  color: #e6005c;
  padding: 3% 0%;
}
h3 {
  color: #1b4d89;
  padding: 1% 0%;
}
.wex,
.sch,
.tec {
  text-align: left;
}
.tp,
.mk {
  text-align: right;
}
.imgsize {
  width: 40%;
  max-height: 100%;
}

.imgrow{
  padding: 2% 0%;
}
</style>