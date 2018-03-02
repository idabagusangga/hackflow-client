<template lang="html">
  <div class="row" id="voteGroup">
    <div class="col-md-3">
        <p class="upvote" style="cursor:pointer" @click="callUpvoteAnswer(ans._id)"><i class="fas fa-chevron-up"></i></p>{{ans.points.length}}<br><p class="downvote" style="cursor:pointer" @click="callDownvoteAnswer(ans._id)"><i class="fas fa-chevron-down" ></i></p>
    </div>
    <div class="col-md-6">
      <div class="card text-white bg-primary mb-3" style="width: 350px;">
      <div class="list-group-item list-group-item-action" id="routerLink">
      <div class="card-header">created by {{ans.author[0].email}}</div>
      <div class="card-body">
      <h4 class="card-title">{{ans.answer}}</h4>
      </div>
  </div>
    </div>
  </div>

    
  
</div>  
</template>

<script>
export default {
  props: ['ans'],
  methods: {
    callUpvoteAnswer (id) {
      this.$store.dispatch('upvoteAnswer', id)
    },
    callDownvoteAnswer (id) {
      this.$store.dispatch('downvoteAnswer', id)
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
#routerLink {
    background-color: #2F2F2F;
}
</style>
