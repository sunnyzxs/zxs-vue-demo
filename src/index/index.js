import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers} from '../router'
import App from './main'

//vue
Vue.use(VueRouter);
Vue.config.debug = true;
Vue.config.delimiters = ['${', '}'];
Vue.config.devtools = true;

const router = new VueRouter({
    mode: 'history',
    routes:routers //问题
});

new Vue({
    router,
    render: (h) => h(App)
}).$mount('.test')
