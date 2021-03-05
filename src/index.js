import CPager from '../packages/pager/index.js'
import MZWhite from '../packages/MZWhite/index.js'
const components = [CPager, MZWhite]

import myDialog from './utils/popup'
const install = function(Vue, opts = {}) {
	components.forEach((component) => {
		Vue.component(component.name, component)
	})
	Vue.prototype.$pcTpl.myDialog = myDialog
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install,
	CPager,
	MZWhite,
}
