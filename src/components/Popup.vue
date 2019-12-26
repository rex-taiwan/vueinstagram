<template>
  <div class="text-center">
    <v-dialog fullscreen transition="dialog-bottom-transition" v-model="dialog">
      <!-- Trigger part -->
      <template v-slot:activator="{ on }">
        <v-btn text color="white" v-on="on">
          <v-icon size="30" class="mx-1" color="black"
            >mdi-plus-box-outline</v-icon
          >
        </v-btn>
      </template>

      <!-- Content part -->
      <v-stepper v-model="e1">
        <v-stepper-items>
          <v-form ref="form">
            <!-- step1 -->
            <v-stepper-content class="ma-0 pa-0" step="1" style="height:100%;">
              <v-app-bar
                color="white black--text"
                flat
                dark
                class="d-sm-none d-block"
              >
                <span
                  class="font-weight-bold black--text"
                  @click="dialog = false"
                  >Cancel</span
                >

                <v-spacer></v-spacer>
                <span class="font-weight-bold">Recent</span>
                <v-spacer></v-spacer>
                <span
                  class="font-weight-bold success--text"
                  style="cursor:pointer"
                  @click="e1 = 2"
                  >Next</span
                >
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

              <input
                type="file"
                v-show="false"
                ref="pictureInput"
                @change="previewImage"
                accept="image/*"
              />

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

              <v-progress-linear
                :size="200"
                height="30"
                color="black"
                :value="picturevalue"
                class="white--text"
                v-show="showprogress"
              >
                {{ picturevalue }}%
              </v-progress-linear>

              <v-hover>
                <template v-if="!filter" v-slot:default="{ hover }">
                  <v-img
                    @click="pictureClick"
                    height="450"
                    :selectedFilter="selectedFilter"
                    :src="picture"
                    alt
                  >
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

              <v-hover>
                <template v-if="filter" v-slot:default="{ hover }">
                  <figure :class="filter">
                    <v-img
                      height="450"
                      @click="pictureClick"
                      lazy-src="https://agmbenefitsolutions.com/wp-content/uploads/2015/02/Grey-Gradient-Background.jpg"
                      :src="picture"
                      alt
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-toolbar-title
                            class="text-uppercase black--text subtitle-2"
                          >
                            <v-icon color="black" class="mx-2"
                              >mdi-gesture</v-icon
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
                  </figure>
                </template>
              </v-hover>

              <!-- <div
                class="green--text subtitle-1 mt-5"
                v-show="validVisible"
                v-if="picture.length < 5048487"
              >
                <p class="mt-3">
                  <v-icon class="mx-2" small color="green"
                    >mdi-check-circle</v-icon
                  >Success!
                </p>
              </div>

              <div
                class="error--text subtitle-1 mt-10"
                v-show="validVisible"
                v-else
              >
                <p class="mt-3">
                  <v-icon class="mx-2" small color="red"
                    >mdi-close-circle</v-icon
                  >Image size should be less than 1 MB!
                </p>
              </div> -->

              <v-spacer></v-spacer>


              <filter-type
                :picture="picture"
                @filterSelected="filterSelected"
              ></filter-type>


              <!-- <v-card height="100"></v-card> -->
            </v-stepper-content>

            <!-- step2 -->

            <v-stepper-content step="2" class="ma-0 pa-0" style="height:100%;">
              <v-app-bar
                color="white black--text"
                flat
                dark
                class="ma-0 px-0 d-sm-none d-block"
              >
                <v-icon color="black" @click="e1 = 1">mdi-chevron-left</v-icon>

                <v-spacer></v-spacer>
                <span class="font-weight-bold">Profile Setting</span>
                <v-spacer></v-spacer>
                <span
                  class="success--text"
                  style="cursor:pointer"
                  @click="e1 = 3"
                  >Next</span
                >
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
                        >{{ value }} %</v-progress-linear
                      >

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
                  v-if="imgUrl.length < 1048487"
                >
                  <p class="mt-12">
                    <v-icon class="mx-2" small color="green"
                      >mdi-check-circle</v-icon
                    >Success!
                  </p>
                </div>

                <div class="error--text subtitle-1" v-show="avatarvalid" v-else>
                  <p class="mt-12">
                    <v-icon class="mx-2" small color="red"
                      >mdi-close-circle</v-icon
                    >Image size should be less than 1 MB!
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
              <v-card height="500"></v-card>
            </v-stepper-content>

            <!--  step 3 -->

            <v-stepper-content class="ma-0 pa-0" step="3">
              <v-app-bar
                color="white black--text"
                flat
                dark
                class="d-sm-none d-block"
              >
                <v-icon color="black" @click="e1 = 2">mdi-chevron-left</v-icon>

                <v-spacer></v-spacer>
                <span class="font-weight-bold">New post</span>
                <v-spacer></v-spacer>
                <v-btn
                  text
                  class="white font-weight-bold success--text"
                  @click="submit()"
                  :loading="loading"
                  >Share</v-btn
                >
              </v-app-bar>
              <v-divider></v-divider>

              <v-row class="mt-4">
                <v-col cols="4" md="1">
                  <v-img
                    width="150"
                    @click="PostFile"
                    height="140"
                    :class="filter"
                    class="ml-3"
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
                        >{{ postvalue }} %</v-progress-linear
                      >
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
                class="ml-3"
                solo
                style="height:50px;"
                flat
                label="Tag"
                v-model="title"
                prepend-icon="#"
              ></v-text-field>
              <v-divider></v-divider>
              <div style="height:95px;">
                <p class="ml-5 mt-7">Post to Other accounts</p>
                <v-avatar size="30" class="my-2 ml-4">
                  <img :src="imgUrl" alt />
                </v-avatar>
                <span class="font-weight-bold subtitle-2 ml-3">{{
                  person
                }}</span>
              </div>

              <v-card height="500"></v-card>
            </v-stepper-content>

            <v-stepper-content step="4"></v-stepper-content>
          </v-form>
        </v-stepper-items>
      </v-stepper>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { db } from "../db";
