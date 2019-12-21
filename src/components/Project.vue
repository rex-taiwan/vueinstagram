<template>
    <div class="home">

   


    <v-container class="my-5" style="max-width:800px;">
        <div class="mx-2" v-for="project in myProjects.slice(0, 1)" :key="project.title">
        <div color="grey lighten-5">
      <v-avatar size="120" class="d-sm-block d-none">
            <v-img :src="project.imgUrl"></v-img>
          </v-avatar>
          <v-avatar size="60" class="d-block d-sm-none">
            <v-img :src="project.imgUrl"></v-img>
          </v-avatar>
          
         
            <p class="font-weight-bold subtitle-1 mt-8" >{{project.person}}</p>
             <v-row>
                  
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
                <v-img  style="border:0.8px solid white;"
                  :src="project.postUrl"
                  aspect-ratio="1"
                >
                </v-img>
            
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
             projects:[]
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
        db.collection('projects').onSnapshot(res=>{
            const changes=res.docChanges();
            changes.forEach(change=>{
                if(change.type=='added'){
                    this.projects.push({
                        ...change.doc.data(),
                        id:change.doc.id
                    })
                }
            })
        })
    },
}
</script>
