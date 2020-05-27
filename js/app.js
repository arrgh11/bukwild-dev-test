Vue.component(
    'layout-ui',
    require('./components/LayoutUI.vue').default
);

import PageUI from './components/PageUI.vue'

let data = require('./content.json');

let routes = [];

for (var page in data.pages) {
	let obj = {
		path: '/'+data.pages[page]['slug'],
		component: PageUI,
		props: {
	  		headline: data.pages[page]['blocks'][0]['headline'],
			subhead: data.pages[page]['blocks'][0]['subhead'],
			cta: data.pages[page]['blocks'][0]['cta'],
			background: data.pages[page]['blocks'][0]['background']
	  	}
	}
	routes.push(obj);
}

// routes.push({
//     path :'*',
//     component: PageUI,
// });

const router = new VueRouter({
	// mode: 'history',
	routes
});

const app = new Vue({
  router
}).$mount('#app');


let event = new CustomEvent("fade", {
	detail: {}
});

function initE() {

	window.dispatchEvent(event);

}


router.beforeEach((to, from, next) => {
	/* must call `next` */

	window.dispatchEvent(event);
	setTimeout(function() {
		next();
	}, 600);
});


router.afterEach((to, from) => {
	setTimeout(function() {

		window.dispatchEvent(event);
	}, 600);
	
});

router.onReady(initE);

router.push('/'+data.pages[0]['slug'], ()=>{});
