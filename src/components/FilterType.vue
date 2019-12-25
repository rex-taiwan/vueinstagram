<template>
  <div class="filter-type">
    <v-row class="ma-3">
      <v-col
        cols="3"
        class="text-center"
        v-for="filter in filterArray"
        :key="filter.filtername"
      >
        <p class="font-weight-bold">{{ filter.filtername }}</p>
        <figure
          :class="filter.filtertype"
          @click="selectFilter"
          style="cursor:pointer"
        >
          <v-img :src="picture"></v-img>
        </figure>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import EventBus from "../event-bus.js";
export default {
  name: "FilterType",
  props: {
    previewImage: Function,
    picture: Object
  },
  data() {
    return {
      filterArray: [
        { filtername: "Aden", filtertype: "aden" },
        { filtername: "Moon", filtertype: "moon" }
      ]
    };
  },
  methods: {
    // selectFilter() {
    //   EventBus.$emit(
    //    "filter-selected", { filter: this.filterArray.filtertype }
    //   );
    // }
  }
};
</script>
