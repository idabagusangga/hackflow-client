<template lang="html">
  <div class=""  id="talkbubble" v-if="!loginState">

  <div class="loginArea" >

    <v-container fluid>
      <div id="headerCss" class="border-info">
      <h3>{{registerMsg}}</h3>
                  <h3>Login</h3>
      </div>

    <v-layout row>
    <v-flex xs8>
      <v-text-field
        name="input-10-2"
        label="Enter your email"
        min="8"
        :type="e3 ? 'password' : 'text'"
        v-model="email"
      ></v-text-field>
    </v-flex>
  </v-layout>
  <v-layout row>

    <v-flex xs8>
      <v-text-field
        name="input-10-2"
        label="Enter your password"
        hint="At least 8 characters"
        min="8"
        :type="e4 ? 'password' : 'text'"
        v-model="passwordUser"
      ></v-text-field>
    </v-flex>


    </v-layout>
    <h6>Dont have an account?<a @click="register" style="cursor:pointer;"> Register</a></h6>

  <button type="button" class="btn btn-outline-secondary" @click="loginButton">Login</button>
  <button type="button" class="btn btn-outline-info">Facebook</button>





      </v-container>
      </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      email: '',
      passwordUser: '',
      e3: false,
      e4: true
    }
  },
  methods: {
    loginButton () {
      this.$store.dispatch('login', {email: this.email, password: this.passwordUser})
    },
    register () {
      this.$store.dispatch('register', {email: this.email, password: this.passwordUser})
      this.email = ''
      this.passwordUser = ''
    }
  },
  computed: {
    loginState () {
      return this.$store.state.isLoggedIn
    },
    registerMsg () {
      return this.$store.state.registermsg
    }
  }
}
</script>

<style lang="css">
.loginArea {
  margin-left: 15px;
  background-color:
}
#talkbubble {
   width: 450px;
   height: 270px;
   background: #2F2F2F;
   margin-left: 30px;
   position: relative;
   -moz-border-radius:    10px;
   -webkit-border-radius: 10px;
   border-radius:         10px;
}
#talkbubble:before {
   content:"";
   position: absolute;
   right: 100%;
   top: 26px;
   width: 0;
   height: 0;
   border-top: 13px solid transparent;
   border-right: 26px solid #2F2F2F;
   border-bottom: 13px solid transparent;
}
#headerCss{
  background-color: #424874;
}

</style>
