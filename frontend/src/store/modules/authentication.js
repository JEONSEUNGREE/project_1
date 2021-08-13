import axios from "axios"
import router from "../../router"

const state = {
  empInfo: {
    isLogin: null,
    team: null,
    name: null,
  },


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
    axios.post('http://localhost:7777/authenticate/signup', payload)
      .then(res => {
        console.log(res)
        alert('가입완료')
        // snackbar
      })
      .catch(err => {
        alert('occur' + err)
        // snackbar
      })
  },

  // local에 istLogin에 아무 값이나 넣으면 url접근가능..

  SIGN_IN(state, payload) {
    axios.post('http://localhost:7777/authenticate/signin', payload)
      .then(res => {
        const { errorMessage , email, name, team } = res.data

        if(errorMessage === 3) {
          localStorage.setItem('empInfo', email)
          state.empInfo.email = email
          state.empInfo.name = name
          state.empInfo.team = team

          alert(state.empInfo.name + state.empInfo.team)

          alert("로그인 성공")
          router.push('/home')
          // snackbar
        } else if(errorMessage === 2) {
          alert("존재하지 않는 PW")
        } else {
          alert("존재하지 않는 Email")
        }
      })
      .catch(err => {
        alert(err)
        // snackbar
      })
  },
  SIGN_OUT(state) {

    axios.post('http://localhost:7777/authenticate/removeSession')
      .then(res => {
        alert(res)
        if (res.data == '') {
          
          localStorage.removeItem('empInfo')

          router.push('/')
        } else {
          alert('error')
        }
      }).catch(err => {
        alert(err)
      })
  }



}
const actions = {
  register({ commit }, payload){
    commit('REGISTER', payload)
  },

  signin({ commit }, payload){
    alert(JSON.stringify(payload))
    commit('SIGN_IN', payload)
  },
  signout({ commit }) {
    commit('SIGN_OUT')
  }


}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
