<template>
    <div>
        <v-tabs
        height="99"
        v-if="!loading"
        background-color="white lighten-5"
        show-arrows
        class="mt-4"
      >
        <v-tabs-slider
          style="display:none"
          color="white lighten-3"
        ></v-tabs-slider>
        <v-tab
          class="white--text mx-0"
          style="height:70px;"
          v-for="(project, index) in projects"
          :key="project.id"
        >
          <v-dialog
            v-model="cirlcedialog"
            overlay-color="#212121"
            overlay-opacity="1"
            width="400px"
            style="height:900px;"
          >
            <template v-slot:activator="{ on }">
              <v-avatar
                size="70"
                color="white"
                v-on="on"
                style="cursor:pointer"
              >
                <img :src="project.imgUrl" class="avatarborder" alt="alt" />
                <span
                  class="black--text text-capitalize mx-auto"
                  style="position:absolute;bottom:-22px;font-size:10px;"
                  >{{ project.person }}</span
                >
              </v-avatar>
            </template>

            <v-carousel
              hide-delimiters
              progress
              show-arrows-on-hover
              touch
              continuous
              interval="4000"
              :value="index"
              height="800"
            >
              <v-carousel-item
                v-for="proj in projects"
                :key="proj.id"
                height="800"
              >
                <v-list-item style="background:#212121">
                  <v-list-item-avatar color="grey">
                    <img :src="proj.imgUrl" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-subtitle class="white--text text-lowercase"
                      >by {{ proj.person }}</v-list-item-subtitle
                    >
                    <span class="caption grey--text">{{
                      getTimeAgo(proj.realtimeDate)
                    }}</span>
                  </v-list-item-content>
                  <v-spacer></v-spacer>
                  <v-icon color="white">mdi-dots-horizontal</v-icon>
                </v-list-item>
                <v-img
                  height="800"
                  :class="proj.filter"
                  :src="proj.p"
                  lazy-src="https://agmbenefitsolutions.com/wp-content/uploads/2015/02/Grey-Gradient-Background.jpg"
                ></v-img>
              </v-carousel-item>
            </v-carousel>
          </v-dialog>
        </v-tab>
      </v-tabs>
    </div>
</template>


<script>

export default {
     props:{
      loading:{
         type:Boolean
      },
      projects:{
        type:Array
      },
      getTimeAgo:{
          type:Function
      }
      
      
    },
}
</script>