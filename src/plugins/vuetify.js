import Vue from 'vue';
import Vuetify from 'vuetify/lib';
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg'

    },
    // this is the spot to modify

    theme: {
        themes: {
            light: {
                primary: '#191414',
                success: '#448AFF',
                info: '#ffaa2c',
                error: '#F44336',
            }
        }
    }
})