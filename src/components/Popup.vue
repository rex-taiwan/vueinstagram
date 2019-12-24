<template>
  <div class="text-center">
    <v-dialog fullscreen transition="dialog-bottom-transition" v-model="dialog">
      <template v-slot:activator="{on}">
        <v-btn text color="white" v-on="on">
          <v-icon size="30" class="mx-1" color="black">mdi-plus-box-outline</v-icon>
        </v-btn>
      </template>

      <v-stepper v-model="e1">
       
        <!-- <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Name of step 3</v-stepper-step>
       <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">Name of step 4</v-stepper-step>
        </v-stepper-header>-->

        <v-stepper-items>
          <v-form ref="form">
              <!-- step1 -->
            <v-stepper-content class="ma-0 pa-0" step="1" style="height:100%;">
              <!-- <v-text-field
            class="mt-5" id="postUrl"
              v-model="postUrl"></v-text-field>-->
            <v-app-bar 
      color="white black--text"
   flat   dark class="d-sm-none d-block"
    >

    

        <span class="font-weight-bold black--text" @click="dialog=false">Cancel</span>
            
      <v-spacer></v-spacer>
      <span class="font-weight-bold">Recent</span> 
<v-spacer></v-spacer>
       <span class="font-weight-bold success--text" style="cursor:pointer" @click="e1 = 2">Next</span>
    </v-app-bar>
     <v-divider></v-divider>
             
              <input
                type="file"
                style="display:none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"
              />
              <input
                type="file"
                style="display:none"
                ref="postInput"
                accept="image/*"
                @change="postPicked"
              />

      <input type="file" v-show="false" ref="pictureInput" @change="previewImage" accept="image/*" >
      <!-- <div>
      <p>Progress: {{uploadValue.toFixed()+"%"}}
      <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
      </div> -->
       



              <!-- <img class="preview" :src="picture"> -->

              <!-- <v-btn @click="onUpload">Upload</v-btn> -->
              <!-- <v-btn @click="pictureClick">Click me </v-btn> -->

              <v-text-field
                class="mt-5"
                placeholder="Upload an avatar image"
                prepend-icon="mdi-image"
                v-show="false"
                id="imgUrl"
                :rules="filerules"
                label="Avatar"
                v-model="imgUrl"
              ></v-text-field>

              <!-- <input type="file" @change="previewImage" accept="image/*" > -->

              <!-- <img  class="img-fluid" alt=""> -->

              <v-hover>
                <template v-slot:default="{ hover }">
                  <!-- for postURl image ---- >>> @click="PostFile"  -->
                 
                  <v-img  @click="pictureClick"  height="550" :src="picture" alt>
                    <div  style="height:550px;">
                      <!-- <v-progress-linear
                        :size="200"
                        height="550"
                        color="#191414"
                        :value="postvalue"
                        class="white--text"
                      >{{postvalue}} %</v-progress-linear> -->
                    <!-- <span class="white--text"> {{uploadValue.toFixed()+"%"}}</span> -->
                    </div>

                    <v-fade-transition>
                      <v-overlay hover="true" absolute color="grey">
                        <v-btn>
                          Upload Image
                          <v-icon>mdi-camera</v-icon>
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-img>
                  
                </template>
              </v-hover>

<filter-type v-for="filter in filters"
          :filter="filter"
          :image="image"
          :key="filters.indexOf(filter)">
        </filter-type>




              <div
                class="green--text subtitle-1 mt-10"
                v-show="validVisible"
                v-if="picture.length<5048487"
              >
                <p class="mt-3">
                  <v-icon class="mx-2" small color="green">mdi-check-circle</v-icon>Success!
                </p>
              </div>

              <div class="error--text subtitle-1 mt-10" v-show="validVisible" v-else>
                <p class="mt-3">
                  <v-icon class="mx-2" small color="red">mdi-close-circle</v-icon>Image size should be less than 1 MB!
                </p>
              </div>

             
                <!-- <v-text-field v-show="false" show-size :rules="filerules"
            class="mt-5" id="postUrl"
             v-model="postUrl">
                </v-text-field>-->

                <v-spacer></v-spacer>
              
              <!-- post image -->
              
              <!-- <v-btn text class="grey lighten-5" @click="PostFile">
                <v-icon class="mx-1">mdi-image</v-icon>Upload Image
              </v-btn>

             -->
 <v-progress-linear 
                        :size="200"
                        height="3"
                        color="black"
                        :indeterminate="indeterminate"
                       :value="uploadValue"
                        class="white--text"
                      ></v-progress-linear>
             
            </v-stepper-content>

            <!-- step2 -->

            <v-stepper-content step="2" class="ma-0 pa-0" style="height:100%;">
              <v-app-bar 
      color="white black--text"
   flat  dark class="ma-0 px-0 d-sm-none d-block"
    >

    

    <v-icon color="black" @click="e1 = 1">mdi-chevron-left</v-icon>
            
      <v-spacer></v-spacer>
     <span class="font-weight-bold">Profile Setting</span>
