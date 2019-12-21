<template>
   
   <nav>
    
    <!-- <v-snackbar v-model="snackbar" :timeout="6000" top color="success">
    <span>Awesome! You just added a new post.</span>
    <v-btn text color="white" @click="snackbar=false">Close</v-btn>
    </v-snackbar> -->

    <v-snackbar  color="black"
      v-model="cookiesnackbar" timeout="1000"
    >
      We use cookies to personalise content and ads,
      
      
      <v-btn
        color="white"
        text
        @click="cookiesnackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>

    
<v-app-bar style="position:fixed;bottom:0;z-index:5;"
      color="grey lighten-5" class="d-sm-none d-block"
      bottom height="84"
    >
      <v-row>
      <v-col cols="2" class="mb-4">
        <li><a>
           <router-link to="/" >
           <v-btn text>
            <v-icon color="black">mdi-home</v-icon>
            </v-btn> 
         
          </router-link></a></li>
       
          
        </v-col>

         <v-col cols="2" class="mb-4">
     <li>
       <a>
          <router-link to="/" >
           <v-btn text>
            <v-icon color="black">mdi-magnify</v-icon>
            </v-btn> 
         
          </router-link>
       </a>
     </li>
         
          
      
        </v-col>
       
     

        

         <v-col cols="4" class="mb-4">
      <v-btn text class="ml-1" color="white">
         
    
     <popup @projectAdded="snackbar=true"/>
    
      </v-btn> 
         </v-col>

        <v-col cols="2" class="mb-4">
          <li><a>
            <router-link to="/Like">
           <v-btn text>
            <v-icon color="black">mdi-heart-outline</v-icon>

            </v-btn> 
         
          </router-link></a></li>
                
          
        </v-col>

          <v-col cols="2" class="mb-4">
            <li>
              <a>
                  <router-link to="/Project" >
           <v-btn text>
            <v-avatar size="25">
              <img src="https://images.unsplash.com/photo-1485921040253-3601b55d50aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80" alt="">
            </v-avatar>
            </v-btn> 
         
          </router-link>
              </a>
            </li>
             
          
        </v-col>

        
     </v-row>
      
    </v-app-bar>


<v-app-bar flat app color="white">
        <!-- <v-app-bar-nav-icon class="black--text" @click="drawer = !drawer"></v-app-bar-nav-icon> -->
        <li>
          <a>
           <router-link to="/">
        <v-toolbar-title class="text-uppercase black--text d-sm-block d-none subtitle-2">
           <v-icon color=black class="mx-2">mdi-gesture</v-icon>Inclusive
        </v-toolbar-title>
         </router-link>
         </a></li> 



        <v-icon class="black--text d-sm-none d-block">mdi-camera-outline</v-icon>
        <v-spacer></v-spacer>
          <v-text-field
        append-icon="mdi-microphone" 
        class="d-sm-block d-none my-10 grey" style="max-width:250px;border-radius:2px;"
        flat solo
        hide-details
        placeholder="Search"
      
        prepend-inner-icon="mdi-magnify"
       
       
      ></v-text-field>
      <li>
          <a>
      <router-link to="/">
  <v-toolbar-title class="text-uppercase black--text d-sm-none d-block subtitle-1 ml-7" >
        
           <v-icon color=black class="mx-1">mdi-gesture</v-icon>Inclusive
       
        
        <!-- <span class="white--text"></span> -->

        </v-toolbar-title>
         </router-link>
        
          </a>
           </li>
     <!-- <img src="https://images.unsplash.com/photo-1489512827632-6e52aecf88bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" align-center justify-center height="35px"> -->
      <v-spacer></v-spacer>
<!-- 
 <v-menu offset-y>

    <template v-slot:activator="{ on }">
        <v-btn text v-on="on" class="d-md-block d-none">
            <v-icon class="white--text" left>mdi-chevron-down</v-icon>
            <span class="white--text">Menu</span>
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

