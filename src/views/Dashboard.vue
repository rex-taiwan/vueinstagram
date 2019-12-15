<template>
    <div class="home">
     <h1 class="subtitle-1 grey--text">Dashboard</h1> 
    <v-container class="my-5">
    <v-row>
        <v-col xs="12" md="6">
            <v-btn block color="purple" outlined>BIg Col</v-btn>
        </v-col>

        <v-col>
            <v-btn xs="4" md="2" block color="purple" outlined>Col</v-btn>
        </v-col>

        <v-col>
            <v-btn xs="4" md="2" block color="purple" outlined>Col</v-btn>
        </v-col>

        <v-col>
            <v-btn xs="4" md="2" block color="purple" outlined>Col</v-btn>
        </v-col>
        
    </v-row>

<!-- 舊式寫法 -->
    <!-- <v-layout row wrap justify-center>
        <v-flex  xs4 md3>
            <v-btn block tile outlined>CLick</v-btn>
        </v-flex>
          <v-flex xs4 md3>
            <v-btn block outlined>CLick</v-btn>
        </v-flex>
    </v-layout> -->

<!-- ｐ後面加a就代表是全部directions都加有加上 -->
<!-- tile 的意思就是沒有radius -->
   
    </v-container>  
    <v-container class="my-5">

    

<v-tooltip top>
<template v-slot:activator="{ on }">

<v-btn small text color="gray" @click="sortBy('title')"  v-on="on">
<v-icon left small>mdi-folder</v-icon>
<span class="caption text--lowercase">By project name</span>
</v-btn>


</template>
<span>Sorts projects by name</span>
</v-tooltip>


       

         <v-btn small text color="gray" @click="sortBy('person')">
            <v-icon left small>mdi-account</v-icon>
            <span class="caption text--lowercase">By person</span>
        </v-btn>

         <v-btn small text color="gray" @click="sortBy('due')">
            <v-icon left small>mdi-timelapse</v-icon>
            
            <span class="caption text--lowercase">By Time</span>
        </v-btn>
        
    <v-row class="mb-3" >

    </v-row>

    <v-card flat v-for="project in projects" :key="project.person">
        <v-row :class="`${project.status}`">
            <v-col cols="12" md="6">
            <p class="caption grey--text"> <v-icon>mdi-view-dashboard</v-icon>  Project title</p>
            <p class="subtitle-1">{{project.title}}</p>
            </v-col>

            <v-col cols="4" sm="4" md="2">
            <p class="caption grey--text">Person</p>
            <p class="subtitle-1">{{project.person}}</p>
            </v-col>

             <v-col cols="4" sm="4" md="2">
            <p class="caption grey--text">Due by</p>
            <p class="subtitle-1">{{project.due}}</p>
            </v-col>

             <v-col cols="4" sm="4" md="2">
            <div class="right">
            <v-chip small :color="`${project.status}`" :class="`v-chip--active white--text caption my-2`">{{project.status}}</v-chip>
                
            </div>
            </v-col>
            <v-divider></v-divider>


        </v-row>
    </v-card>
    </v-container> 
    </div>
</template>

<script>
export default {
    data() {
        return {
        projects:[

        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th June 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Rrcgo', due: '20th Oct 2016', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
            
            ]
        }
    },
    methods: {
        sortBy(prop)
        {
         const vm=this;
         vm.projects.sort((a,b)=>a[prop]<b[prop]? -1:1)
        }

        //1 就是rearrange array

        //? true 的時候進去下個動作
        //: false 的時候進去下個動作 也等於else
    },
}
</script>

<style>

.complete { 
border-left:4px solid #3cd1c2;
}

.ongoing { 
border-left:4px solid #ff9100;
}

.overdue { 
border-left:4px solid #d1413c;
}

.v-chip.complete{
background:#3cd1c2;
}

.v-chip.ongoing{
background:#ff9100;
}

.v-chip.overdue {
    background:#d1413c;
}

.theme--light.v-chip:not(.v-chip--active) {
    background: #2600ff;
}
</style>