<v-spacer></v-spacer>
        <span class="success--text" style="cursor:pointer" @click="e1 = 3">Next</span>
    </v-app-bar>
              
     <v-divider></v-divider>

              <div class="d-flex justify-center my-10">
               
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-avatar @click="onPickFile" size="120" class="white ma-2">
                      <v-progress-linear
                        v-show="elementVisible"
                        :size="200"
                        height="30"
                        color="black accent-4"
                        :value="value"
                        class="white--text"
                      >{{value}} %</v-progress-linear>

                      <img v-show="!elementVisible" :src="imgUrl" />

                      <v-fade-transition>
                        <v-overlay hover="true" absolute color="black">
                          <v-btn :loading="loading">
                            Upload Image
                            <v-icon>mdi-camera</v-icon>
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-avatar>
                  </template>
                </v-hover>

                <div
                  class="green--text subtitle-1"
                  v-show="avatarvalid"
                  v-if="imgUrl.length<1048487"
                >
                  <p class="mt-12">
                    <v-icon class="mx-2" small color="green">mdi-check-circle</v-icon>Success!
                  </p>
                </div>

                <div class="error--text subtitle-1" v-show="avatarvalid" v-else>
                  <p class="mt-12">
                    <v-icon class="mx-2" small color="red">mdi-close-circle</v-icon>Image size should be less than 1 MB!
                  </p>
                </div>
                
              </div>

 
               <v-text-field
                solo
                flat
                label="Username"
                v-model="person"
                prepend-icon="mdi-account"
                :rules="inputRules"
                class="mx-auto"
              ></v-text-field>
 
              

             
            </v-stepper-content>

            <!--  step 3 -->

            <v-stepper-content  class="ma-0 pa-0" step="3">
              <v-app-bar 
      color="white black--text"
   flat   dark class="d-sm-none d-block"
    >
        <v-icon color="black" @click="e1 = 2">mdi-chevron-left</v-icon>
            
      <v-spacer></v-spacer>
       <span class="font-weight-bold">New post</span>
<v-spacer></v-spacer>
      <v-btn text class="white font-weight-bold success--text"  @click="submit()" :loading="loading">Share</v-btn>
    </v-app-bar>
    <v-divider></v-divider>
              <!-- preivew postUrl image -->
              <v-row class="mt-6">
                <!-- v-show="validVisible" -->
                 <!-- v-if="validVisible" -->
                <v-col  cols="4" md="1">
                  <v-img
                    width="150"
                    @click="PostFile"
                   
                    height="140"
                    :src="picture"
                    alt

                    

                     
                  >
                    <div v-if="postVisible" style="width:100%; height:350px;">
                      <v-progress-linear
                        :size="200"
                        height="150"
                        color="#191414"
                        :value="postvalue"
                        class="white--text"
                      >{{postvalue}} %</v-progress-linear>
                    </div>

                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="black">
                        <v-btn>
                          Upload Image
                          <v-icon>mdi-camera</v-icon>
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-img>
                </v-col>
                <v-col cols="8" md="6">
                  <v-textarea
                    solo
                    flat
                    placeholder="Type some thoughts.."
                    v-model="content"
                    :rules="inputRules"
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-text-field
                solo
                style="height:50px;"
                flat
                label="Tag"
                v-model="title"
                prepend-icon="#"
              ></v-text-field>
              <v-divider></v-divider>
              <div style="height:95px;">
              <p class="ml-2 mt-7">Post to Other accounts</p>
              <v-avatar size=30 class="my-2 mx-2">
                  <img  :src="imgUrl" alt>
              </v-avatar>
              <span class="font-weight-bold subtitle-2">{{person}}</span>
              
              </div>
              <!-- <v-text-field
                solo
                flat
                style="height:50px;"
                label="Username"
                v-model="person"
                prepend-icon="mdi-account"
                :rules="inputRules"
              ></v-text-field> -->
              <v-divider></v-divider>

             
            </v-stepper-content>

            <v-stepper-content step="4">
              <!-- <v-menu max-width="290">
                <template v-slot:activator="{ on }">
                  <v-text-field
                    :rules="dateRules"
                    :value="formattedDate"
                    label="Publish Date"
                    prepend-icon="mdi-calendar-range"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="due"></v-date-picker>
              </v-menu> -->
            
          
            </v-stepper-content>
          </v-form>
          <v-card height="400">

          </v-card>
        </v-stepper-items>
      </v-stepper>
     
        <!-- <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        height="8"
        color="black"
        ></v-progress-linear>-->

        <!-- <img  height="200" :src="modalUrl" alt="">    -->
        <!-- <v-card-text>

        </v-card-text>-->
        <!-- <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        height="2"
        color="black"
        ></v-progress-linear>-->
      
    </v-dialog>
  </div>
