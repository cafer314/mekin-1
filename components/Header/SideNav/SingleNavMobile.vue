<template>
  <v-list dense>
    <v-list-item
      v-for="(item, index) in dataMenu"
      :key="index"
      :href="item.link"
      link
    >
      <div>
        <v-list-item-title class="menu-list">
          {{ $t('header.' + item.name) }}
        </v-list-item-title>
      </div>
    </v-list-item>
  </v-list>
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>

export default {
  props: {
    dataMenu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
