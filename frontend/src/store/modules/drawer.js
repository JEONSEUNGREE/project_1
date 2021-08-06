const state = {
  namespaced: true,
  drawer: false,
  items: [
    { title: 'Home', icon: 'mdi-view-dashboard', to: '/'},
    { title: 'T&A', icon: 'mdi-image', items:[
      { title: 'Schedule', icon: 'mdi-view-dashboard', to: '/header'},
      { title: 'Commuting Record', icon: 'mdi-view-dashboard', to: '/header'},
    ]},
    { title: 'Organization', icon: 'mdi-view-dashboard', items:[
      { title: 'Organization Chart', icon: 'mdi-view-dashboard', to: '/orga'},
      { title: 'Employee Contact List', icon: 'mdi-view-dashboard', to: '/list'}
    ]},
    { title: 'Board', icon: 'mdi-view-dashboard', to: '/list'}
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
