<template>
  <nav class="user-menu">
    <template v-if="!isSignIn">
      <v-btn v-if="isDesktop" href="/signin" text>{{ $t('common.login') }}</v-btn>
      <v-btn
        v-if="isDesktop"
        href="/join"
        color="primary"
        variant="elevated"
      >{{ $t('common.register') }}</v-btn>
    </template>
    <template v-else>
      <v-btn
        v-if="isDesktop"
        href="/app/onlineSchool/dashboard"
        color="primary"
        variant="elevated"
      >{{ $t('common.dashboard') }}</v-btn>
    </template>
    <!-- <v-spacer v-if="isDesktop" class="vertical-divider" /> -->
    <!-- <setting-menu v-if="loaded" /> -->
  </nav>
</template>

<style lang="scss" scoped>
@import "../header-style.scss";
</style>

<script>
import Settings from "./Settings";

export default {
  components: {
    "setting-menu": Settings,
  },
  props: {
    isSignIn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
  },
  mounted() {
    this.loaded = true;
  },
};
</script>
