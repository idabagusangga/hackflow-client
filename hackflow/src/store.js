import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt from 'jsonwebtoken'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    errorMsg: '',
    questions: [],
    activeQuestion: null,
    answers: [],
    loadingForm: false,
    registermsg: ''
  },
  mutations: {
    SET_LOADING_FORM (state, payload) {
      state.loadingForm = payload
    },
    SET_STATUS_LOGIN (state, payload) {
      state.isLoggedIn = payload
    },
    SET_ERROR_MESSAGE (state, payload) {
      state.errorMsg = payload
    },
    SET_QUESTIONS (state, payload) {
      payload.sort(function (a, b) {
        return b.points.length - a.points.length
      })
      state.questions = payload
    },
    SET_UPVOTE_QUESTION (state, payload) {
      console.log('masuk', payload)
      let token = localStorage.getItem('token')
      let decoded = jwt.verify(token, 'angga')
      state.questions.forEach(question => {
        if (question._id === payload) {
          let search = question.points.indexOf(decoded.id)
          if (search === -1) {
            question.points.push(decoded.id)
            state.activeQuestion.points.push(decoded.id)
          }
        }
      })
    },
    SET_DOWNVOTE_QUESTION (state, payload) {
      console.log('masuk', payload)
      let token = localStorage.getItem('token')
      let decoded = jwt.verify(token, 'angga')
      state.questions.forEach(question => {
        if (question._id === payload) {
          let search = question.points.indexOf(decoded.id)
          if (search !== -1) {
            question.points.splice(search, 1)
            state.activeQuestion.splice(search, 1)
          }
        }
      })
    },
    SET_ACTIVE_QUESTION (state, payload) {
      state.activeQuestion = payload
    },
    SET_ANSWERS (state, payload) {
      payload.sort(function (a, b) {
        return b.points.length - a.points.length
      })
      state.answers = payload
    },
    SET_UPVOTE_ANSWERS (state, payload) {
      console.log('masuk', payload)
      let token = localStorage.getItem('token')
      let decoded = jwt.verify(token, 'angga')
      for (let i = 0; i <= state.answers.length - 1; i++) {
        console.log(state.answers[i])
        if (state.answers[i]._id === payload) {
          let search = state.answers[i].points.indexOf(decoded.id)
          if (search === -1) {
            state.answers[i].points.push(decoded.id)
          }
        }
      }
    },
    SET_DOWNVOTE_ANSWERS (state, payload) {
      console.log('masuk', payload)
      let token = localStorage.getItem('token')
      let decoded = jwt.verify(token, 'angga')
      for (let i = 0; i <= state.answers.length - 1; i++) {
        console.log(state.answers[i])
        if (state.answers[i]._id === payload) {
          let search = state.answers[i].points.indexOf(decoded.id)
          if (search !== -1) {
            state.answers[i].points.splice(search, 1)
          }
        }
      }
    },
    POST_NEW_QUESTION (state, payload) {
      state.questions.unshift(payload)
      state.loadingForm = false
    },
    POST_NEW_ANSWER (state, payload) {
      state.answers.unshift(payload)
    },
    REGISTER_MSG (state, payload) {
      state.registermsg = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      axios.post('http://35.187.226.54:3000/users/login', payload)
        .then(response => {
          console.log(response.data)
          localStorage.setItem('token', response.data.token)
          commit('SET_STATUS_LOGIN', payload)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err)
        })
    },
    getAllQuestions ({commit}, payload) {
      axios.get('http://35.187.226.54:3000/questions')
        .then(response => {
          console.log(response)
          commit('SET_QUESTIONS', response.data.data)
        })
        .catch(err => {
          commit('SET_ERROR_MESSAGE', err)
        })
    },
    upvoteQuestion ({ commit }, payload) {
      let token = localStorage.getItem('token')
      if (token) {
        console.log('masuk if')
        axios.post(`http://35.187.226.54:3000/questions/upvote/${payload}`, {token: token})
          .then(response => {
            commit('SET_UPVOTE_QUESTION', payload)
            console.log(response)
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        console.log(payload)
        alert('please log in..')
      }
    },
    downvoteQuestion ({ commit }, payload) {
      let token = localStorage.getItem('token')
      if (token) {
        axios.post(`http://35.187.226.54:3000/questions/downvote/${payload}`, {token: token})
          .then(response => {
            commit('SET_DOWNVOTE_QUESTION', payload)
            console.log(response)
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        alert('please log in..')
      }
    },
    findOneQuestion ({ commit }, payload) {
      axios.get(`http://35.187.226.54:3000/questions/${payload}`)
        .then(response => {
          console.log(response)
          commit('SET_ACTIVE_QUESTION', response.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllAnswers ({ commit }, payload) {
      axios.get(`http://35.187.226.54:3000/answers/${payload}`)
        .then(response => {
          console.log(response.data.data)
          commit('SET_ANSWERS', response.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    upvoteAnswer ({ commit }, payload) {
      let token = localStorage.getItem('token')
      if (token) {
        console.log('masuk if')
        axios.post(`http://35.187.226.54:3000/answers/upvote/${payload}`, {token: token})
          .then(response => {
            commit('SET_UPVOTE_ANSWERS', payload)
            console.log(response)
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        console.log(payload)
        alert('please log in..')
      }
    },
    downvoteAnswer ({ commit }, payload) {
      let token = localStorage.getItem('token')
      if (token) {
        axios.post(`http://35.187.226.54:3000/answers/downvote/${payload}`, {token: token})
          .then(response => {
            commit('SET_DOWNVOTE_ANSWERS', payload)
            console.log(response)
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        alert('please log in..')
      }
    },
    postQuestion ({ commit }, payload) {
      axios.post(`http://35.187.226.54:3000/questions`, payload)
        .then(response => {
          commit('POST_NEW_QUESTION', response.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    postAnswer ({ commit }, payload) {
      axios.post(`http://35.187.226.54:3000/answers`, payload)
        .then(response => {
          commit('POST_NEW_ANSWER', response.data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    register ({ commit }, payload) {
      axios.post(`http://35.187.226.54:3000/users/register`, payload)
        .then(response => {
          commit('REGISTER MSG', 'user created please log in')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
