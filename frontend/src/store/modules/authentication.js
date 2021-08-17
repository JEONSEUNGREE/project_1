import axios from "axios"
import router from "../../router"

const state = {
  // empInfo: {
  //   isLogin: null,
  //   team: null,
  //   name: null,
  // },
  // 권한에 따른 버튼 활성화지만 localstorage에서 바꾸면 보인다.

  role: localStorage.getItem('auth') == 'admin' ? true : false,
  items: [
    // value로 값 받음
    {text: '개발팀', value: 'dev'},
    {text: '구매팀', value: 'purchase'},
    {text: '기획팀', value: 'plan'},
  ],

  roles: [
    {text: '관리자', value: 'admin'},
    {text: '직원', value: 'emp'},
  ],


}

const getters = {
//로컬로 저장 새로고침시 정보가 사라짐
  // getEmpInfo: state => state.empInfo.name,
  // getEmpDepart: state => state.empInfo.team,
  getRole: state => state.role

}

const mutations  = {
// state 안쓰면 state만 읽어옴 애초에 처음 오는 파라미터는 무조건 state로 읽음
  // REGISTER(state, payload) {
  //   state
  //   axios.post('http://localhost:7777/authenticate/signup', payload)
  //     .then(res => {
  //       console.log(res)
  //       alert('가입완료')
  //       // snackbar
  //     })
  //     .catch(err => {
  //       alert('occur' + err)
  //       // snackbar
  //     })
  // },

  // local에 istLogin에 아무 값이나 넣으면 url접근가능..
  // SIGN_IN(state, payload) {
  //   axios.post('http://localhost:7777/authenticate/signin', payload)
  //     .then(res => {
  //       alert(JSON.stringify(res.data))

  //       const { errorMessage , email, name, team, auth } = res.data
  //       state
  //       // state.email = email

  //       if(errorMessage === 3) {
  //         localStorage.setItem('email',email)
  //         localStorage.setItem('name',name)
  //         localStorage.setItem('team',team)
  //         localStorage.setItem('auth',auth)
  //         this.$store.commit('snackbar/SET_SNACKBAR', {
  //           text: '로그인성공', color: 'primary', location: 'top'
  //         })

  //         alert("로그인 성공")
  //         router.push('/home')
  //         // snackbar
  //       } else if(errorMessage === 2) {
  //         alert("존재하지 않는 PW")

  //       } else {
  //         alert("존재하지 않는 Email")
  //       }
  //     })
  //     .catch(err => {
  //       alert(err)
  //       // snackbar
  //     })
  // },

  SIGN_OUT(state) {
    axios.post('http://localhost:7777/authenticate/logoutSession')
      .then(res => {
        alert(res)
        if (res.data == '') {

          localStorage.removeItem('email')
          localStorage.removeItem('name')
          localStorage.removeItem('team')

          router.push('/')
        } else {
          alert('error')
        }
      }).catch(err => {
        alert("로그아웃")
        console.log(err)
        localStorage.removeItem('email')
        localStorage.removeItem('name')
        localStorage.removeItem('team')
        router.push('/')
      })
  }



}
const actions = {
  register({ commit }, payload){
    axios.post('http://localhost:7777/authenticate/signup', payload)
      .then(res => {
        commit('snackBar/SET_SNACKBAR', {
          text: '가입완료 ', color: 'black', location: 'bottom'
        }, { root: true } )
      })
      .catch(err => {
        alert('occur' + err)
        // snackbar
      })

  },

  signin({ commit }, payload){
    axios.post('http://localhost:7777/authenticate/signin', payload)
      .then(res => {

        const { errorMessage , email, name, team, auth } = res.data

        if(errorMessage === 3) {
          localStorage.setItem('email',email)
          localStorage.setItem('name',name)
          localStorage.setItem('team',team)
          localStorage.setItem('auth',auth)

          commit('snackBar/SET_SNACKBAR', {
            text: '로그인 ', color: 'black', location: 'bottom'
          }, { root: true } )

          router.push('/home')
        } else if(errorMessage === 2) {
          commit('snackBar/SET_SNACKBAR', {
            text: '존재하지 않는 PW', color: 'black', location: 'bottom'
          }, { root: true } )

        } else {
          commit('snackBar/SET_SNACKBAR', {
            text: '존재하지않는 email ', color: 'black', location: 'bottom'
          }, { root: true } )
        }
      })
      .catch(err => {
        alert(err)
        // snackbar
      })
  },
  signout({ commit }) {
    axios.post('http://localhost:7777/authenticate/logoutSession')
      .then(res => {
        if (res.data == '') {
          localStorage.removeItem('email')
          localStorage.removeItem('name')
          localStorage.removeItem('team')

          router.push('/')
          commit('snackBar/SET_SNACKBAR', {
            text: '로그아웃 ', color: 'black', location: 'top'
          }, { root: true } )
        } else {
          alert('error')
        }
      }).catch(err => {
        commit('snackBar/SET_SNACKBAR', {
          text: '로그아웃 ', color: 'black', location: 'top'
        }, { root: true } )
        console.log(err)
        localStorage.removeItem('email')
        localStorage.removeItem('name')
        localStorage.removeItem('team')
        router.push('/')
      })
  },
  // modifyUserInfor({ commit })



}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
