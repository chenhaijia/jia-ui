import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入组件库
import CPager from '../packages/pager/index.js'

// 注册组件库
Vue.use(CPager)

Vue.config.productionTip = false

new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
