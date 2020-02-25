<template>
  <div>
    <!-- Circular loading icon -->
    <div class="d-flex justify-center" v-if="loading">
      <img
        :src="insloadicon"
        class="insloadicon mt-12"
        style="width:30px;height:30px; color:white;"
        alt
      />
    </div>

    <v-skeleton-loader
      v-for="number in 5"
      :key="number"
      :loading="loading"
      v-show="loading"
      class="mx-4 d-inline-block  mt-5"
      type="avatar"
      :boilerplate="true"
      dark
    >
      <v-card></v-card>
    </v-skeleton-loader>

    <!-- Post skeleton loader -->
    <v-skeleton-loader
      class="mt-10 "
      dark
      v-for="number in numbers"
      :key="number"
      :loading="loading"
      :boilerplate="true"
      v-show="loading"
      type="list-item-avatar-two-line,image,image,actions"
    >
      <v-card></v-card>
    </v-skeleton-loader>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
    },
    numbers: {
      type: Array,
    },
  },
  data() {
    return {
      insloadicon: './loading-icon.svg',
    };
  },
};
</script>
