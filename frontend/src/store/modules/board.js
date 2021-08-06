const state = {
  headers: [
    {
      text: 'No',
      align: 'start',
      sortable: true,
      value: 'name',
    },
    { text: 'Title', value: 'calories', align: 'center'},
    { text: 'Writer', value: 'calories', align: 'end',},
    { text: 'Date', value: 'fat', align: 'end', },
    { text: 'views', value: 'carbs',align: 'end', },
  ],

  boards: [
    {
      name: '1',
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
      iron: '1%',
    },
    {
      name: '2',
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
      iron: '1%',
    },

  ],


}

const getters = {

}
const mutations  = {


}
const actions = {


}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
