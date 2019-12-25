<template>
  <div class="filter-type">
    <v-tabs
      class="ma-0 pa-0"
      v-tabs
      height="229"
      background-color="grey lighten-5"
    >
      <v-tabs-slider
        style="display:none"
        color="white lighten-3"
      ></v-tabs-slider>
      <v-tab
        class="white--text mr-1 ma-0 pa-0"
        style="height:150px;"
        v-for="filter in filterArray"
        :key="filter.filtername"
      >
        <div>
          <p class="mt-8 grey--text text-lowercase">{{ filter.filtername }}</p>
          <figure
            :class="filter.filtertype"
            @click="selectFilter(filter.filtertype)"
            style="cursor:pointer"
          >
            <v-img
              class="ma-0 pa-0"
              style="height:100px;width:100px;"
              :src="picture"
            ></v-img>
          </figure>
        </div>
      </v-tab>
    </v-tabs>
    <!-- <v-row class="ma-3">
      <v-col cols="3" class="text-center" v-for="filter in filterArray" :key="filter.filtername">
        <p class="font-weight-bold">{{ filter.filtername }}</p>
        <figure
          :class="filter.filtertype"
          @click="selectFilter(filter.filtertype)"
          style="cursor:pointer"
        >
          <v-img :src="picture"></v-img>
        </figure>
      </v-col>
    </v-row> -->
  </div>
</template>

<script>
// import EventBus from "../event-bus.js";

export default {
  name: "FilterType",
  props: {
    filterSelected: Function,
    previewImage: Function,
    picture: Object
  },
  data() {
    return {
      filterArray: [
        { filtername: "Aden", filtertype: "aden" },
        { filtername: "brannan", filtertype: "brannan" },
        { filtername: "brooklyn", filtertype: "brooklyn" },
        { filtername: "clarendon", filtertype: "clarendon" },
        { filtername: "earlybird", filtertype: "earlybird" },
        { filtername: "1977", filtertype: "_1977" },
        { filtername: "Moon", filtertype: "moon" },
        { filtername: "gingham", filtertype: "gingham" },
        { filtername: "kelvin", filtertype: "kelvin" },
        { filtername: "lofi", filtertype: "lofi" },
        { filtername: "maven", filtertype: "maven" },
        { filtername: "hudson", filtertype: "hudson" },
        { filtername: "inkwell", filtertype: "inkwell" },
        { filtername: "nashville", filtertype: "nashville" },
        { filtername: "perpetua", filtertype: "perpetua" },
        { filtername: "reyes", filtertype: "reyes" },
        { filtername: "rise", filtertype: "rise" },
        { filtername: "slumber", filtertype: "slumber" },
        { filtername: "stinson", filtertype: "stinson" },
        { filtername: "toaster", filtertype: "toaster" },
        { filtername: "valencia", filtertype: "valencia" },
        { filtername: "walden", filtertype: "walden" },
        { filtername: "willow", filtertype: "willow" },
        { filtername: "xpro2", filtertype: "xpro2" }
      ]
    };
  },
  methods: {
    selectFilter(filtertype) {
      this.$emit("filterSelected", {
        filter: filtertype
      });
    }
  }
};
</script>
