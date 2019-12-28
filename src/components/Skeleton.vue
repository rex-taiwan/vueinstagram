<template>
    <div>

        <!-- Circular loading icon -->
    <div class="d-flex justify-center loadingeffect" v-if="loading">
      <img
        :src="insloadicon"
        class="insloadicon mt-12"
        style="width:30px;height:30px; color:white;"
        alt
      />
    </div>


        <v-skeleton-loader
        v-for="number in 4"
        :key="number"
        :loading="loading"
        v-show="loading"
        class="mx-4 d-inline-block mt-5"
        type="avatar"
      >
        <v-card></v-card>
      </v-skeleton-loader>

      <!-- Post skeleton loader -->
      <v-skeleton-loader
        class="mt-10"
        v-for="number in numbers"
        :key="number"
        :loading="loading"
        v-show="loading"
        type="list-item-avatar-two-line,image,image,actions"
      >
        <v-card></v-card>
      </v-skeleton-loader>
    </div>
</template>

<script>
export default {
    props:{
      loading:{
         type:Boolean
      },
      numbers:{
        type:Array
      },
      
      
    },
    data() {
      return {
        insloadicon: './loading-icon.svg',
      }
    },

    
}
</script>


