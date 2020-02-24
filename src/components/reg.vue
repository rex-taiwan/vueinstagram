<template>
  <div>
    <h1>Reg</h1>
    <v-form ref="form">
      <v-text-field label="Email" v-model="email" required></v-text-field>

      <v-text-field label="Password" v-model="password" required></v-text-field>

      <v-btn @click="register()" color="black" dark class="mr-4">
        Register
      </v-btn>
    </v-form>
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
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          data => {
            console.log(data.user.email);
            this.$router.go({ path: this.$router.path });
          },
          error => {
            alert(error.message);
          },
        );
    },
  },
};
</script>
