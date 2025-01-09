<template>
  <div style="position: relative;">
    <div class="top-deco">
      <section>
        <div>
          <img
            src="https://res.cloudinary.com/skyrev/image/upload/v1613842290/skyrev/education/footer_3d_2x_tivfcv.png"
            draggable="false"
            alt="footer"
            class="img-2d3d"
          />
        </div>
      </section>
    </div>
    <div class="footer">
      <div class="bottom-deco">
        <div class="left-deco">
          <img
            src="https://res.cloudinary.com/skyrev/image/upload/v1613842291/skyrev/education/footer_plant_3d_2x_i8osqq.png"
            alt="footer"
            draggable="false"
            class="img-2d3d"
          />
        </div>
        <div class="right-deco">
          <img
            src="https://res.cloudinary.com/skyrev/image/upload/v1613842291/skyrev/education/footer_plant2_3d_2x_dvi0iw.png"
            alt="footer"
            class="img-2d3d"
            draggable="false"
          />
        </div>
      </div>
      <v-container class="max-lg" style="position: relative;">
        <v-row :class="{ 'column-reverse': isMobile }" align="center">
          <v-col cols="12" md="6" class="px-12">
            <logo type="portrait" />
            <p class="use-text-subtitle2">{{$t("footer.text")}}</p>
            <div class="socmed">
              <v-btn icon variant="text" size="x-large" color="primary" target="_blank" href="#">
                <i class="ion-logo-facebook" />
              </v-btn>
              <v-btn icon variant="text" size="x-large" color="primary" target="_blank" href="#">
                <i class="ion-logo-linkedin" />
              </v-btn>
              <v-btn icon variant="text" size="x-large" color="primary" target="_blank" href="#">
                <i class="ion-logo-twitter" />
              </v-btn>
              <v-btn icon variant="text" size="x-large" color="primary" target="_blank" href="#">
                <i class="ion-logo-instagram" />
              </v-btn>
            </div>
            <div class="contact">
              <p class="use-text-paragraph">
                {{ $t('common.blog_phone') }}
                <br />
                <span dir="ltr">+966 011 279 0012</span>
              </p>
              <v-divider class="divider my-3" />
              <p class="use-text-paragraph">
                {{ $t('common.blog_email') }}
                <br />info@baban.sa
              </p>
            </div>
            <p class="body-2 mt-5 text-center">
              &copy;&nbsp;
              {{ brand.starter.footerText }}
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <div class="form-wrap">
              <v-snackbar v-model="openNotif" :timeout="4000" top right>Message Sent</v-snackbar>
              <v-card class="form-box">
                <v-row>
                  <v-col cols="12">
                    <h3 class="title-main use-text-title">{{ $t('common.contact_title2') }}</h3>
                  </v-col>
                  <v-col cols="12">
                    <div class="form">
                      <v-form ref="form" v-model="valid">
                        <v-row class="spacing6">
                          <v-col cols="12" sm="12" class="px-6 py-0">
                            <v-text-field
                              variant="outlined"
                              v-model="name"
                              hide-details
                              :rules="nameRules"
                              :label="$t('common.form_name')"
                              class="input"
                              required
                            />
                          </v-col>
                          <v-col cols="12" sm="12" class="px-6 py-0">
                            <v-text-field
                              v-model="email"
                              hide-details
                              variant="outlined"
                              :rules="emailRules"
                              :label="$t('common.form_email')"
                              class="input"
                              required
                            />
                          </v-col>
                          <v-col cols="12" class="px-6 py-0">
                            <v-textarea
                              v-model="message"
                              variant="outlined"
                              hide-details
                              rows="6"
                              class="input"
                              :label="$t('common.form_message')"
                            />
                          </v-col>
                        </v-row>
                        <div class="btn-area">
                          <v-btn
                            color="primary"
                            size="large"
                            block
                            @click="validate"
                          >{{ $t('common.form_send') }}</v-btn>
                        </div>
                      </v-form>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./footer-contact";
</style>

<script>
import Logo from "../Logo";
import brand from "@/assets/text/brand";

export default {
  components: {
    Logo,
  },
  data: () => ({
    brand,
    openNotif: false,
    valid: false,
    name: "",
    nameRules: [(v) => !!v || "Name is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
  }),
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  methods: {
    async validate() {
      if (this.valid == true) {
        let rawResponse = await fetch("/api/onlineSchool/contact", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message,
          }),
        });
        const content = await rawResponse.json();
        if (content == true) {
          this.openNotif = true;
        }
      }
    },
  },
};
</script>
