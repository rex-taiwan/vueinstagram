<template>
  <div>
   
    <!-- <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen  transition="slide-y-transition">
      
      <v-card class="d-flex align-center justify-center">
    <v-icon class="black--text">mdi-gesture</v-icon>
     <span class="black--text title">Exclusive , Just for you</span>
     
      </v-card>
     
    </v-dialog>
    </v-row>-->

    <v-snackbar v-model="snackbar" :timeout="2000" top color="success">
      <img width="120" :src="modalUrl" alt />
      <p class="subtitle-2 mt-4">Awesome! You just added a new post.</p>

      <v-btn text color="white" @click="snackbar=false">Close</v-btn>
    </v-snackbar>

    <v-snackbar v-model="delsnackbar" :timeout="2000" top color="red">
      <img width="120" :src="deleteUrl" alt />
      <p class="subtitle-2 mt-4">You Just delete a new project!</p>
      <v-btn text color="white" @click="delsnackbar=false">Close</v-btn>
    </v-snackbar>
    <v-progress-linear :active="loading" :indeterminate="loading" height="0" color="grey"></v-progress-linear>

    <div class="d-flex justify-center loadingeffect" v-if="loading">
      <img :src="insloadicon" class="insloadicon" style="width:30px;height:30px; color:white;" alt="">
      
    </div>

    <div style="max-width:550px;" class="drageffect2 mx-auto">
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

      <v-tabs height="99" v-if="!loading" background-color="grey lighten-5" show-arrows>
        <v-tabs-slider style="display:none" color="white lighten-3"></v-tabs-slider>

        <v-tab class="white--text mx-0"  style="height:70px;" v-for="project in projects" :key="project.id">
          <v-dialog
            v-model="cirlcedialog"
            overlay-color="#212121"
            overlay-opacity="1"
            width="400px"
          >
            <template v-slot:activator="{ on }">
              <!-- <v-img height="400"
     :src="project.p"
     v-on="on" style="cursor:pointer"
              ></v-img>-->
              <v-avatar size="70" color="white" v-on="on" style="cursor:pointer">
                <img :src="project.imgUrl" class="avatarborder" alt="alt" />
                
              </v-avatar>
            
              <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
            </template>

            <v-card>
              <v-list-item style="background:#212121">
                <v-list-item-avatar color="grey">
                  <img :src="project.imgUrl" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <!-- <v-list-item-title class="headline"> {{project.title}}</v-list-item-title> -->
                  <v-list-item-subtitle class="white--text text-lowercase">
                    by {{project.person}}
                    
                    <!-- <span class="mx-2 caption grey--text">{{project.due}}</span> -->
                  </v-list-item-subtitle>
                   <span class="caption grey--text">{{moment(project.realtimeDate).fromNow()}}</span>
                </v-list-item-content>
                <v-spacer></v-spacer>
                <v-icon color="white">mdi-dots-horizontal</v-icon>
              </v-list-item>
              <v-progress-linear
                height="2"
                rounded
                color="grey darken-2"
                :indeterminate="true"
                timeout="1000"
                class="white--text"
              ></v-progress-linear>
              <v-img height="600" lazy-src="https://agmbenefitsolutions.com/wp-content/uploads/2015/02/Grey-Gradient-Background.jpg" :src="project.p"></v-img>
            </v-card>
            
          </v-dialog>
           <span class="black--text  text-lowercase mx-auto" style="position:absolute;bottom:-26px;">{{project.person}}</span>
        </v-tab>
        
      </v-tabs>

      <!-- <popup @projectAdded="snackbar=true"></popup> -->
    <v-divider class="mt-2 d-block d-sm-none"></v-divider>
      <!-- <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text class="mt-5" v-on="on">
            Filters
            <v-icon small class="mx-2">mdi-sort</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click.prevent="deleteProjects(project.id)">
            <v-list-item-title>
              <v-btn small text color="gray" @click="sortBy('title')" v-on="on">
                <v-icon left small>mdi-filter-variant</v-icon>
                <span class="caption text--lowercase">Project name</span>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            
          </v-list-item>
        </v-list>
      </v-menu> -->

      <!-- <v-btn small text color="gray" @click="sortBy('person')">
           
            <span class="caption text--lowercase">By person</span>
      </v-btn>-->

      <div class="d-flex justify-center" v-if="loading">
      
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </div>
      
      <v-card flat class="mt-2 grey lighten-5" v-for="project in projects" :key="project.title">
        
        <v-list-item>
          <v-list-item-avatar color="white" class="mr-2">
            <img :src="project.imgUrl" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="subtitle-1 font-weight-bold text-lowercase">{{project.person}}</v-list-item-title>
            <!-- <v-list-item-subtitle><span class="mx-2 caption grey--text">{{moment(project.realtimeDate).fromNow()}}</span></v-list-item-subtitle> -->
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

        <v-dialog transition="slide-x-transition" v-model="insidesddialog" width="400px">
          <template v-slot:activator="{ on }">
            <v-img
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
                    <v-icon color="black" class="mx-2">mdi-gesture</v-icon>Exclusive
                  </v-toolbar-title>
                  <v-progress-circular class="ml-5" indeterminate color="black lighten-2"></v-progress-circular>
                </v-row>
              </template>

            </v-img>

            <v-img
              lazy-src="https://agmbenefitsolutions.com/wp-content/uploads/2015/02/Grey-Gradient-Background.jpg"
              height="400"
              class="d-md-none d-block"
              :src="project.p"
              v-on="on"
              style="cursor:pointer;"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-toolbar-title class="text-uppercase black--text subtitle-2">
                    <v-icon color="black" class="mx-2">mdi-gesture</v-icon>Exclusive
                  </v-toolbar-title>
                  <v-progress-circular class="ml-5" indeterminate color="black lighten-2"></v-progress-circular>
                </v-row>
              </template>
            </v-img>

            <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
          </template>
          <v-card>
            <!-- <v-toolbar>
      <v-icon  @click="insidedsdialog = false">mdi-close</v-icon>

      <v-spacer></v-spacer>

    
      <template>
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
            </v-toolbar>-->
            <v-list-item>
              <v-list-item-avatar color="white">
                <img :src="project.imgUrl" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="subtitle-2 text-lowercase">{{project.person}}</v-list-item-title>
                <!-- <v-list-item-subtitle> by {{project.person}} <span class="mx-2 caption grey--text">{{project.due}}</span></v-list-item-subtitle> -->
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

            <v-img height="450" lazy-src="https://agmbenefitsolutions.com/wp-content/uploads/2015/02/Grey-Gradient-Background.jpg" :src="project.p"></v-img>
            <v-card-actions class="my-4">
              
              <v-icon class="grey--text mx-2">mdi-heart-outline</v-icon>

              <v-icon class="grey--text mx-3">mdi-message-outline</v-icon>

              <v-icon class="grey--text mx-4">mdi-send</v-icon>

              <!-- <v-btn icon @click.prevent="deleteProjects(project.id)">
        <v-icon>mdi-trash-can</v-icon>
              </v-btn>-->
            </v-card-actions>
            <p class="mx-3 mt-2">
              <span class="font-weight-bold black--text text-lowercase">{{project.person}}</span>
              and
              <span class="font-weight-bold black--text">millions of others</span> like this post
            </p>
            <p class="subtitle-1 font-weight-bold black--text mx-3 text-lowercase">
              {{project.person}}
              <span class="font-weight-regular">
                <read-more
                  more-str="Read more"
                  :text="project.content"
                  link="#"
                  less-str="Read less"
                  :max-chars="120"
                ></read-more>
              </span>
              <strong class="d-block font-weight-regular" style="color:#003569">#{{project.title}}</strong>

    <!-- <span class="caption grey--text">{{project.due}}</span> -->
   <span class="caption grey--text">{{moment(project.realtimeDate).fromNow()}}</span>
            </p>
          </v-card>
        </v-dialog>

        <!-- <v-card-text class="subtitle-1 mx-4">
        <read-more  more-str="Read more" :text="project.content" link="#" less-str="Read less" :max-chars="300"></read-more>
    
        </v-card-text>-->

        <v-card-actions class="my-4">
         
       
         
          <v-icon class="primary--text mx-2">mdi-heart-outline</v-icon>
          
          <v-icon class="primary--text mx-2">mdi-message-outline</v-icon>

          <v-icon class="primary--text ml-2">mdi-send</v-icon>

          <!-- <v-btn icon @click.prevent="deleteProjects(project.id)">
        <v-icon>mdi-trash-can</v-icon>
          </v-btn>-->
        </v-card-actions>
        <p class="mx-4 mt-2">
          <span class="font-weight-bold black--text text-lowercase">{{project.person}}</span>
          and
          <span class="font-weight-bold black--text">millions of others</span> like this post
        </p>

        <p class="subtitle-1 font-weight-bold black--text mx-4">
          <v-avatar size="20" class="mr-2">
            <img :src="project.imgUrl" />
          </v-avatar>
          <span class="text-lowercase">{{project.person}}</span>
          <span class="font-weight-regular subtitle-1" style="line-height:1mm;important!">
            {{project.content}}
            <!-- <read-more  more-str="Read more" :text="project.content" link="#" less-str="Read less" :max-chars="120"></read-more> -->
          </span>

          <strong class="d-block font-weight-regular mt-4" style="color:#003569">#{{project.title}}</strong>
          <br />

          <!-- <span class="caption grey--text">{{project.due}}</span> -->
           <span class="caption grey--text">{{moment(project.realtimeDate).fromNow()}}</span>
        </p>
      </v-card>
    </div>
  </div>
