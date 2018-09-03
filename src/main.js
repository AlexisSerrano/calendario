import Vue from 'vue'
import App from './App.vue'

import './styles/quasar.styl'
import lang from 'quasar-framework/i18n/es'
import 'quasar-extras/material-icons'
import Quasar from 'quasar'

Vue.use(Quasar, {
  config: {}, i18n: lang
 })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
