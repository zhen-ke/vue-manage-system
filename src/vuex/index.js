import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    avatar: require('@/assets/logo.png'),
  },
  mutations: {
    updateAvatar (state,payload) {
      state.avatar = payload.url
    }
  },
  actions: {
    // increment (context) {
    //   context.commit('increment')
    // }
  },
  getters: {
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done)
    // }
  }
})

export default store