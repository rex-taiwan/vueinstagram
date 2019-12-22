<template>
    <div>
         <v-app-bar 
      color="grey lighten-4 black--text"
   flat app  dark 
    >

    <li>
      <a >
         <router-link  to="/"  >

                <v-icon color="black">mdi-chevron-left</v-icon>
            
         
          </router-link>
          
      </a>
    </li>
    
     

     

      <v-spacer></v-spacer>
      rex-taiwan <v-icon color="black">mdi-chevron-down</v-icon>
<v-spacer></v-spacer>
      

      <v-btn icon>
        <v-icon color="black">mdi-video-outline</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon color="black">mdi-pencil-box-outline</v-icon>
          </v-btn>
        </template>

        
      </v-menu>
    </v-app-bar>

    
    <div 
  
    class="mx-auto drageffect"
  >
    
    <v-text-field
        append-icon="mdi-microphone"
        class="mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
      solo
      height="15"
      background-color="grey lighten-3"
        style="border-radius:4px;"
      ></v-text-field>


    <v-list subheader  class="grey lighten-5">
      <v-subheader>Recent chat</v-subheader>

      <v-list-item
        v-for="item in items"
        :key="item.title"
       
      >
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <p color="grey" class="font-weight-bold">2 new messages</p>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-camera-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list subheader class="grey lighten-5">
      <v-subheader>Previous chats</v-subheader>

      <v-list-item
        v-for="item in items2"
        :key="item.title"
       
      >
        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
              <p color="grey" class="font-weight-bold">5 new messages</p>
        </v-list-item-content>

         <v-list-item-icon>
          <v-icon>mdi-camera-outline</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        items: [
        { active: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        { active: true, title: 'Ranee Carlson', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
        { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
        { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
      ],
      items2: [
        { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg' },
         { title: 'SF Louis', avatar: 'https://images.unsplash.com/photo-1489512827632-6e52aecf88bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' },
          { title: 'Richard Ro', avatar: 'https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80' },
           { title: 'Steven Hsu', avatar: 'https://images.unsplash.com/photo-1489980721706-f487dab89c24?ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80' },
      ],
        }
    },
}
</script>


<style>
.page-link, .page-link:visited, .page-link:hover, .page-link:active, .page-link:focus 
{
  outline: unset;
  border: unset;
}   


</style>



<style>
li a {
    text-decoration: none!important;
}

li {
  list-style:none;
}



.drageffect {
  margin-top:-30px;
  animation: drageffect 0.3s;
}

@keyframes drageffect {
  0%{
      opacity: 0;
margin-top:5px;
  }
  100%{
      opacity: 1;
margin-top:-30px;
  }

}



</style>

