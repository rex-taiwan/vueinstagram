<template>
  <div class="text-center">
    <v-dialog  fullscreen  transition="dialog-bottom-transition"  v-model="dialog">
      <template v-slot:activator="{on}">
      
      <v-btn text color="white" v-on="on"> <v-icon size="30" class="mx-1"  color="black" >mdi-plus-box-outline</v-icon></v-btn>
        
      </template>
      
      <v-card>
       
        <v-toolbar  flat color="black white--text">
      Post

    <v-spacer></v-spacer>
      
    
      <template>
       <v-icon class="white--text" @click="dialog=false">mdi-close</v-icon>
      </template>
      
</v-toolbar>
        <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        height="8"
        color="black"
      ></v-progress-linear> 

       <!-- <img  height="200" :src="modalUrl" alt="">    -->
         <v-card-text>
            <v-form  ref="form">
            <div class="d-flex justify-center mt-2" > 
               
<v-hover>
    <template v-slot:default="{ hover }">
      
        <v-avatar  @click="onPickFile"  size="120" class="white ma-2">

               <v-progress-linear  
      v-show="elementVisible"
      :size="200"
       height="30"
      color="black accent-4"
      :value="value"
      
      class="white--text"
    >
     {{value}} %
    </v-progress-linear>
  
    <img v-show="!elementVisible" :src="imgUrl">
              
      
               <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="black"
          >
            <v-btn>Upload Image 
              <v-icon>mdi-camera</v-icon>
            </v-btn>
          </v-overlay>
        </v-fade-transition>

   
           </v-avatar>
           
    </template>
</v-hover>
   <div class="green--text subtitle-1" v-show="avatarvalid" v-if="imgUrl.length<1048487"> 
   <p class="mt-12"><v-icon class="mx-2" small color="green">mdi-check-circle</v-icon> Success! </p>
</div>

  <div class="error--text subtitle-1" v-show="avatarvalid" v-else> 
    
    <p class="mt-12"><v-icon class="mx-2" small color="red">mdi-close-circle</v-icon> Image size should be less than 1 MB!</p>
  
</div>
      </div>
      
            
              <!-- <v-text-field
            class="mt-5" id="postUrl"
             v-model="postUrl"></v-text-field> -->
      <input type="file" style="display:none" ref="fileInput" accept="image/*" @change="onFilePicked">
      <input type="file" style="display:none"  ref="postInput" accept="image/*" @change="postPicked">
     
           
     
            <v-text-field
            class="mt-5"
            placeholder="Upload an avatar image"
            prepend-icon="mdi-image" v-show="false"
            id="imgUrl" :rules="filerules"
            label="Avatar" v-model="imgUrl"></v-text-field>
       

            

             <!-- <input type="file" @change="previewImage" accept="image/*" > -->

          
              <!-- <img  class="img-fluid" alt=""> -->
           
            
            <v-text-field label="Username" v-model="person" prepend-icon="mdi-account"  :rules="inputRules"></v-text-field>
            <v-text-field label="Tag" v-model="title" prepend-icon="#"></v-text-field>
            <v-textarea placeholder="Type some thoughts.."  v-model="content" prepend-icon=" mdi-content-copy" :rules="inputRules"></v-textarea>

            <v-menu max-width="290">
            <template v-slot:activator="{ on }">
            <v-text-field :rules="dateRules" :value="formattedDate" label="Publish Date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
         
         <v-hover>
    <template v-slot:default="{ hover }">
      
        

            
    <v-img width="200" @click="PostFile" v-if="validVisible" height="150" :src="postUrl" alt="">
              
       <div  v-if="postVisible" style="width:200px; height:150px;"> <v-progress-linear  
     
      :size="200"
       height="150"
      color="#191414"
      :value="postvalue"
      class="white--text"
    >
     {{postvalue}} %
    </v-progress-linear></div>

               <v-fade-transition>
          <v-overlay
            v-if="hover"
            absolute
            color="black"
          >
            <v-btn>Upload Image 
              <v-icon>mdi-camera</v-icon>
            </v-btn>
          </v-overlay>
        </v-fade-transition>

   </v-img>
          
           
    </template>
