<template>
  <div style="background:#222222">
    <v-card
      class="mx-auto "
      style="background:#222222;margin-top:150px;"
      max-width="500"
      flat
    >
      <h1 class="ml-5 my-10 display-1 font-weight-bold" style="color:white">
        LOGIN
      </h1>
      <v-form ref="form">
        <v-text-field
          class="mx-5 my-5"
          label="Email"
          v-model="email"
          filled
          required
          dark
        ></v-text-field>

        <v-text-field
          class="mx-5 mb-10"
          label="Password"
          v-model="password"
          required
          filled
          dark
        ></v-text-field>

        <v-btn class="ml-5" @click="login()" color="grey darken-3" dark>
          Login
        </v-btn>

        <li class="d-inline-block">
          <a>
            <router-link to="/reg">
              <span class="ml-5 blue--text" color="blue" dark>
                Don't have account?
              </span>
            </router-link>
          </a>
        </li>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import firebase from 'firebase';
require('firebase/auth');

console.log(firebase); // Function
export default {
  data: () => ({
    email: '',
    password: '',
  }),

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          data => {
            console.log(data.user.email);
            this.$router.go({ path: '/home' });
            console.log(this.$router.path);
          },
          error => {
            alert(error.message);
          },
        );
    },
  },
};
</script>
