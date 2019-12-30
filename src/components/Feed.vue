<template>
  <div>
    <v-card
      flat
      class="mt-2 white lighten-5"
      v-for="(project, index) in projects"
      :key="project.id"
      :value="index"
    >
      <v-list-item>
        <v-list-item-avatar color="white" class="mr-2">
          <img :src="project.imgUrl" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            class="subtitle-1 font-weight-bold text-lowercase"
            >{{ project.person }}</v-list-item-title
          >
        </v-list-item-content>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">mdi-dots-horizontal</v-icon>
          </template>
          <v-list>
            <v-list-item @click.prevent="deleteProjects(project.id)">
              <v-list-item-title>
                <v-icon>mdi-delete</v-icon>Delete
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon>mdi-share</v-icon>Report
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>

      <v-dialog
        transition="slide-y-reverse-transition"
        v-model="insidesddialog"
        width="400px"
      >
        <template v-slot:activator="{ on }">
          <v-img
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
          </v-img>

          <v-img
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
          </v-img>
        </template>

        <v-card>
          <v-list-item>
            <v-list-item-avatar color="white">
              <img :src="project.imgUrl" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="subtitle-2 text-lowercase">{{
                project.person
              }}</v-list-item-title>
            </v-list-item-content>
            <v-spacer></v-spacer>
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on">mdi-dots-horizontal</v-icon>
              </template>
              <v-list>
                <v-list-item @click.prevent="deleteProjects(project.id)">
                  <v-list-item-title>
                    <v-icon>mdi-delete</v-icon>Delete
                  </v-list-item-title>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    <v-icon>mdi-share</v-icon>Report
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>

          <v-img
            height="450"
            :class="project.filter"
            lazy-src="https://agmbenefitsolutions.com/wp-content/uploads/2015/02/Grey-Gradient-Background.jpg"
            :src="project.p"
          ></v-img>
          <v-card-actions class="my-4">
            <v-icon class="grey--text mx-2">mdi-heart-outline</v-icon>
            <v-icon class="grey--text mx-3">mdi-message-outline</v-icon>
            <v-icon class="grey--text mx-4">mdi-send</v-icon>
          </v-card-actions>
          <p class="mx-3 mt-2">
            <span class="font-weight-bold black--text text-lowercase">{{
              project.person
            }}</span>
            and
            <span class="font-weight-bold black--text">millions of others</span>
            like this post
          </p>
          <p
            class="subtitle-1 font-weight-bold black--text mx-3 text-lowercase"
          >
            {{ project.person }}
            <span class="font-weight-regular">
              <read-more
                more-str="Read more"
                :text="project.content"
                link="#"
                less-str="Read less"
                :max-chars="120"
              ></read-more>
            </span>
            <strong class="d-block font-weight-regular" style="color:#003569"
              >#{{ project.title }}</strong
            >
            <span class="caption grey--text">{{
              getTimeAgo(project.realtimeDate)
            }}</span>
          </p>
        </v-card>
      </v-dialog>

      <v-card-actions class="my-4">
        <v-icon class="primary--text mx-2">mdi-heart-outline</v-icon>
        <v-icon class="primary--text mx-2">mdi-message-outline</v-icon>
        <v-icon class="primary--text ml-2">mdi-send</v-icon>
      </v-card-actions>
      <p class="mx-4 mt-2">
        <span class="font-weight-bold black--text text-lowercase">{{
          project.person
        }}</span>
        and
        <span class="font-weight-bold black--text">millions of others</span>
        like this post
      </p>

      <p class="subtitle-1 font-weight-bold black--text mx-4">
        <v-avatar size="20" class="mr-2">
          <img :src="project.imgUrl" />
        </v-avatar>
        <span class="text-lowercase">{{ project.person }}</span>
        <span
          class="font-weight-regular subtitle-1"
          style="line-height:1mm;important!"
          >{{ project.content }}</span
        >
        <strong class="d-block font-weight-regular mt-4" style="color:#003569"
          >#{{ project.title }}</strong
        >
        <br />
        <span class="caption grey--text">{{
          getTimeAgo(project.realtimeDate)
        }}</span>
      </p>
    </v-card>
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
    projects: {
      type: Array,
    },
    getTimeAgo: {
      type: Function,
    },
    deleteProjects: {
      type: Function,
    },
  },
  //   methods: {
  //   remove(id){
  //     this.$emit('deleteProjects',
  //     {
  //       projects: id
  //     })
  //   }
  // },
  created() {
    // req就是request(请求)
    // res就是response(响应)
    // 有请求就有响应，只是两个相对应的对象而已。
    // https://stackoverflow.com/questions/54773410/how-do-i-get-realtime-document-updates-from-firebase-firestore-with-change-type
    this.$insProgress.start();
    db.collection('projects').onSnapshot(res => {
      this.loading = true;
      this.dialog = true;

      const changes = res.docChanges();
      const projects = changes
        .map(change => {
          if (change.type !== 'added') return null;
          return {
            ...change.doc.data(),
            id: change.doc.id,
          };
        })
        .filter(x => x);

      projects.sort((a, b) => {
        const aDate = moment(a.realtimeDate, 'YYYY-MM-DD HH:mm');
        const bDate = moment(b.realtimeDate, 'YYYY-MM-DD HH:mm');
        return bDate.diff(aDate);

        //return new Date(b.realtimeDate) - new Date(a.realtimeDate);
      });

      console.log('projects: ', projects);

      this.projects = projects;
      this.loading = false;
      this.dialog = false;
      this.$insProgress.finish();
    });
  },
};
</script>
