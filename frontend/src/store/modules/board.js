import axios from "axios"

const state = {
  headers: [
    { text: 'No', align: 'center', value: 'boardNo',},
    { text: 'Title', value: 'title' },
    { text: 'Writer', value: 'writer' },
    { text: 'Date', value: 'regDate' },
  ],

  boards: [],


}

const getters = {

}
const mutations  = {

  FETCH_BOARD(state, payload) {
    state.boards = payload

  },

}
const actions = {
  fetchBoard({ commit }) {
    axios.get('http://localhost:7777/board/fetch')
      .then(res => {
        commit("FETCH_BOARD", res.data)
      })
      .catch(err => {
        console.log(err.status)
      })
  },

  deleteBoard({ commit }, boardNo) {

    axios.delete(`http://localhost:7777/board/modify/${boardNo}`)
      .then(res => {
        alert(res+ '삭제완료')
        commit
      })
      .catch(err => {
        console.log(err)
      })
  },

  modifyBoard({commit}, payload) {
    const { boardNo, title, content } = payload
    axios.put(`http://localhost:7777/board/modify/${boardNo}`,{content, title})
      .then(res => {
        alert(res.data + "수정완료 ")
        commit
      })
      .catch(err => {
        console.log(err)
      })
  }


}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
