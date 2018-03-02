<template lang="html">
  <div class="">
      <p><router-link :to="{name:'QuestionLists'}" class="list-group-item list-group-item-action" @click="resetActiveQuestion"> <<< Back to Question</router-link></p> 
    <h1>Question</h1>
    <BubbleQuestion :question="id"></BubbleQuestion>
    <h1>Answers</h1>
    <AnswerBubbles v-for="a in answers" :key="a._id" :ans="a"></AnswerBubbles>
  </div>
  
</template>

<script>
import BubbleQuestion from '@/components/BubbleQuestion'
import AnswerBubbles from '@/components/AnswerBubbles'
export default {
  props: ['id'],
  components: {
    BubbleQuestion: BubbleQuestion,
    AnswerBubbles: AnswerBubbles
  },
  methods: {
    findAllAnswers () {
      this.$store.dispatch('getAllAnswers', this.id)
    },
    resetActiveQuestion () {
      this.$store.commit('SET_ACTIVE_QUESTION', null)
    }
  },
  created () {
    this.findAllAnswers()
  },
  computed: {
    answers () {
      return this.$store.state.answers
    }
  }
}
</script>

<style lang="css">
</style>
