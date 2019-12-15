<template>
  <div class="text-center">
    <v-dialog  width="500" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Project</v-btn>
      </template>
      
      <v-card :loading="loading">
        <v-card-title class="headline grey lighten-2" primary-title>Add a New Project</v-card-title>
        
         <v-card-text>
            <v-form class="px-3" ref="form">
            <v-text-field label="title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
            <v-textarea label="information" v-model="content" prepend-icon="mdi-folder-edit" :rules="inputRules"></v-textarea>

            <v-menu max-width="290">
            <template v-slot:activator="{ on }">
            <v-text-field :rules="inputRules" :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="due"></v-date-picker>
            </v-menu>

            <v-spacer></v-spacer>
            <v-card-actions>
             <v-btn text class="success mx-0 mt-3" @click="submit()" :loading="loading">Add project</v-btn>
            </v-card-actions>
           
             </v-form>
         </v-card-text>
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
            title:'',
            content:'',
            due:null,
            inputRules:[
              v=> v.length >=3|| 'Min length is 3 character'
            ],
            loading:false,
            dialog:false,
        }
    },
    methods: {
      // eslint-disable-next-line no-console
      submit(){
        if(this.$refs.form.validate()){
        this.loading=true;
        const project={
          title:this.title,
          content:this.content,
          due: format(parseISO(this.due), 'Do MMM yyyy'),
          person:'The Net Ninja',
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
           return this.due ? format(parseISO(this.due), 'Do MMM yyyy') : '';
        }
    },
}
</script>