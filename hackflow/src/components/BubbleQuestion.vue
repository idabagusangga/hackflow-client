<template lang="html">
  
      <div class="row" id="voteGroup">
        <div class="col-md-3">
            <p class="upvote" style="cursor:pointer" @click="callUpvote(activeQuestion._id)"><i class="fas fa-chevron-up" @click="callUpvote" ></i></p>{{activeQuestion.points.length}}<br><p class="downvote" style="cursor:pointer" @click="callDownvote(activeQuestion._id)"><i class="fas fa-chevron-down" ></i></p>
        </div>
        <div class="col-md-6">
          <div class="card text-white bg-primary mb-3" style="width: 350px;">
          <div class="list-group-item list-group-item-action" id="routerLink">
          <div class="card-header">created by: {{activeQuestion.author[0].email}}</div>
          <div class="card-body">
          <h4 class="card-title">{{activeQuestion.title}}</h4>
          <p class="card-text">{{activeQuestion.description}}</p>
          </div>
      </div>
        </div>
      </div>

        
      
    </div>   

</template>

<script>
export default {
  props: ['question'],
  computed: {
    activeQuestion () {
      return this.$store.state.activeQuestion
    }
  },
  methods: {
    callUpvote (id) {
      console.log('hahahahahahahhahahah')
      this.$store.dispatch('upvoteQuestion', id)
    },
    callDownvote (id) {
      this.$store.dispatch('downvoteQuestion', id)
    },
    findQuestion () {
      this.$store.dispatch('findOneQuestion', this.question)
    }
  },
  created () {
    this.findQuestion()
  }
}
</script>

<style lang="css">
.votebuttons {
  margin-top: 20px;
}
#voteGroup {
  background-color: #2F2F2F;
  border: 2px solid;
  border-radius: 5px;
  margin-bottom: 20px;
}
.downvote {
  margin-top: 15px;
}
.upvote {
  margin-top: 40px;
}
#routerLink {
    background-color: #2F2F2F;
}
</style>
