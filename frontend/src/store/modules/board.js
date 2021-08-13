const state = {
  headers: [
    { text: 'No', align: 'center', value: 'no',},
    { text: 'Title', value: 'title' },
    { text: 'Writer', value: 'writer' },
    { text: 'Date', value: 'date' },
  ],

  boards: [
    {
      no: '1',
      title: 'Coding Project',
      writer: 'Ree',
      date: '2021-08-10',
    },
    {
      no: '2',
      title: 'work hard',
      writer: 'Ree',
      date: '2021-08-10',
    },
    {
      no: '3',
      title: 'play hard',
      writer: 'Ree',
      date: '2021-08-10',
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