</v-menu> -->
        <li><a>
         <router-link to="/team">
           <v-btn text class="d-sm-none d-block">
            <v-icon color="black" class="ml-2">mdi-telegram</v-icon>
            </v-btn> 
         
          </router-link></a></li>
         
          <li><a>
         <router-link to="/team">
           <v-btn text class="d-none d-sm-block">
            <v-icon color="black" class="ml-2">mdi-compass</v-icon>
            </v-btn> 
         
          </router-link></a></li>

           <li><a>
         
         
<v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="black"
          text
          v-on="on" class="d-none d-sm-block"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="caption font-weight-bold">Luia</v-list-item-title>
              <v-list-item-subtitle>Start to follow you <span class="caption grey--text">1 days ago</span>
             
              </v-list-item-subtitle>
          
            </v-list-item-content>

            
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://images.unsplash.com/photo-1489980721706-f487dab89c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80" alt="John">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="caption font-weight-bold">John Leider</v-list-item-title>
                    <v-list-item-subtitle>Start to follow you <span class="caption grey--text">1 days ago</span></v-list-item-subtitle>
            </v-list-item-content>

         
          </v-list-item>

          
        </v-list>
 

          <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://images.unsplash.com/photo-1576280314550-773c50583407?ixlib=rb-1.2.1&auto=format&fit=crop&w=2792&q=80" alt="John">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="caption font-weight-bold">KAl Viusal</v-list-item-title>
                    <v-list-item-subtitle>Start to follow you <span class="caption grey--text">1 days ago</span></v-list-item-subtitle>
            </v-list-item-content>

         
          </v-list-item>

          
        </v-list>

       


        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="https://images.unsplash.com/photo-1489913590284-9269438bb411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExNjMwfQ&auto=format&fit=crop&w=934&q=80" alt="John">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="caption font-weight-bold">Jakob Owens</v-list-item-title>
                    <v-list-item-subtitle>Start to follow you <span class="caption grey--text">1 days ago</span></v-list-item-subtitle>
            </v-list-item-content>

         
          </v-list-item>

          
        </v-list>

       
       
      </v-card>
</v-menu>
</a></li>
<li>
  <a>
<router-link to="/project">
           <v-btn text class="d-none d-sm-block" >
            <v-icon color="black" class="ml-2">mdi-account</v-icon>
            </v-btn> 
         
          </router-link></a></li>
        

   
</v-app-bar>




<!-- <v-navigation-drawer v-model="drawer" app color="#212121">
    
    <v-row class="d-flex justify-center">
   
    
     
       <v-hover>
         <template v-slot:default="{ hover }">
    <div  style="cursor:pointer"
    
      color="grey lighten-4">
      
        
               <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="grey darken-4"
          >
          <div class="subtitle-2 ml-5 text-uppercase font-weight-light white--text">Cheng Lei</div>
            <v-btn text>
         <v-icon class="mx-1">mdi-square-edit-outline</v-icon>Edit Profile
  
            </v-btn>
          </v-overlay>
        </v-fade-transition>
     <img  width="300" src="https://images.unsplash.com/photo-1534481909716-9a482087f27d?ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80" alt="">
      
    </div>
         </template>
  </v-hover>
   
   
    
    


    </v-row>


   
   
</v-navigation-drawer> -->
<!-- app就是讓他fixtop不會掉下 -->
     
   </nav>
</template>

<script>
import Popup from './Popup'




export default {
    components:{
    Popup,
   
    
   
    },
    data() {
        return {
            drawer:false,
            links:[
                  // { icon: 'mdi-home', text: 'Posts', route: '/' },
                  { icon: 'mdi-compass-outline', text: 'Sign Out', route: '/' },
                  { icon: 'mdi-heart-outline', text: 'Team', route: '/team' },
                  { icon: 'mdi-account-outline', text: 'My activity', route: '/project' },
            ],
            snackbar:true,
            cookiesnackbar:true,
            fav: true,
      menu: false,
      message: false,
      hints: true,
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


<style>
li a {
    text-decoration: none!important;
}

li {
  list-style:none;
}



</style>



