<template>
  <v-row>
    <v-col cols="12" sm="4" v-for="(item, index) in products" :key="index">
      <ProductCard
        :price="item.cost"
        :img="getImage(item.img)"
        :title="item.name"
        :desc="item.description"
        orientation="portrait"
        :href="`/course/${index}`"
        type="over"
      />
    </v-col>
  </v-row>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { ref } from "vue";

export default {
  components: {
    ProductCard,
  },
  methods: {
    getImage(icon) {
      if (icon == "" || !icon) return "";
      return `/api/file/assets?path=${icon}`;
    },
  },
  async setup() {
    const products = ref({});
    try {
      let rawResponse = await fetch(
        `/api/plugins/database?path=${["onlineSchool", "courses.json"].join(
          ","
        )}`
      );
      const content = await rawResponse.json();
      if (content.statusCode == 404) return;
      products.value = content;
    } catch (err) {}
    return {
      products,
    };
  },
};
</script> 
