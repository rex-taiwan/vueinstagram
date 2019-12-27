<template>
    <div class="home">
<vue-ins-progress-bar></vue-ins-progress-bar>
   <v-app-bar  class="d-sm-none d-block"
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
        <v-badge
      overlap
      color="red"
    >
      <template v-slot:badge>
        4
      </template>
      <v-icon
         size=32
        color="grey darken-2"
      >
        mdi-menu
      </v-icon>
    </v-badge>
      </v-btn>

    </v-app-bar>

    

     


    <v-container class="drageffect mb-12" style="max-width:800px;">
       <div class="d-flex justify-center loadingeffect my-2" v-if="loading">
      <v-progress-circular
      indeterminate 
      color="grey lighten-1"
    ></v-progress-circular>
    
      </div>
     
     <v-row class="mt-10" v-if="loading">
        <v-col cols=12 md=2  v-for="number in numbers" :key="number">
          <v-skeleton-loader class="ml-8"
          :loading="loading"  v-show="loading"
          type="avatar">
        <v-card>
        </v-card>
    </v-skeleton-loader>
        </v-col>

        <v-col cols=12 md=9  v-for="number in numbers" :key="number">
          <v-skeleton-loader
          :loading="loading"  v-show="loading"
          type="list-item-three-line">
        <v-card>
           
        </v-card>
    </v-skeleton-loader>
        </v-col>
      </v-row>

      <v-row class="mt-10" v-if="loading">
        <v-col cols=4  v-for="number in imagegrid" :key="number">
          <v-skeleton-loader
          :loading="loading"  v-show="loading"
          type="image">
        <v-card>
           
        </v-card>
    </v-skeleton-loader>
        </v-col>
      </v-row>

      <div v-if="!loading" class="text-center subtitle-2 grey--text"><span class="font-weight-bold black--text">28</span> profile visits in the last 7 days</div>
        <div class="mx-2" v-for="project in myProjects.slice(0, 1)" :key="project.title">
        <div color="grey lighten-5">
        <v-row>
          <v-col cols=12 md=3>
              <v-avatar size="120" class="d-sm-block d-none">
            <v-img :src="project.imgUrl"></v-img>
          </v-avatar>
          <v-avatar size="60" class="d-block d-sm-none">
            <v-img :src="project.imgUrl"></v-img>
          </v-avatar>
          </v-col>
          <v-col cols=12 md=9>
            
             <p class="font-weight-bold subtitle-1" >{{project.person}} <v-btn small text class="ml-2 success"> <v-icon size="18" class="mx-1">mdi-account-plus</v-icon> Follow</v-btn></p>
              <p><v-icon small class="mx-1 black--text">mdi-map-marker</v-icon>Taiwan
              <v-icon small class="mx-1 black--text">mdi-earth</v-icon>https://rex-taiwan.github.io/vueinstagram/project</p>
              <p class=" subtitle-2" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur hic nulla harum mollitia voluptate aut aliquam. Et officiis, saepe dicta dolore esse suscipit laborum? Maxime saepe dolore laboriosam quam ipsa!</p>
          </v-col>
         
        </v-row>
    
          
           
             <v-row class="mt-3">
                  
                    <v-col md=2 cols=4>
                        <span class="font-weight-bold text-left">{{myProjects.length}}</span>  Post
                    </v-col>
                     <v-col md=3 cols=4>
                      <span class="font-weight-bold ">  1,349  </span>Followers
                    </v-col>
                     <v-col md=4 cols=4>
                       <span class="font-weight-bold ">  10,349 </span>Following 
                    </v-col>
                   
                </v-row>
               
          
         
       
      
    </div>
             
        </div>
           
          <v-row class="mt-8"  no-gutters>
            <v-col 
              v-for="project in myProjects" :key="project.title"
             
              cols="4"  md="4"
            >

            <v-dialog fullscreen
      v-model="dialog2323"  
    transition="slide-x-transition"
    >
    <v-app-bar 
      color="grey lighten-4 black--text"
   flat app  dark class="d-sm-none d-sm-block"
    >

    <li>
      <a>
         <router-link  to="/project">

                <v-icon color="black">mdi-chevron-left</v-icon>
            
         
          </router-link>
          
      </a>
    </li>
    
     

     

      <v-spacer></v-spacer>
      rex-taiwan <v-icon color="black">mdi-chevron-down</v-icon>