</template>

<script>
import { db } from "../db";

// import Popup from './Popup'
// import ReadMore from 'vue-read-more';

// Vue.use(ReadMore);

export default {
  //   components:{
  // Popup,

  // },

  data() {
    return {
      e1: 0,
      projects: [],
      loading: true,
      numbers: [4, 5, 6, 7, 8],
      delsnackbar: false,
      snackbar: false,
      overlay: false,
      power: null,
      insidedialog: false,
      circledialog: false,
      commentvalue: "",
      insvalue: 0,
      interval: {},
      insloadicon:"./loading-icon.svg",
      modalUrl: "./successpost.svg",
      deleteUrl: "./delete.svg",
      vertical: true,
      emptyIcon: "mdi-heart-outline",
      dialog: true,
      fullIcon: "mdi-heart",
      halfIcon: "mdi-heart-half-full",
      halfIncrements: false,
      hover: true,
      length: 5,
      rating: 0,
      readonly: false,
      size: 64,
      dense: false,
      bgColor: "grey lighten-1"
    };
  },

  methods: {
    sortBy(prop) {
      const vm = this;
      vm.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },

    //1 就是rearrange array

    //? true 的時候進去下個動作
    //: false 的時候進去下個動作 也等於else
    deleteProjects(id) {
      db.collection("projects")
        .doc(id)
        .delete()
        .then(() => {
          this.projects = this.projects.filter(project => {
            return project.id != id;
          });
          this.loading = false;
          this.delsnackbar = true;
        });
    }
  },
  created() {
    db.collection("projects").onSnapshot(res => {
      this.loading = true;
      this.dialog = true;
      this.power = 1;
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type == "added") {
          this.projects.unshift({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
        this.loading = false;
        this.power = 100;
        this.dialog = false;
      });
    });
  }
};
</script>

