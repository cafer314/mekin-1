<template>
  <div class="banner-wrap">
    <div class="inner">
      <v-container>
        <v-row align="center" justify="center">
          <v-col lg="8" sm="6" class="px-5">
            <div class="text text-center text-sm-start">
              <h4 class="text-h4">{{ course.name }}</h4>
              <h5 class="text-h5">{{ course.description }}</h5>
              <v-btn
                class="mt-5"
                color="primary"
                variant="elevated"
                v-if="isSignIn"
                @click="enroll(course)"
              >{{ $t('common.enroll') }}</v-btn>
              <v-btn
                v-else
                href="/signin"
                class="mt-5"
                color="primary"
                variant="elevated"
              >{{ $t('common.login') }}</v-btn>
              <v-btn
                class="mt-5 mx-1"
                color="primary"
                variant="outlined"
                :href="`/paper?path=${course.file}&sheet=true`"
                target="_blank"
              >{{ $t('common.btn_detail') }}</v-btn>
            </div>
          </v-col>
          <v-col lg="4" sm="6" class="px-5">
            <div class="img">
              <img draggable="false" :src="getImage(course.img)" alt="illustration" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./about-style.scss";
</style>

<script>
export default {
  methods: {
    getImage(icon) {
      if (icon == "" || !icon) return "";
      return `/api/file/assets?path=${icon}`;
    },
    enroll(item) {
      delete item.items;
      fetch(`/api/onlineSchool/enroll`, {
        body: JSON.stringify(item),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("MotanamyEA")}`,
        },
        method: "POST",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res == true) {
            location.href = location.origin + "/app/onlineSchool/dashboard";
          }
        })
        .catch((err) => {});
    },
  },
  props: {
    isSignIn: {
      type: Boolean,
      default: false,
    },
    course: {
      type: Object,
      defult: () => {},
    },
  },
};
</script>