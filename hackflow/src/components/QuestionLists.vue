<template lang="html">
  <div>
    <RouterLinks v-for="q in allQuestions" :key="q._id" :question="q"></RouterLinks>
  </div>    

  
</template>

<script>
import RouterLinks from '@/components/RouterLinks'
export default {
  components: {
    RouterLinks: RouterLinks
  },
  data () {
    return {
    }
  },
  computed: {
    allQuestions () {
      return this.$store.state.questions
    }
  },
  methods: {
    getQuestions () {
      this.$store.dispatch('getAllQuestions')
    }
  },
  created () {
    this.getQuestions()
  }
}
</script>

<style lang="css">
#routerLink {
  background-color: #2F2F2F;

  
}
</style>
