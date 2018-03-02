<template lang="html">
  <div class=""  id="talkbubble">

  <div class="loginArea">

    <v-container fluid>
      <div id="headerCss" class="border-info">
                  <h3>Login</h3>
      </div>

    <v-layout row>
    <v-flex xs8>
      <v-text-field
        name="input-10-2"
        label="Enter your username"
        min="8"
        :type="e3 ? 'password' : 'text'"
        v-model="username"
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
    <h6>Dont have an account?<a href="#"> Register</a></h6>

  <button type="button" class="btn btn-outline-secondary">Login</button>
  <button type="button" class="btn btn-outline-info">Facebook</button>



    
    
      </v-container>
      </div>

  </div>

</template>

<script>
export default {
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
   margin-left: 100px;
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
  background-color: #62466B;
}

</style>
