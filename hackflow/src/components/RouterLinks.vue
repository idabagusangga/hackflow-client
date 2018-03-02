<template lang="html">
  
      <div class="row" id="voteGroup">
        <div class="col-md-3">
            <p class="upvote" style="cursor:pointer" @click="callUpvote(question._id)"><i class="fas fa-chevron-up" @click="callUpvote" ></i></p>{{totalVotes}}<br><p class="downvote" style="cursor:pointer" @click="callDownvote(question._id)"><i class="fas fa-chevron-down" ></i></p>
        </div>
        <div class="col-md-6">
          <div class="card text-white bg-primary mb-3" style="width: 350px;">
          <router-link :to="{name:'Question',params:{id:question._id}}" class="list-group-item list-group-item-action" id="routerLink">
          <div class="card-header">created by</div>
          <div class="card-body">
          <h4 class="card-title">{{question.title}}</h4>
          <p class="card-text">{{question.description}}</p>
          </div>
      </router-link>
        </div>
      </div>

        
      
    </div>   

</template>

<script>
export default {
  props: ['question'],
  computed: {
    totalVotes () {
      return this.question.points.length
    }
  },
  methods: {
    callUpvote (id) {
      console.log('hahahahahahahhahahah')
      this.$store.dispatch('upvoteQuestion', id)
    },
    callDownvote (id) {
      this.$store.dispatch('downvoteQuestion', id)
    }
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
</style>
