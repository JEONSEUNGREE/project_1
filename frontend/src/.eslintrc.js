// .eslintrc.js
module.exports = {
  extends: [
    'plugin:vue/recommended',
  ],
  plugins: [
    'vuetify'
  ],
  rules: {
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/no-legacy-grid': 'error',
    //No 레거시
    'indent': ["error", 2]
    //두칸 뛰어쓰기
  }
}