</v-hover>
            
     
    <div class="green--text subtitle-1" v-show="validVisible" v-if="postUrl.length<1048487"> 
   <p class="mt-3"><v-icon class="mx-2" small color="green">mdi-check-circle</v-icon> Success! </p>
</div>

  <div class="error--text subtitle-1" v-show="validVisible" v-else> 
    
    <p class="mt-3"><v-icon class="mx-2" small color="red">mdi-close-circle</v-icon> Image size should be less than 1 MB!</p>
  
</div>
      
            <v-card-actions>
               <!-- <v-text-field v-show="false" :rules="filerules"
            class="mt-5" id="postUrl"
             v-model="postUrl">
             </v-text-field> -->

          

             
              <v-btn text class="grey lighten-5"  @click="PostFile"><v-icon class="mx-1">mdi-image</v-icon>Image or video
              
              </v-btn>
              
              <v-spacer></v-spacer>
             <v-btn text  @click="submit()" :loading="loading">Publish</v-btn>
            </v-card-actions>
           
             </v-form>
         </v-card-text>
          <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        height="2"
        color="black"
      ></v-progress-linear> 
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';
import { db } from '../db';
// import firebase from "firebase";

export default {
    data() {
        return {
            person:'',
            title:'',
            content:'',
            due:null,
            imgUrl:'./avatar-6.png',
            modalUrl:'./modalbg.png',
            postUrl:'',
            inputRules:[
              v=> v.length >=3|| 'Min length is 4 character'
            ],
            dateRules:[
              v=> v.length >=3|| 'Please choose a date'
            ],
            validVisible:false,
            avatarvalid:false,
        //     rules: [
        // value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        //       ],
            loading:false,
            fileuploading:false,
            elementVisible: false,
            postVisible: false,
            dialog:false,
            image:null,
            postimage:null,
            interval: {},
            value: 0,
            snackbar:false,
            
            postvalue: 0,
            filerules: [
         v=> v.length <= 1048487 || 'Avatar size should be less than 2 MB!',
      ],
        }
    },
     beforeDestroy () {
      clearInterval(this.interval)
      
    },
    methods: {
      PostFile(){
      this.$refs.postInput.click()
     
      },
      onPickFile(){
      this.$refs.fileInput.click()
     
      },
      postPicked(event){
        
        this.interval = setInterval(() => {
        if (this.postvalue === 100) {
         this.postVisible = false
        }
        this.postvalue += 10
       
        
      }, 80)
        this.postvalue=0
        this.postVisible = true
        this.validVisible=true
        
        const bgfiles=event.target.files
        let filename=bgfiles[0].name
        
        if(filename.lastIndexOf('.')<=0){
         return alert('Please add a vaild file!');
        }
        const bgfileReader=new FileReader()
        bgfileReader.addEventListener('load',()=>{
        this.postUrl=bgfileReader.result
        
        })
        bgfileReader.readAsDataURL(bgfiles[0]);
        this.postimage=bgfiles[0]
        
      },
      onFilePicked(event){
        this.interval = setInterval(() => {
        if (this.value === 100) {
         this.elementVisible = false
       
        }
        this.value += 10
      }, 80)
        this.value=0
        this.elementVisible = true
        this.avatarvalid=true
        const files=event.target.files
        let filename=files[0].name
        
        if(filename.lastIndexOf('.')<=0){
         return alert('Please add a vaild file!');
        }
        const fileReader=new FileReader()
        fileReader.addEventListener('load',()=>{
        this.imgUrl=fileReader.result
        
        })
        fileReader.readAsDataURL(files[0]);
        this.image=files[0]
        
        
      },
      submit(){
        if(this.$refs.form.validate()){
        this.loading=true;

         
        const project={
          title:this.title,
          content:this.content,
          imgUrl:this.imgUrl,
          postUrl:this.postUrl,
          due: format(parseISO(this.due), 'MMM d yyyy'),
          person:this.person,
          status:'ongoing'
        }
          db.collection('projects').add(project).then(()=>{
            
            this.loading= false;
            this.dialog=false;
            this.$emit('projectAdded');
            
          })
        }
      }
    },
    
    computed: {
        formattedDate(){
           return this.due ? format(parseISO(this.due), 'MMM d yyyy') : '';
        }
    },
}
</script>

<style>
.fileactive {
  
  opacity:0.2;
}</style>