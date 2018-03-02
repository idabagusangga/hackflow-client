<template lang="html">
  <div id="searchBar">
    <v-layout row>
    <v-flex xs12>
      <v-text-field
        name="input-10-2"
        label="Click Me to Search Questions"
        min="8"
        :type="e3 ? 'password' : 'text'"
        v-model="search"
      ></v-text-field>
    </v-flex>
  </v-layout>
  </div>

</template>

<script>
export default {
  data () {
    return {
      e3: false,
      search: ''
    }
  }
}
</script>

<style lang="css">
#searchBar {
  margin-left: 18px;
}
</style>
