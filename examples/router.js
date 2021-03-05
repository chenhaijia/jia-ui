import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Pager = () => import('./pager/demo.vue')
const router = new Router({
	// mode:'history',
	routes: [
		{
			path: '/',
			name: '/',
			meta: {},
		},
		{
			path: '/pager',
			component: Pager,
			children: [],
		},
	],
})
export default router
