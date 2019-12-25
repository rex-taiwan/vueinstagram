<template>
  <v-app class="grey lighten-4">
   
    <Navbar></Navbar>
    <v-content class="mb-4">
   <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar';
import EventBus from "./event-bus.js";
export default {
  name: 'App',
  props:{
    picture:Object,
  },
  components:{
  Navbar
  },
  data: () => ({
    //
  }),
  created() {
    EventBus.$on("filter-selected", evt => {
      this.selectedFilter = evt.filter;
    });
  },
};
</script>
