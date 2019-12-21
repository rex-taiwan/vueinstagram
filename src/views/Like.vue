<template>
    <div>
        <div
    
    class="mx-auto"
  >
     <v-app-bar
      color="grey lighten-5"
      app flat
    >
      

      

      <v-spacer></v-spacer>
   <span class="black--text font-weight-medium">Activity</span> 
      <v-spacer></v-spacer>

     

      
    </v-app-bar>
     <v-list two-line subheader class="drageffect mb-12">
      

      <v-list-item
      
      >
        <v-list-item-avatar class="white" >
          <v-icon class="avatarborder" >mdi-chart-line-variant</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title >Promotions</v-list-item-title>
          <v-list-item-subtitle>Recent activity from your promotions</v-list-item-subtitle>
        </v-list-item-content>

       
      </v-list-item>

      <v-divider inset></v-divider>

      <p class="font-weight-bold mx-4 mt-4">Yesterday</p>

      <v-list-item
        v-for="item in items2"
        :key="item.title"
       
      >
        <v-list-item-avatar>
          <img :src="item.image" alt="">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn text small class="success">
           Follow
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-list two-line subheader>
      <p class="font-weight-bold mx-4 mt-4">This Month</p>

      <v-list-item
        v-for="item in items"
        :key="item.title"
      
      >
        <v-list-item-avatar>
           <img :src="item.image" alt="">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn text small class="success">
           Follow
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-subheader inset>This month</v-subheader>

      <v-list-item
        v-for="item in items2"
        :key="item.title"
       
      >
        <v-list-item-avatar>
          <img :src="item.image" alt="">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn text small class="success">
           Follow
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </div>
    </div>
</template>


<script>
  export default {
    data: () => ({
      items: [
        { image: 'https://images.unsplash.com/photo-1576280314550-773c50583407?ixlib=rb-1.2.1&auto=format&fit=crop&w=2792&q=80', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
        { image: 'https://images.unsplash.com/photo-1468817967762-7af5be2aacf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
        { image: 'https://images.unsplash.com/photo-1485921040253-3601b55d50aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' },
      ],
      items2: [
        { image: 'https://images.unsplash.com/photo-1527047614336-194da60dacd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
        { image: 'https://images.unsplash.com/photo-1505262933601-3e5deed74427?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
      ],
    }),
  }
</script>


<style>

.avatarborder {
  border:1px solid #898989;
 
}


.drageffect {
  margin-top:-50px;
  animation: drageffect 0.4s;
}

@keyframes drageffect {
  0%{
margin-top:60px;
  }
  100%{
margin-top:-50px;
  }

}


</style>