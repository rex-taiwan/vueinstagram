<template>
    <div class="home">
     <h1 class="subtitle-1 grey--text">Project</h1>
   


    <v-container class="my-5">

    <v-expansion-panels>
    <v-expansion-panel v-for="project in myProjects" :key="project.title">
      <v-expansion-panel-header>{{project.title}} <span class="ml-5 caption grey--text">Written by {{project.person}}</span></v-expansion-panel-header>
      <v-expansion-panel-content>
       <v-avatar class="grey lighten-2">
       <img :src="project.avatar">
       </v-avatar>
       <div class="my-2 grey--text font-weight-bold">due by {{project.due}}</div>
       <div>{{project.content}}</div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
    </v-container>   
    </div>
    
</template>

<script>
export default {
    data() {
        return {
             projects:[

        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',avatar:'/avatar-1.png'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',avatar:'/avatar-2.png'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',avatar:'/avatar-3.png'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th June 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',avatar:'/avatar-4.png'},
        { title: 'Create a community forum', person: 'Rrcgo', due: '20th Oct 2016', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',avatar:'/avatar-5.png'},
        { title: 'Again Design a new website again', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!',avatar:'/avatar-6.png'},
            
            ]
        }
    },
    computed: {
        // myProjects(){
        // return this.projects.filter(function(project){
        //     return project.person=='The Net Ninja'
        // })
        // },
        myProjects(){
            return this.projects.filter(function(project){
                 return project.person=="Chun Li";
            })
        }
    },
}
</script>
