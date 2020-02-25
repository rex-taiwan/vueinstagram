<template>
  <div>
    <transition-group name="slide-in">
      <v-card
        flat
        class="mt-2"
        v-for="(project, index) in projects"
        :key="project.id"
        :value="index"
        style="background:#222222"
      >
        <v-list-item>
          <v-list-item-avatar color="white" class="mr-2">
            <img :src="project.imgUrl" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title
              class="subtitle-1 font-weight-bold text-lowercase white--text"
              >{{ project.person }}</v-list-item-title
            >
          </v-list-item-content>
          <v-spacer></v-spacer>
          <v-icon @click="onFeedClicked(project.id)" color="grey"
            >mdi-dots-horizontal</v-icon
          >
        </v-list-item>

        <!-- <v-img
        :class="project.filter"
        height="600"
        lazy-src="https://agmbenefitsolutions.com/wp-content/uploads/2015/02/Grey-Gradient-Background.jpg"
        class="d-md-block d-none"
        :src="project.p"
        v-on="on"
        style="cursor:pointer;"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-toolbar-title class="text-uppercase black--text subtitle-2">
              <v-icon color="black" class="mx-2">mdi-gesture</v-icon
              >Vueinstagram
            </v-toolbar-title>
            <v-progress-circular
              class="ml-5"
              indeterminate
              color="black lighten-2"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img> -->
        <progressive-img
          :class="project.filter"
          class="d-md-none d-block"
          :src="project.p"
          style="cursor:pointer;max-height:600px;max-width:100%;"
          :v-else-if="project.p"
          :blur="70"
          :placeholder="project.p"
        />
        <!-- <v-img
        lazy-src="https://agmbenefitsolutions.com/wp-content/uploads/2015/02/Grey-Gradient-Background.jpg"
        height="400"
        class="d-md-none d-block"
        :src="project.p"
        v-on="on"
        :class="project.filter"
        style="cursor:pointer;"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-toolbar-title class="text-uppercase black--text subtitle-2">
              <v-icon color="black" class="mx-2">mdi-gesture</v-icon
              >Vueinstagram
            </v-toolbar-title>
            <v-progress-circular
              class="ml-5"
              indeterminate
              color="black lighten-2"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img> -->

        <v-card-actions class="my-4">
          <v-icon class=" mx-2" color="grey">mdi-heart-outline</v-icon>
          <v-icon class=" mx-2" color="grey">mdi-message-outline</v-icon>
          <v-icon class=" ml-2" color="grey">mdi-send</v-icon>
        </v-card-actions>
        <p class="mx-4 mt-2 grey--text">
          <span class="font-weight-bold white--text text-lowercase">{{
            project.person
          }}</span>
          and
          <span class="font-weight-bold white--text">millions of others</span>
          like this post
        </p>

        <p class="subtitle-1 font-weight-bold white--text mx-4">
          <v-avatar size="20" class="mr-2">
            <img :src="project.imgUrl" />
          </v-avatar>
          <span class="text-lowercase">{{ project.person }}</span>
          <span
            class="font-weight-regular subtitle-1 ml-2"
            style="line-height:1mm;important!"
            >{{ project.content }}</span
          >
          <span class="d-block font-weight-regular mt-4" style="color:grey"
            >#{{ project.title }}</span
          >
          <br />
          <span class="caption grey--text">{{
            getTimeAgo(project.realtimeDate)
          }}</span>
          <span class="ml-2 caption font-weight-bold text-capitalize"
            >See Translation</span
          >
        </p>
      </v-card>
    </transition-group>

    <!-- Bottom sheet -->
    <div class="text-center">
      <v-bottom-sheet inset persistent v-model="openBottomSheet">
        <v-sheet class="text-center mx-auto" height="380px">
          <!-- width="350px" -->
          <v-list-item @click="deleteProjects(feedId)">
            <v-list-item-title class="red--text">Delete</v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-title>Report</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-title>Unfollow</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-title>Copy Link</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-title>Share to</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item>
            <v-list-item-title>Turn On Post Notifications</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item class="pt-4" @click="toggleBottomSheet">
            <v-list-item-title>Cancel</v-list-item-title>
          </v-list-item>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>
import { db } from '../db';
import moment from 'moment';

export default {
  props: {
    loading: {
      type: Boolean,
    },
    openBottomSheet: {
      type: Boolean,
    },
    projects: {
      type: Array,
    },
    getTimeAgo: {
      type: Function,
    },
    deleteProjects: {
      type: Function,
    },
    toggleBottomSheet: {
      type: Function,
    },
  },
  data() {
    return {
      feedId: 0,
    };
  },
  methods: {
    onFeedClicked(id) {
      this.toggleBottomSheet();
      this.feedId = id;
    },
  },
};
</script>

<style lang="scss">
@import 'src/styles/_layout.scss';
</style>