</template>


<script>
import moment from 'moment'
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { db } from "../db";
import firebase from "firebase";
// import FilterType from "./FilterType";

// import firebase from "firebase";

export default {
  
  data() {
    return {
     
      e1: 0,
      person: "",
      title: "",
      content: "",
      due: null,
      imgUrl: "./avatar-6.png",
      modalUrl: "./modalbg.png",
      postUrl: "",
      inputRules: [v => v.length >= 3 || "Min length is 4 character"],
      dateRules: [v => v.length >= 3 || "Please choose a date"],
      validVisible: false,
      avatarvalid: false,
      //     rules: [
      // value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      //       ],
      loading: false,
      fileuploading: false,
      elementVisible: false,
      postVisible: false,
      dialog: false,
      image: null,
      postimage: null,
      interval: {},
      value: 0,
      snackbar: false,
      postvalue: 0,
      myDate : new Date(),
      realtimeDate:'',
      filerules: [
        v => v.length <= 1048487 || "Avatar size should be less than 2 MB!"
      ],
      imageData: null,
      picture: "",
      uploadValue: 0,
      bigsizeUpload:false,
      indeterminate:false,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
   moment: function(date) {
            return moment(date);
        },
    previewImage(event) {
      this.indeterminate=true;
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          alert(error.message);
        },
        () => {
          this.uploadValue = 100;
           this.bigsizeUpload=false;
           this.indeterminate=false;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
            
          });
        }
        
        
        
      );
      
    },
    //backup file
    // onUpload() {
    //   const storageRef = firebase
    //     .storage()
    //     .ref(`${this.imageData.name}`)
    //     .put(this.imageData);
    //   storageRef.on(
    //     `state_changed`,
    //     snapshot => {
    //       this.uploadValue =
    //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     },
    //     error => {
    //       alert(error.message);
    //     },
    //     () => {
    //       this.uploadValue = 100;
    //       storageRef.snapshot.ref.getDownloadURL().then(url => {
            
    //         this.picture = url;
    //       });
    //     }
    //   );
    // },
    PostFile() {
      this.$refs.postInput.click();
      
    },
    pictureClick() {
      this.$refs.pictureInput.click();
      this.uploadValue = 0;
      this.bigsizeUpload=true;
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    postPicked(event) {
      this.interval = setInterval(() => {
        if (this.postvalue === 100) {
          this.postVisible = false;
        }
        this.postvalue += 10;
      }, 80);
      this.postvalue = 0;
      this.postVisible = true;
      this.validVisible = true;
      const bgfiles = event.target.files;
      let filename = bgfiles[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a vaild file!");
      }
      const bgfileReader = new FileReader();
      bgfileReader.addEventListener("load", () => {
        this.postUrl = bgfileReader.result;
      });
      bgfileReader.readAsDataURL(bgfiles[0]);
      this.postimage = bgfiles[0];
    },
    onFilePicked(event) {
      this.interval = setInterval(() => {
        if (this.value === 100) {
          this.elementVisible = false;
        }
        this.value += 10;
      }, 80);
      this.value = 0;
      this.elementVisible = true;
      this.avatarvalid = true;
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Please add a vaild file!");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imgUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    submit() {
     
      if (this.$refs.form.validate()) {
       
        this.realtimeDate = moment().format("YYYY-MM-DD, h:mm:ss a");
        this.loading = true;
        const project = {
          title: this.title,
          content: this.content,
          imgUrl: this.imgUrl,
          postUrl: this.postUrl,
          realtimeDate:this.realtimeDate,
          // due: format(parseISO(this.due), "MMM d yyyy"),
          person: this.person,
          p: this.picture,
          status: "ongoing"
        };
        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectAdded");
          });
      }
    }
  },

  computed: {
    formattedDate() {
      return this.due ? format(parseISO(this.due), "MMM d yyyy") : "";
    }
  },
  filters: {
        fromNow(realtimeDate) {
            return moment(realtimeDate).fromNow();
        }
    }
};
</script>

<style>
.fileactive {
  opacity: 0.2;
}
</style>