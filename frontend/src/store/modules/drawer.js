const state = {
  drawer: false,
  items: [
    { title: 'Home', icon: 'mdi-view-dashboard', to: '/'},
    { title: 'T&A', icon: 'mdi-image', items:[
      { title: 'Home', icon: 'mdi-view-dashboard', to: '/header'},
      { title: 'Home', icon: 'mdi-view-dashboard', to: '/header'},
    ]},
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
