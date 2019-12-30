<template>
  <div class="filter-type">
    <v-tabs
      class="ma-0 pa-0"
      v-tabs
      height="189"
      grow
      align-with-title
      background-color="grey lighten-5"
    >
      <v-tabs-slider
        style="display:none"
        color="white lighten-3"
      ></v-tabs-slider>
      <v-tab
        class="white--text mr-1 ma-0 pa-0 mt-2"
        style="height:120px;"
        v-for="filter in filterArray"
        :key="filter.filtername"
      >
        <div>
          <p class="mt-12 grey--text text-capitalize">
            {{ filter.filtername }}
          </p>
          <figure
            :class="filter.filtertype"
            @click="selectFilter(filter.filtertype)"
            style="cursor:pointer"
          >
            <v-img
              class="ma-0 pa-0"
              style="height:90px;width:90px;"
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
  name: 'FilterType',
  props: {
    filterSelected: Function,
    previewImage: Function,
    picture: Object,
  },
  data() {
    return {
      filterArray: [
        { filtername: 'Aden', filtertype: 'aden' },
        { filtername: 'Brannan', filtertype: 'brannan' },
        { filtername: 'Brooklyn', filtertype: 'brooklyn' },
        { filtername: 'Clarendon', filtertype: 'clarendon' },
        { filtername: 'Earlybird', filtertype: 'earlybird' },
        { filtername: '1977', filtertype: '_1977' },
        { filtername: 'Moon', filtertype: 'moon' },
        { filtername: 'Gingham', filtertype: 'gingham' },
        { filtername: 'Kelvin', filtertype: 'kelvin' },
        { filtername: 'Lofi', filtertype: 'lofi' },
        { filtername: 'Maven', filtertype: 'maven' },
        { filtername: 'Hudson', filtertype: 'hudson' },
        { filtername: 'Inkwell', filtertype: 'inkwell' },
        { filtername: 'Nashville', filtertype: 'nashville' },
        { filtername: 'Perpetua', filtertype: 'perpetua' },
        { filtername: 'Reyes', filtertype: 'reyes' },
        { filtername: 'Rise', filtertype: 'rise' },
        { filtername: 'Slumber', filtertype: 'slumber' },
        { filtername: 'Stinson', filtertype: 'stinson' },
        { filtername: 'Toaster', filtertype: 'toaster' },
        { filtername: 'Valencia', filtertype: 'valencia' },
        { filtername: 'Walden', filtertype: 'walden' },
        { filtername: 'Willow', filtertype: 'willow' },
        { filtername: 'Xpro2', filtertype: 'xpro2' },
      ],
    };
  },
  methods: {
    selectFilter(filtertype) {
      this.$emit('filterSelected', {
        filter: filtertype,
      });
    },
  },
};
</script>
