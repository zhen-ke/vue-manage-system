import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    userinfo (state,value) {
      console.log(value.username,value.password)
    }
  }
})

export default store