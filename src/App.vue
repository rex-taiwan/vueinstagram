<template>
  <v-app class="grey lighten-4">
    <introbar></introbar>
    <v-content class="mb-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
// import Navbar from '@/components/Navbar';
import introbar from '@/components/introbar';

export default {
  name: 'App',
  props: {
    picture: Object,
  },
  components: {
    introbar,
  },
  data: () => ({
    //
  }),
  created() {},
};
</script>
