import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VTooltip from "v-tooltip"



import store from './store'
import vuetify from './plugins/vuetify';

import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true })
window.Vue = require('vue');
Vue.use(VTooltip)


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