<style>
.loadingeffect {
  margin-top: 40px;
  margin-bottom:60px;
}

.drageffect2 {
  margin-top: -20px;
  animation: drageffect2 0.5s;
}



.insloadicon {
  opacity:0.4;
  transform: rotate(360deg);
  animation: rotatelogo 2s infinite;
}

.openeffect {
  transform: rotate(360deg);
  animation: rotatelogo 2s infinite;
}

@keyframes rotatelogo {
  0% {
    transform: rotate(360deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(190deg);
  }
}

@keyframes drageffect2 {
  0% {
    opacity: 0;
    margin-top: 50px;
  }
  100% {
    opacity: 1;
    margin-top: -20px;
  }
}

.avatarborder {
  border: 3px solid #bbbbbb !important;
  transition: 0.4s;
  cursor: pointer;
}

.avatarborder:hover {
  border: 4px solid #d8d8d8 !important;
  transform: scale(1.1);
}

.avatarborder:active {
  border: 4px solid #d8d8d8 !important;
  transform: scale(0.9);
}
.complete {
  border-left: 4px solid #19f5df;
}

.ongoing {
  border-left: 4px solid #ff9100;
}

.overdue {
  border-left: 4px solid #d1413c;
}

.v-chip.complete {
  background: #3cd1c2;
}

.v-chip.ongoing {
  background: #ff7300;
}

.v-chip.overdue {
  background: #d1413c;
}

.theme--light.v-chip:not(.v-chip--active) {
  background: #2600ff;
}

#readmore {
  display: inline-block;
  font-size: 15px;
  color: #1c1c1d;
}

#readless {
  font-size: 15px;
  color: #1c1c1d;
}
</style>


<!-- 舊式寫法 -->
    <!-- <v-layout row wrap justify-center>
        <v-flex  xs4 md3>
            <v-btn block tile outlined>CLick</v-btn>
        </v-flex>
          <v-flex xs4 md3>
            <v-btn block outlined>CLick</v-btn>
        </v-flex>
    </v-layout> -->

<!-- ｐ後面加a就代表是全部directions都加有加上 -->
<!-- tile 的意思就是沒有radius -->