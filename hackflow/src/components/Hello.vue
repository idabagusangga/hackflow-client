<template>
  <div class="hello">
    <h1>HACKTIV8 STACKOVERFLOW</h1>
    <div class="row">
      <div class="col-md-6">
        <h1></h1>
        <br>
        <LoginForm></LoginForm>
        <br>
        <br>
        <!-- <NewQuestion></NewQuestion> -->
        <TheForms></TheForms>
      </div>
      <div class="col-md-5" id="kanan">
        <h4>Question Lists</h4>
        <br>
        <br>
        <router-view></router-view>
</div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import NewQuestion from '@/components/NewQuestion'
import TheForms from '@/components/TheForms'
import QuestionLists from '@/components/QuestionLists'
import SearchQuestion from '@/components/SearchQuestion'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  components: {
    LoginForm: LoginForm,
    NewQuestion: NewQuestion,
    TheForms: TheForms,
    QuestionLists: QuestionLists,
    SearchQuestion: SearchQuestion
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
#kanan {
  margin-top: 0px;
  margin-left: 80px;
}

.bg-primary {
  background-color: #2F2F2F !important;
}
</style>
