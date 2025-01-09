<template>
  <v-row>
    <v-col v-for="(item,index) in tm('team')" :key="index" md="4" cols="12" class="pa-5">
      <div data-aos="fade-up" :data-aos-delay="(200 + (100 * index))" data-aos-duration="500">
        <profile-card
          :avatar="`images/${rt(item.img)}.png`"
          :name="rt(item.name)"
          :title="rt(item.job)"
          :body="rt(item.body)"
          type="full"
          orientation="portrait"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import AOS from "aos";
import ProfileCard from "../Cards/ProfileCard";
import { useI18n } from "vue-i18n";

export default {
  components: {
    ProfileCard,
  },
  setup() {
    const { tm, rt } = useI18n();
    return { rt, tm };
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
