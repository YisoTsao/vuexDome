import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const countModule = {
    namespaced: true,
    state: { count: 0 },
    mutations: {
      increment(state, payload) {
        state.count++
      },
      decrement(state) {
        state.count--
      },
      reset(state) {
        state.count = 0
      }
    },
    getters: { // 當讀取屬性值時自動呼叫並返回屬性值
      evenOrOdd(state) {
        return state.count % 2 === 0 ? "偶數" : "奇數";
      }
    },
    actions: {
      increment: ({ commit }) => commit('increment'),
      decrement: ({ commit }) => commit('decrement'),
      reset: ({ commit }) => commit('reset'),
      incrementIfOdd({ commit, state }) { // 帶條件的action
        if (state.count % 2 === 1) {
          commit('increment')
        }
      },
      incrementAsync({ commit }) { //非同步的action
        setInterval(() => {
          commit('increment')
        }, 1000)
      }
    },
  }
  
  const moduleB = {
    namespaced: true,
    state: {
      count: 0,
      title: "I am moduleB"
    },
    mutations: {
      increment(state, payload) {
        state.count++
      },
      decrement(state) {
        state.count--
      },
      reset(state) {
        state.count = 0
      }
    },
    getters: {},
    actions: {
      increment: ({ commit }) => commit('increment'),
      decrement: ({ commit }) => commit('decrement'),
      reset({ dispatch, commit }) {
        commit('reset')
        return dispatch('incrementAsync').then(() => {})
      },
      incrementAsync({ commit }) { //非同步的action
        setInterval(() => {
          commit('increment')
        }, 1000)
      }
    }
  
  }
  export default new Vuex.Store({
    modules: {
      a: countModule,
      b: moduleB
    }
  })