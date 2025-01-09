<template>
  <div class="banner-wrap" :class="{'isRtl':isRtl}">
    <div class="bg-deco"></div>
    <div class="container small-deco">
      <div></div>
    </div>
    <div class="inner">
      <v-container>
        <v-row class="justify-space-between">
          <v-col sm="7" lg="6" cols="12">
            <div class="text">
              <h4 class="use-text-title">{{ $t("hero.title") }}</h4>
              <h5 class="use-text-subtitle2">{{ $t("hero.body") }}</h5>
            </div>
          </v-col>
          <v-col sm="5" lg="5" cols="12" class="img">
            <img src="/1.jpg" draggable="false" alt="illustration" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./slider-styles";
</style>

<script>

export default {
  computed: {
    isRtl() {
      return this.$vuetify.locale.isRtl;
    },
  },
};
</script>
