import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import moment from 'moment';
Vue.prototype.moment = moment;
import vuetify from './plugins/vuetify';

import * as VueFire from 'vuefire';
Vue.use(VueFire);
import ReadMore from 'vue-read-more';
Vue.use(ReadMore);

import VueInsProgressBar from 'vue-ins-progress-bar';
import VueProgressiveImage from 'vue-progressive-image';

const options = {
  position: 'fixed',
  show: true,
  height: '4px',
};

Vue.use(VueInsProgressBar, options);
Vue.use(VueProgressiveImage, {
  cache: false,
  delay: 500,
});

import VueCropper from 'vue-cropper';

Vue.use(VueCropper);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
