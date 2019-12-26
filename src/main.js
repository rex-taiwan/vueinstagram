import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
Vue.prototype.moment = moment
import vuetify from './plugins/vuetify';

import * as VueFire from 'vuefire';
Vue.use(VueFire)
import ReadMore from 'vue-read-more';
Vue.use(ReadMore);



Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')