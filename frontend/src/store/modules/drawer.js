const state = {
  namespaced: true,
  drawer: false,
  items: [
    { title: 'Home', icon: 'mdi-view-dashboard', to: '/'},
    { title: 'T&A', icon: 'mdi-image', items:[
      { title: 'Schedule', icon: 'mdi-view-dashboard', to: '/schedule'},
      { title: 'Commuting Record', icon: 'mdi-view-dashboard', to: '/commuting'},
    ]},
    { title: 'Organization', icon: 'mdi-view-dashboard', items:[
      { title: 'Organization Chart', icon: 'mdi-view-dashboard', to: '/orga'},
      { title: 'Employee Contact List', icon: 'mdi-view-dashboard', to: '/contact-list'}
    ]},
    { title: 'Board', icon: 'mdi-view-dashboard', to: '/board'}
  ]

}

const getters = {
  getDrawer: state => state.drawer

}
const mutations  = {
  SET_DRAWER (state, data) {
    state.drawer = data
  }

}
const actions = {
  toggleDrawer ({ commit }, value) {
    commit('SET_DRAWER', value)
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
