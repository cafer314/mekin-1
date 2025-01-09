<template>
  <v-card :class="[orientation, type]" class="profile-card">
    <div class="figure">
      <v-img :src="cover" height="100px" cover />
    </div>
    <v-avatar
      :image="avatar"
      :size="orientation === 'portrait' ? 150 : '60'"
      class="avatar"
    />
    <div class="properties text-truncate">
      <div>
        <h4 class="use-text-subtitle2">
          <strong>
            {{ name }}
          </strong>
        </h4>
        <v-card-subtitle class="use-text-paragraph pa-0">
          {{ title }}
        </v-card-subtitle>
        <v-card-text class="desc">
          {{ body }}
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './profile-card';
</style>

<script>

export default {
  props: {
    cover: {
      type: String,
      default: "",
    },
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'full', // available props: full, rounded, over, oval
    },
    orientation: {
      type: String,
      default: 'portrait', // available props: full, rounded, over, oval
    },
    href: {
      type: String,
      default: '#',
    },
  },
};
</script>
