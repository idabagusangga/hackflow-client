<template lang="html">
  <div class="" id="talkbubble1">
    <div class="loginArea">

      <v-container fluid>
        <div id="headerCss" class="border-info">
          <h3>Question / answer</h3>
        </div>
        <br>
        <br>
        <div class="row">
          <div class="col-md-6">
            <h6><a style="cursor:pointer;" @click="gotQuestion">Question Form</a></h6>
          </div>
          <div class="col-md-6">
            <h6><a style="cursor:pointer;" @click="gotAnswer">Answer Form</a></h6>
          </div>
        </div>
        <div id="isiForm">
          <v-layout row v-if="question">
            <v-flex xs10>
              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control-plaintext" id="staticEmail" value="please enter your question title" v-model="titleQuestion">
                </div>
              </div>
              <v-text-field
                name="input-7-2"
                label="Question Form"
                value="What do you have in mind?"
                class="input-group--focused"
                multi-line
                v-model="questionForm"
              ></v-text-field>
<button type="button" class="btn btn-outline-warning" @click="submitQuestion">Ask!</button>
            </v-flex>
          </v-layout>
          <v-layout row v-if="answer">
            <v-flex xs10>
              <v-text-field
                name="input-7-2"
                label="Answer Form"
                value="Tell us what you know!"
                class="input-group--focused"
                multi-line
                v-model="answerForm"
              ></v-text-field>
              <button type="button" class="btn btn-outline-warning" @click="submitAnswer">Answer!</button>
            </v-flex>
          </v-layout>
          <v-layout row v-if="answer">
            <v-flex xs10>
              <div class="loader" v-if="loading"></div>
            </v-flex>
          </v-layout>
        </div>

        </v-container>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      question: true,
      answer: false,
      answerForm: '',
      questionForm: '',
      titleQuestion: '',
      loading: false
    }
  },
  methods: {
    gotQuestion () {
      this.question = true
      this.answer = false
    },
    gotAnswer () {
      this.question = false
      this.answer = true
    },
    pendingLoading () {
      this.question = false
      this.answer = false
      this.$store.commit('SET_LOADING_FORM', true)
    },
    submitQuestion () {
      let token = localStorage.getItem('token')
      if (token) {
        this.pendingLoading()
        let payload = {
          token: token,
          title: this.titleQuestion,
          description: this.questionForm
        }
        this.$store.dispatch('postQuestion', payload)
        this.answerForm = ''
        this.questionForm = ''
        this.titleQuestion = ''
        this.gotQuestion()
      } else {
        alert('please log in first')
        this.gotQuestion()
        this.answerForm = ''
        this.questionForm = ''
        this.titleQuestion = ''
      }
    },
    submitAnswer () {
      if (this.$store.state.activeQuestion !== null) {
        this.pendingLoading()
        let token = localStorage.getItem('token')
        if (token) {
          let payload = {
            token: token,
            answer: this.answerForm,
            questionId: this.$store.state.activeQuestion._id
          }
          this.$store.dispatch('postAnswer', payload)
          this.gotAnswer()
          this.answerForm = ''
          this.questionForm = ''
          this.titleQuestion = ''
        } else {
          alert('please log in first')
          this.gotAnswer()
          this.answerForm = ''
          this.questionForm = ''
          this.titleQuestion = ''
        }
      } else {
        alert('please pick a question first')
        this.gotAnswer()
        this.answerForm = ''
        this.questionForm = ''
        this.titleQuestion = ''
      }
    }
  },
  computed: {
    loadingCircle () {
      return this.$store.state.loadingForm
    }
  }
}
</script>

<style lang="css">
#talkbubble1 {
   width: 450px;
   height: 430px;
   background: #2F2F2F;
   margin-left: 30px;
   position: relative;
   -moz-border-radius:    10px;
   -webkit-border-radius: 10px;
   border-radius:         10px;
}
#talkbubble1:before {
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
#isiForm {
  margin: 40px;
}
.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>