import firebase from "firebase";
import FilterType from "./FilterType";
import EventBus from "../event-bus";

// import firebase from "firebase";

export default {
  props: {
    selectedFilter: Function,
    filterArray: Array
  },
  components: {
    FilterType
  },
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
      myDate: new Date(),
      realtimeDate: "",
      filerules: [
        v => v.length <= 1048487 || "Avatar size should be less than 2 MB!"
      ],
      imageData: null,
      picture: "",
      uploadValue: 0,
      bigsizeUpload: false,
      indeterminate: false,
      filter: null,
      showprogress: false,
      picturevalue: 0,
      replacepicture:"",
      replacepictureimage:null,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    filterSelected(filtertype) {
      this.filter = filtertype.filter;
    },
    moment: function(date) {
      return moment(date);
    },
    previewImage(event) {
      this.showprogress = true;
      this.interval = setInterval(() => {
        if (this.picturevalue === 100) {
          // this.postVisible = false;
          // this.validVisible=true;
          this.showprogress = false;
        }
        this.picturevalue += 10;
      }, 140);
      this.picturevalue = 0;
      

      this.imageData = event.target.files[0];
      // this.postVisible = true;

      // this.picture = null;
      

      // const bgfiles = event.target.files;
      // const replaceimageData = event.target.files;
      // let filename = replaceimageData[0].name;
      // const picturefileReader = new FileReader();
      // picturefileReader.addEventListener("load", () => {
      //   this.replacepicture = picturefileReader.result;
      // });
      // picturefileReader.readAsDataURL(replaceimageData[0]);
      // this.replacepictureimage = replaceimageData[0];

      // bgfileReader.readAsDataURL(bgfiles[0]);
      // this.postimage = bgfiles[0];

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

          // this.bigsizeUpload = false;

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
      this.bigsizeUpload = true;
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
          realtimeDate: this.realtimeDate,
          // due: format(parseISO(this.due), "MMM d yyyy"),
          person: this.person,
          p: this.picture,
          filter:this.filter,
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
