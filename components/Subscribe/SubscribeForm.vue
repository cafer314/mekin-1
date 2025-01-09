<template>
  <v-card class="paper mt-4">
    <v-snackbar v-model="openNotif" :timeout="4000" top right>Message Sent</v-snackbar>
    <div class="flex">
      <input type="text" placeholder="example@email.com" required v-model="email" />
      <div class="pa-2">
        <v-btn
          color="primary"
          class="button"
          @click="validate"
          size="large"
          :block="isMobile"
        >{{ $t("common.blog_subscribe") }}</v-btn>
      </div>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import "./subscribe-style";
</style>

<script>
export default {
  data: () => ({
    email: "",
    openNotif: false,
  }),
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  methods: {
    async validate() {
      if (this.email == "") return;
      let rawResponse = await fetch("/api/onlineSchool/subscribe", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify([this.email]),
      });
      const content = await rawResponse.json();
      if (content == true) {
        this.openNotif = true;
      }
    },
  },
};
</script>
