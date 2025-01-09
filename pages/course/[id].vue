<template>
  <div class="main-wrap">
    <main-header home :isSignIn="isSignIn" />
    <banner :course="course" :isSignIn="isSignIn" />
    <div class="container-wrap scroll-nav-content">
      <div style="height: 500px;"></div>
      <div id="contact">
        <main-footer />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/pages";
iframe {
  width: 100%;
  height: 100vh;
}
</style>

<script>
import { onMounted, ref } from "vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import brand from "@/assets/text/brand";
import { defineNuxtComponent, useRoute } from "#app";
import Banner from "@/components/About/Banner";

export default defineNuxtComponent({
  components: {
    "main-header": Header,
    "main-footer": Footer,
    Banner,
  },
  head() {
    return {
      title: brand.starter.name + " - Home Page",
    };
  },
  setup() {
    const isSignIn = ref(false);
    const route = useRoute();
    const course = ref({});
    onMounted(async () => {
      try {
        fetch(`/api/onlineSchool/admin/courses/${route.params.id}`)
          .then((res) => res.json())
          .then((res) => {
            course.value = res;
          });
        if (localStorage.getItem("MotanamyEA") !== null) {
          let rawResponse = await fetch("/api/auth/validToken", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("MotanamyEA")}`,
            },
          });
          const content = await rawResponse.json();
          if (content && content.user) {
            isSignIn.value = true;
          }
        }
      } catch (err) {}
    });
    return {
      isSignIn,
      course,
    };
  },
});
</script>
