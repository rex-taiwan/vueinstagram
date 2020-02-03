<template>
  <div>
    <v-tabs
      height="99"
      v-if="!loading"
      background-color="rgba(0,0,0,0.0)"
      style="margin-left:-30px;"
      class="mt-6"
      show-arrows
    >
      <v-tabs-slider
        style="display:none"
        color="white lighten-3"
      ></v-tabs-slider>
      <v-tab
        class="white--text mx-0 px-0"
        style="height:70px;"
        v-for="(project, index) in projects"
        :key="project.id"
      >
        <v-avatar
          size="70"
          color="white"
          class="mx-0"
          style="cursor:pointer"
          @click="onAvatarClicked(index)"
        >
          <img :src="project.imgUrl" class="avatarborder" alt="alt" />
        </v-avatar>
        <span
          class="black--text font-weight-normal d-inline-block text-capitalize mx-auto text-truncate"
          style="max-width:70px;position:absolute;bottom:-22px;font-size:12px;"
          >{{ project.person }}</span
        >
      </v-tab>
    </v-tabs>

    <!-- body -->
    <v-dialog
      overlay-color="#212121"
      overlay-opacity="1"
      width="400"
      v-model="openDialog"
    >
      <vueper-slides
        3d
        ref="myVueperSlides"
        fixed-height="750px"
        transition-speed="350"
        :bullets="false"
        :arrows="true"
        :touchable="true"
        :preventYScroll="true"
        @ready="onSlideClicked"
      >
        <template v-slot:arrow-left>
          <v-icon size="40" @click="restart" class="white--text mb-7"
            >mdi-chevron-left</v-icon
          >
        </template>
        <template v-slot:arrow-right>
          <v-icon size="40" @click="restart" class="white--text mb-7"
            >mdi-chevron-right</v-icon
          >
        </template>

        <vueper-slide
          v-for="project in projects"
          :key="project.id"
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
                <v-list-item-subtitle class="white--text text-lowercase">
                  {{ project.person }}
                  <span class="ml-2 caption white--text">{{
                    getTimeAgo(project.realtimeDate)
                  }}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer></v-spacer>

              <v-icon class="mr-2" color="white" @click="openDialog = false"
                >mdi-close</v-icon
              >
            </v-list-item>

            <v-text-field
              class="custom-placeholer-color d-sm-none d-block"
              placeholder="Send messge"
              flat
              background-color="rgba(227, 227, 227, 0.4)"
              style="position:fixed;bottom:7%;left:20%;width:250px;border-radius:6px;color:white;"
              solo
            ></v-text-field>
          </template>
        </vueper-slide>
      </vueper-slides>
    </v-dialog>
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
      openDialog: false,
      avatarIndex: 0,
    };
  },
  watch: {
    value(val) {
      if (val < 100) return;
      this.value = 0;
      this.bufferValue = 0;
      this.startBuffer();
      this.$refs.myVueperSlides.next();
    },
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    restart() {
      this.value = 0;
    },

    onAvatarClicked(index) {
      this.openDialog = !this.openDialog;
      this.avatarIndex = index;
      this.value = 0;
      this.onSlideClicked();
    },
    onSlideClicked() {
      const { myVueperSlides } = this.$refs;
      if (myVueperSlides) {
        myVueperSlides.goToSlide(this.avatarIndex);
        this.startBuffer();
      }
    },
    startBuffer() {
      clearInterval(this.interval);
      this.value = 0;
      this.interval = setInterval(() => {
        this.value += 1;
        this.bufferValue = 200;
      }, 270);
      // this.model++;
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

.custom-placeholer-color input::placeholder {
  color: rgb(255, 255, 255) !important;
  opacity: 1;
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

<!--
          <v-carousel
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
                ></v-carousel-item>
              </div>
            </div>
          </v-carousel>
          -->
