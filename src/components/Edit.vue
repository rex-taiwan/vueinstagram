<template>
  <div>
    <v-tabs
      v-model="opentab"
      class="ma-0 pa-0"
      height="189"
      grow
      align-with-title
      background-color="grey lighten-5"
      v-show="!hideTab"
    >
      <v-tabs-slider
        style="display:none"
        color="white lighten-3"
      ></v-tabs-slider>
      <v-tab
        class="white--text mr-1 ma-0 pa-0"
        style="height:150px;"
        v-for="edit in editArray"
        :key="edit.editName"
      >
        <div class="ma-0 pa-0">
          <p class="mt-8 black--text text-capitalize">{{ edit.editName }}</p>

          <v-btn dark fab color="black" @click="hideTab = true">
            <v-icon>{{ edit.editIcon }}</v-icon>
          </v-btn>
        </div>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="opentab">
      <v-tab-item v-for="edit in editArray" :key="edit.editName">
        <v-card flat class="mb-12 mx-5" height="320" v-show="hideTab">
          <v-card-text>{{ edit.editName }}</v-card-text>
          <v-slider
            class="mt-12 mx-4"
            :thumb-size="24"
            thumb-label="always"
            v-model="edit.editModel"
            :max="1"
            step="0.1"
            ticks="always"
            tick-size="2"
          ></v-slider>

          <v-row class="mt-8">
            <v-col cols="6" class="text-center">
              <v-btn text @click="hideTab = false">Cancel</v-btn>
            </v-col>
            <v-col cols="6" class="text-center">
              <v-btn text @click="hideFilter = true">Done</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
// import EventBus from "../event-bus.js";

export default {
  name: 'Edit',
  props: {
    picture: Object,
    previewImage: Function,
  },
  data() {
    return {
      filterFunctions: {},
      opacity: 0.5,
      width: 0,
      height: 0,
      selectedPreset: null,
      textCopied: false,
      media: 0,
      hideTab: false,
      opentab: null,
      grayscale: 0,
      sepia: 0,
      saturate: 1,
      hueRotate: 0,
      invert: 0,
      brightness: 1,
      contrast: 1,
      blur: 0,
      suffix: {
        hueRotate: 'deg',
        blur: 'px',
      },

      editArray: [
        {
          editName: 'Adjust',
          editIcon: 'mdi-crop-rotate',
          editModel: 'rotate',
        },
        {
          editName: 'Brightness',
          editIcon: 'mdi-brightness-4',
          editModel: 'opacity',
        },
        {
          editName: 'Blur',
          editIcon: ' mdi-blur-linear',
          editModel: 'blur',
        },
        {
          editName: 'Hightlight',
          editIcon: 'mdi-format-color-highlight',
          editModel: 'highlight',
        },
        {
          editName: 'Structure',
          editIcon: 'mdi-triangle-outline',
          editModel: 'structure',
        },
      ],
    };
  },
};
</script>
