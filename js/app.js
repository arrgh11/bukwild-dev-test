Vue.component(
    'layout-ui',
    require('./components/LayoutUI.vue').default
);

import PageUI from './components/PageUI.vue'

let data = require('./content.json');

let routes = [
	{ path: '/', redirect: to => {
		return '/'+data.pages[0]['slug']
    }}
];

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
	console.log(data.pages[page]);
}

// const routes = [
//   { 
//   	path: '/industries', 
//   	component: PageUI,
//   	props: {
//   		headline: "Industries",
// 		subhead: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
// 		cta: "Vestibulum id ligula porta felis euismod semper.",
// 		background: "slide_one.jpg"
//   	}
//   },
//   { 
//   	path: '/services', 
//   	component: PageUI,
//   	props: {
//   		headline: "Services",
// 		subhead: "Cras mattis consectetur purus sit amet fermentum.",
// 		cta: "Donec id elit non mi porta gravida at eget metus.",
// 		background: "slide_two.jpg"
//   	}
//   },
//   { 
//   	path: '/about-us', 
//   	component: PageUI,
//   	props: {
//   		headline: "Maecenas sed diam eget risus varius blandit sit amet non magna",
// 		subhead: "Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.",
// 		cta: "Nullam quis risus eget urna mollis ornare vel eu leo.",
// 		background: "slide_three.jpg"
//   	}
//   },
// ]

const router = new VueRouter({
	mode: 'history',
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

	console.log('called');	

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

router.push({ path: '/'+data.pages[0]['slug'] })
