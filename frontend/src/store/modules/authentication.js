import axios from "axios"

const state = {


  items: [
    // value로 값 받음
    {text: '개발팀', value: 'dev'},
    {text: '구매팀', value: 'purchase'},
    {text: '기획팀', value: 'plan'},
  ],

  roles: [
    {text: '관리자', value: 'admin'},
    {text: '직원', value: 'emp'},
  ]

}

const getters = {


}

const mutations  = {
// state 안쓰면 state만 읽어옴 애초에 처음 오는 파라미터는 무조건 state로 읽음
  REGISTER(state, payload) {
    state
    alert(payload)
    axios.post('http://localhost:7777/authenticate/signup',
      payload)
      .then(res => {
        console.log(res)
        alert('가입완료')
        router.go(1)
      })
      .catch(err => {
        alert(err + 'error')
      })
  }



}
const actions = {
  register({ commit }, payload){
    alert(payload)
    commit('REGISTER', payload)
  }

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
