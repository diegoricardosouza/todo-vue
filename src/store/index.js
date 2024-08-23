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
      const index = state.todos.findIndex(todo => todo.id === payload.id)

      if (index >= 0) {
        state.todos.splice(index, 1, payload)
      } else {
        state.todos.unshift(payload)
      }

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
    },

    async updateTodo({ commit }, { id, data}) {
      const response = await axios.put(`http://localhost:3000/todos/${id}`, data)
      return commit('storeTodo', response.data)
    }
  }
})
