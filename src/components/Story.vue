<template>
  <div>
    <v-tabs
      height="99"
      v-if="!loading"
      background-color="rgba(0,0,0,0.0)"
      style="margin-left:-10px;"
      class="mt-4"
      show-arrows
    >
      <v-tabs-slider
        style="display:none"
        color="white lighten-3"
      ></v-tabs-slider>

      <v-tab
        class="white--text mx-0"
        style="height:70px;"
        v-for="project in projects"
        :key="project.id"
      >
        <v-dialog overlay-color="#212121" overlay-opacity="1" width="400px">
          <template v-slot:activator="{ on }">
            <v-avatar
              size="70"
              color="white"
              class="mx-0"
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

          <vueper-slides
            ref="myVueperSlides"
            3d
            fixed-height="700px"
            :bullets="false"
            :arrows="true"
          >
            <template v-slot:arrow-left>
              <v-icon class="white--text">mdi-chevron-left-circle</v-icon>
            </template>

            <template v-slot:arrow-right>
              <v-icon class="white--text">mdi-chevron-right-circle</v-icon>
            </template>
            <vueper-slide
              v-for="project in projects"
              :key="project.title"
              :image="project.p"
            >
              <template v-slot:content>
                <v-progress-linear
                  v-model="value"
                  :buffer-value="bufferValue"
                  rounded
                  class="my-2 mx-2"
                  color="white"
                  height="3"
                ></v-progress-linear>
                <v-list-item>
                  <v-list-item-avatar color="grey">
                    <img :src="project.imgUrl" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-subtitle class="white--text text-lowercase"
                      >by {{ project.person }}
                      <span class="ml-2 caption white--text">
                        {{ getTimeAgo(project.realtimeDate) }}
                      </span></v-list-item-subtitle
                    >
                  </v-list-item-content>
                  <v-spacer></v-spacer>
                  <v-icon color="white">mdi-dots-horizontal</v-icon>
                </v-list-item>
              </template>
            </vueper-slide>
          </vueper-slides>
          <!-- <v-carousel
            hide-delimiters
            progress
            show-arrows-on-hover
            touch
            continuous
            interval="4000"
            :value="index"
            height="800"
            v-model="model"
          >
                  <div class="scene">
  <div class="cube">
   
      <v-carousel-item 
             
              class="switcheffect"
              v-for="proj in projects"
              :key="proj.id"
              height="800"
              style="background-size: cover; background-position: center;position: absolute;width:100%;"
              :style="{backgroundImage:`url(${proj.p})`}"
            >
             
              
            
            </v-carousel-item>
   
    
  
  </div>
</div>
            
          </v-carousel> -->
        </v-dialog>
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
export default {
  components: { VueperSlides, VueperSlide },
  props: {
    loading: {
      type: Boolean,
    },
    projects: {
      type: Array,
    },
    getTimeAgo: {
      type: Function,
    },
  },
  data() {
    return {
      value: 0,
      bufferValue: 100,
      interval: 0,
      model: 0,
    };
  },
  watch: {
    value(val) {
      if (val < 100) return;
      this.value = 0;
      this.bufferValue = 0;
      this.startBuffer();
    },
  },

  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      clearInterval(this.interval);

      this.interval = setInterval(() => {
        this.value += 1;
        this.bufferValue += Math.random() * 100;
      }, 200);
      // this.model++;

      this.$refs.myVueperSlides.next();
    },
  },
};
</script>

<style>
.switcheffect {
  animation: switchbaby 0.1s;
}

@keyframes switchbaby {
  0% {
    transform: translateZ(0px) rotateY(0deg);
  }
  100% {
    transform: translateZ(-500px) rotateY(-90deg);
  }
}

.scene {
  perspective: 500px;
}

.cube {
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
}

.switcheffect {
  animation: switchbaby 0.7s;
}

@keyframes switchbaby {
  0% {
    transform: rotateY(70deg);
  }
  100% {
    transform: rotateY(0deg);
  }
}
</style>
