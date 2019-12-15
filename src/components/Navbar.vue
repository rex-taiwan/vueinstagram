<template>
   <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
    <span>Awesome! You added a new project.</span>
    <v-btn text color="white" @click="snackbar=false">Close</v-btn>
    </v-snackbar>

    <v-app-bar flat app>
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
        
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>

        </v-toolbar-title>
        <v-spacer></v-spacer>


    <v-menu offset-y>

    <template v-slot:activator="{ on }">
        <v-btn text v-on="on" color="grey--text">
            <v-icon left>mdi-chevron-down</v-icon>
            <span>Menu</span>
        </v-btn>
    </template>


    <v-list>
        <v-list-item
          v-for="(link) in links"
          :key="link.text"
          :to="link.route">
        <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
    </v-list>


    </v-menu>

        <v-btn text color>
            <span>Sign out</span>
            <v-icon right>mdi-exit_to_app</v-icon>
        </v-btn>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
    
    <v-row class="d-flex justify-center">
    <div class="mt-5">
     <v-avatar size="100">
    <img src="/avatar-1.png">
    </v-avatar>
    <p class="white--text subheading mt-1">
        The net Ninja
    </p>
    </div>

    <v-col class="d-flex justify-center my-4">
     <popup @projectAdded="snackbar=true"/>
    </v-col>

    </v-row>

    
    


    <v-list>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
</v-list>
   
    </v-navigation-drawer>
<!-- app就是讓他fixtop不會掉下 -->
       
   </nav>
</template>

<script>
import Popup from './Popup'


export default {
    components:{
    Popup
    },
    data() {
        return {
            drawer:false,
            links:[
                  { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/' },
                  { icon: 'mdi-folder', text: 'My Projects', route: '/project' },
                  { icon: 'mdi-account', text: 'Team', route: '/team' },
            ],
            snackbar:false,
        }
    },
}

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




