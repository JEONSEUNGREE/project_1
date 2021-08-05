const state = {
  drawer: false,
  items: [
    { title: 'Dashboard', icon: 'mdi-view-dashboard'},
    { title: 'GridSystem', icon: 'mdi-image'},
  ]

}

const getters = {
  getDrawer: state => state.drawer

}
const mutations  = {
  setDrawer (state, data) {
    state.drawer = data
  }

}
const actions = {
  toggleDrawer ({commit}, value) {
    commit('setDrawer', value)
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
