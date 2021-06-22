<template>
  <section>
    <div class="container">
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
  </section>
  <the-footer></the-footer>
</template>

<script>
import TheFooter from "./commons/TheFooter.vue";
import SubWorkExperience from "./SubWorkExperience.vue";
import about from "@/assets/jsons/about.json";

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
  methods: {},
};
</script>