<v-spacer></v-spacer>
      

      

      

      
    </v-app-bar>
      <template v-slot:activator="{ on }">
        <v-img v-on="on" style="border:0.8px solid white;"
                  :src="project.p"
                  aspect-ratio="1"
                >
                </v-img>
            
      </template>
      
      

      <!-- mobile card -->
      <v-card class="d-sm-none d-block">

        <v-list-item>
      <v-list-item-avatar color="grey">
        <img :src="project.imgUrl">
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="subtitle-2 text-lowercase"> {{project.person}}</v-list-item-title>
        <!-- <v-list-item-subtitle> by {{project.person}} <span class="mx-2 caption grey--text">{{project.due}}</span></v-list-item-subtitle> -->
      </v-list-item-content>
            <v-spacer></v-spacer>
<v-menu offset-y>
      <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-dots-horizontal</v-icon>
      </template>
      <v-list>
        <v-list-item @click.prevent="deleteProjects(project.id)">
          <v-list-item-title> <v-icon>mdi-delete</v-icon> Delete</v-list-item-title>
         
        </v-list-item>
        <v-list-item>
        <v-list-item-title> <v-icon>mdi-share</v-icon> Report</v-list-item-title>
        </v-list-item>
        
      </v-list>
</v-menu>
    </v-list-item>
     
     <!-- //up is share and report  -->
     <v-list-item>
      <v-list-item-avatar color="grey">
        <img :src="project.imgUrl">
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="subtitle-2 text-lowercase"> {{project.person}}</v-list-item-title>
        <!-- <v-list-item-subtitle> by {{project.person}} <span class="mx-2 caption grey--text">{{project.due}}</span></v-list-item-subtitle> -->
      </v-list-item-content>
            <v-spacer></v-spacer>
<v-menu offset-y>
      <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-dots-horizontal</v-icon>
      </template>
      <v-list>
        <v-list-item @click.prevent="deleteProjects(project.id)">
          <v-list-item-title> <v-icon>mdi-delete</v-icon> Delete</v-list-item-title>
         
        </v-list-item>
        <v-list-item>
        <v-list-item-title> <v-icon>mdi-share</v-icon> Report</v-list-item-title>
        </v-list-item>
        
      </v-list>
</v-menu>
    </v-list-item>
    <v-img height="450"
     :src="project.p"
     
    ></v-img>
    <v-card-actions class="my-4">
      
       <v-icon class="grey--text mx-2">mdi-heart-outline</v-icon>
        
      
      
    
        <v-icon class="grey--text mx-3">mdi-message-outline</v-icon>
     

      
        <v-icon class="grey--text mx-4">mdi-send</v-icon>
       
      


      <!-- <v-btn icon @click.prevent="deleteProjects(project.id)">
        <v-icon>mdi-trash-can</v-icon>
      </v-btn> -->
    
    </v-card-actions>
       <p class="mx-3 mt-2">
   <span class="font-weight-bold black--text text-lowercase">
   {{project.person}}</span> 
 and
<span class="font-weight-bold black--text">
   millions of others</span>  like this post
</p>
    <p class="subtitle-1 font-weight-bold black--text mx-3 text-lowercase">
{{project.person}}
<span class="font-weight-regular">
<read-more  more-str="Read more" :text="project.content" link="#" less-str="Read less" :max-chars="120"></read-more></span>
<strong class="d-block font-weight-regular" style="color:#003569">#{{project.title}}</strong>


