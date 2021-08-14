import axios from "axios"
import { mapState } from 'vuex'

const state = {
  infor: [
    { title: 'Modify', inactive: true },
    { title: 'Sign out' },
  ],
}

const getters = {

}
const mutations  = {
  ...mapState('authentication', {

  }),

  POST(state, payload) {
    state

    if (localStorage.getItem('name') != null) {
      const name = localStorage.getItem('name')
      const { title, content } = payload


      axios.post('http://localhost:7777/board/post', { title: title, content: content, writer: name })
        .then(res => {
          console.log(res.status)
          alert("등록성공")
        })
        .catch(err => {
          console.log(err.status)
          alert("에러")
        })
    }
  }
}
const actions = {
  post({ commit }, payload ) {
    commit('POST', payload)
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
