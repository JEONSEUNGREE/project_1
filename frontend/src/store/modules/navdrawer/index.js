import Vue from 'vue'
import Vuex from 'vuex'

import state from './states'
import actions from './actions'
import mutaions from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutaions,
  getters
})