<span class="caption grey--text">{{project.due}}</span>
</p>
      </v-card>

 <!-- mobile card -->







      <div class="white d-none d-sm-block">
           <v-row no-gutters>
             <v-col cols=12 md=6>
                 <v-img style="height:800px;" :src="project.p">
                 </v-img>
             </v-col>
             <v-col cols=12 md=6>
              <v-card flat>
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
</v-toolbar> -->
        <v-list-item>
      <v-list-item-avatar color="grey">
        <img :src="project.imgUrl">
      </v-list-item-avatar>
   
      <v-list-item-content>
        <v-list-item-title class="subtitle-2 text-lowercase"> {{project.person}}</v-list-item-title>
        <!-- <v-list-item-subtitle> by {{project.person}} <span class="mx-2 caption grey--text">{{project.due}}</span></v-list-item-subtitle> -->
      </v-list-item-content>
            <v-spacer></v-spacer>
            
<v-menu offset-y>
      <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-dots-horizontal</v-icon>
      </template>
      <v-list>
        <v-list-item @click.prevent="deleteProjects(project.id)">
          <v-list-item-title> <v-icon>mdi-delete</v-icon> Delete</v-list-item-title>
         
        </v-list-item>
        <v-list-item>
        <v-list-item-title> <v-icon>mdi-share</v-icon> Report</v-list-item-title>
        </v-list-item>
        
      </v-list>
</v-menu>

    </v-list-item>

   
       <v-divider></v-divider>
      
    <p class="subtitle-1 font-weight-bold black--text mx-4 mt-5 text-lowercase">
<v-avatar size=40 class="mr-2 my-2"><img :src="project.imgUrl"></v-avatar> 
<span>{{project.person}} </span>
<span class="font-weight-regular subtitle-2">{{project.content}}</span>

<strong class="d-block font-weight-regular mt-12" style="color:#003569">#{{project.title}}</strong>


<span class="caption grey--text">{{project.due}}</span>
</p>
<v-divider></v-divider>

<v-card-actions class="my-4">
      
       <v-icon class="grey--text mx-2">mdi-heart-outline</v-icon>
        
      
      
    
        <v-icon class="grey--text mx-3">mdi-message-outline</v-icon>
     

      
        <v-icon class="grey--text mx-4">mdi-send</v-icon>
       
      


      <!-- <v-btn icon @click.prevent="deleteProjects(project.id)">
        <v-icon>mdi-trash-can</v-icon>
      </v-btn> -->
    
    </v-card-actions>
    <p class="mx-3 mt-2">
   <span class="font-weight-bold black--text text-lowercase">
  <v-avatar size=20><img :src="project.imgUrl"></v-avatar> {{project.person}}</span> 
 and
<span class="font-weight-bold black--text">
   millions of others</span>  like this post
</p>
      </v-card>
             </v-col>
           </v-row>
         
           
      </div>

      
</v-dialog>
                
            </v-col>
          </v-row>
  
    
    </v-container>   
    </div>
    
</template>

<script>
import { db } from '../db';
export default {
    data() {
        return {
             projects:[],
             loading:false,
             numbers:[1,],
            imagegrid:[1,2,3,4,5,6],
            dialog:false,
        }
    },
    computed: {
       
        myProjects(){
           
            return this.projects.filter(function(project){
                 return project.person=="rex-taiwan";
               
            })
            
        }
    },
    created() {
      this.loading=true
      this.$insProgress.start()
        db.collection('projects').onSnapshot(res=>{
            const changes=res.docChanges();
            
            changes.forEach(change=>{
                if(change.type=='added'){
                    this.projects.push({
                        ...change.doc.data(),
                        id:change.doc.id
                    })
                      this.loading=false
                      this.$insProgress.finish()
                }
            })
        })
    },
}
</script>


<style>

.loadingeffect {
  margin-top:40px;
  
}

.drageffect {
  margin-top:-15px;
  animation: drageffect 0.3s;
}

@keyframes drageffect {
  0%{
     opacity: 0;
margin-top:10px;
  }
  100%{
      opacity: 1;
margin-top:-15px;
  }

}




</style>