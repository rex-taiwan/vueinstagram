<template>
  <nav>
    <v-app-bar height="55" flat app color="#222222" dark>
      <!-- <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      <v-icon v-if="isLoggedIn" class="white--text d-block"
        >mdi-camera-outline</v-icon
      >
      <v-spacer></v-spacer>
      <li v-if="isLoggedIn">
        <a>
          <router-link to="/">
            <span class="font-weight-bold white--text ml-12"> STAYGETHER</span>
          </router-link>
        </a>
      </li>

      <v-spacer></v-spacer>

      <li v-if="isLoggedIn">
        <a>
          <router-link to="/team">
            <v-btn text class="d-sm-none d-block">
              <v-badge overlap color="red">
                <template v-slot:badge>2</template>
                <v-icon size="25" color="white">mdi-telegram</v-icon>
              </v-badge>
            </v-btn>
          </router-link>
        </a>
      </li>

      <!-- setting -->
      <li v-if="isLoggedIn">
        <a>
          <v-menu
            v-model="usermenu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-btn color="white" text v-on="on" class="d-none d-sm-block">
                <v-icon>mdi-home</v-icon>
                <v-avatar
                  size="5"
                  class="mt-6 red"
                  style="bottom:-5px;left:-15px;"
                ></v-avatar>
              </v-btn>
            </template>

            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="caption font-weight-bold">
                      <span class="font-weight-bold ">{{
                        currentUser
                      }}</span></v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="caption font-weight-bold">
                      <v-btn
                        @click="logout"
                        dark
                        class="d-none d-sm-block black"
                      >
                        Log Out
                      </v-btn></v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </a>
      </li>

      <!-- <li v-if="!isLoggedIn">
        <a>
          <router-link to="/login">
            <v-btn text class="d-none d-sm-block"> Login </v-btn>
          </router-link>
        </a>
      </li>

      <li v-if="!isLoggedIn">
        <a>
          <router-link to="/reg">
            <v-btn text class="d-none d-sm-block"> Register </v-btn>
          </router-link>
        </a>
      </li> -->

      <li v-if="isLoggedIn">
        <a>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-btn color="white" text v-on="on" class="d-none d-sm-block">
                <v-icon>mdi-heart-outline</v-icon>
                <v-avatar
                  size="5"
                  class="mt-6 red"
                  style="bottom:-5px;left:-15px;"
                ></v-avatar>
              </v-btn>
            </template>

            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John"
                    />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="caption font-weight-bold"
                      >Luia</v-list-item-title
                    >
                    <v-list-item-subtitle>
                      Start to follow you
                      <span class="caption grey--text">1 days ago</span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item>
                  <v-list-item-avatar>
                    <img
                      src="https://images.unsplash.com/photo-1489980721706-f487dab89c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80"
                      alt="John"
                    />
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title class="caption font-weight-bold"
                      >John Leider</v-list-item-title
                    >
                    <v-list-item-subtitle>
                      Start to follow you
                      <span class="caption grey--text">1 days ago</span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </a>
      </li>

      <li v-if="isLoggedIn">
        <a>
          <router-link to="/project">
            <v-btn text class="d-none d-sm-block">
              <v-icon color="white" class="ml-1">mdi-account-outline</v-icon>
            </v-btn>
          </router-link>
        </a>
      </li>
    </v-app-bar>
  </nav>
</template>

<script>
import firebase from 'firebase';
require('firebase/auth');
export default {
  data() {
    return {
      isLoggedIn: false,
      currentUser: '',
      drawer: false,
      links: [
        // { icon: 'mdi-home', text: 'Posts', route: '/' },
        { icon: 'mdi-compass-outline', text: 'Sign Out', route: '/' },
        { icon: 'mdi-heart-outline', text: 'Team', route: '/team' },
        { icon: 'mdi-account-outline', text: 'My activity', route: '/project' },
      ],
      snackbar: false,
      cookiesnackbar: true,
      fav: true,
      modalUrl: './successpost.svg',
      toplogo: './toplogo.png',
      menu: false,
      usermenu: false,
      message: false,
      hints: true,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    },
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
};

//advanced navbar setting
//   <!-- <v-card class="overflow-hidden">
//     <v-app-bar
//       absolute
//       color="white"
//       scroll-target="#scrolling-techniques-7"
//     >
//       <v-app-bar-nav-icon></v-app-bar-nav-icon>

//       <v-toolbar-title>Title</v-toolbar-title>

//       <v-spacer></v-spacer>

//       <v-btn icon>
//         <v-icon>mdi-magnify</v-icon>
//       </v-btn>

//       <v-btn icon>
//         <v-icon>mdi-heart</v-icon>
//       </v-btn>

//       <v-btn icon>
//         <v-icon>mdi-dots-vertical</v-icon>
//       </v-btn>
//     </v-app-bar>
//     <v-sheet
//       id="scrolling-techniques-7"
//       class="overflow-y-auto"
//       max-height="600"
//     >
//       <v-container style="height: 2500px;">

//       </v-container>
//     </v-sheet>
//   </v-card> -->
</script>

<style>
li a {
  text-decoration: none !important;
}

li {
  list-style: none;
}
</style>
