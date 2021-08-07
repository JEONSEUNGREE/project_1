const state = {
  employee: [
    {
      no: 1,
      depart: 'Manager',
      name: 'User',
      contact: '1577-1577',
      mail: '1577@gmail.com',
      detail: 'he is detail'
    },
    {
      no: 2,
      depart: 'Customer',
      name: 'Apple',
      contact: '1577-1577',
      mail: '1577@gmail.com',
      detail: 'he is north korean'
    },
    {
      no: 3,
      depart: 'ABCmart',
      name: 'tomato',
      contact: '1577-1577',
      mail: '1577@gmail.com',
      detail: 'got no options'
    },
  ]
}

const getters = {

}
const mutations  = {
  GET_SORT(state, value) {
    state.employee.sort((a,b) => a[value] < b[value] ? -1 : 1)
  }


}
const actions = {
  getSort({ commit }, value) {
    commit('GET_SORT', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
