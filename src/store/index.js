import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    storeTodos(state, payload) {
      state.todos = payload
    },
    storeTodo(state, payload) {
      state.todos.unshift(payload)
    }
  },
  actions: {
    async getTodos({ commit }) {
      const response = await axios.get('http://localhost:3000/todos')
      return commit('storeTodos', response.data)
    },

    async addTodo({ commit }, data) {
      const response = await axios.post('http://localhost:3000/todos', data)
      return commit('storeTodo', response.data)
    }
  }
})
