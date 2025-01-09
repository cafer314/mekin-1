<template>
  <div>
    <div class="main-wrap">
      <main-header home :isSignIn="isSignIn" />
      <div class="container-wrap scroll-nav-content">
        <div id="home">
          <banner-slider />
        </div>
        <div id="features" class="space-bottom">
          <v-container>
            <feature />
          </v-container>
        </div>
        <div id="courses" class="space-top">
          <v-container>
            <Cources />
          </v-container>
        </div>
        <div id="testimonials" class="space-top" dir="ltr">
          <Testimonials />
        </div>
        <div class="space-top space-bottom" id="team">
          <v-container>
            <h4 class="use-text-title2 mb-3 text-center">{{ $t('common.about_team') }}</h4>
            <team-grid />
          </v-container>
        </div>
        <div id="contact">
          <main-footer />
        </div>
      </div>
      <hidden point="smDown">
        <PageNav />
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/pages";
</style>

<script>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import Header from "@/components/Header";
import Hidden from "@/components/Hidden";
import BannerSlider from "@/components/BannerSlider";
import Feature from "@/components/Feature";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import PageNav from "@/components/PageNav";
import brand from "@/assets/text/brand";
import { defineNuxtComponent, useRouter, useCookie } from "#app";
import TeamGrid from "@/components/About/TeamGrid";
import Cources from "@/components/courses";

export default defineNuxtComponent({
  components: {
    "main-header": Header,
    BannerSlider,
    Hidden,
    Cources,
    Feature,
    TeamGrid,
    Testimonials,
    PageNav,
    "main-footer": Footer,
  },
  head() {
    return {
      title: brand.starter.name
    };
  },
  setup() {
    const router = useRouter();
    const storedLang = useCookie("i18n_redirected");
    const i18nLocale = useI18n();
    const defaultLocale = "/" + i18nLocale.fallbackLocale.value;
    const isSignIn = ref(false);
    onMounted(async () => {
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
      const rootUrl =
        document.location.pathname === "/" ||
        document.location.pathname === defaultLocale;
      if (storedLang.value && rootUrl) {
        router.push({ path: `/${storedLang.value}` });
      }
    });
    return {
      isSignIn,
    };
  },
});
</script>
