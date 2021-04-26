/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

var app = new Vue({
  el: '#root',
  data: {
    email: '',
    visible: false,
    // Scritte navbar centrali
    navbar_center: [{
      name: 'Home',
      url: '#'
    }, {
      name: 'Landing',
      content: 'fa-angle-down',
      url: '#'
    }, {
      name: 'Pages',
      content: 'fa-angle-down',
      url: '#'
    }, {
      name: 'Docs',
      content: 'fa-angle-down',
      url: '#'
    }],
    // Icone navbar destra
    navbar_right: [{
      prefix: 'fas',
      icon: 'fa-search',
      url: '#'
    }, {
      prefix: 'fab',
      icon: 'fa-github',
      url: '#'
    }, {
      prefix: 'fas',
      icon: 'fa-box',
      url: '#'
    }, {
      prefix: 'far',
      icon: 'fa-user',
      url: '#'
    }],
    patners: [{
      name: 'Amazon',
      image: './dist/img/amazon.svg'
    }, {
      name: 'Google',
      image: './dist/img/google.svg'
    }, {
      name: 'Lenovo',
      image: './dist/img/lenovo.svg'
    }, {
      name: 'Paypal',
      image: './dist/img/paypal.svg'
    }, {
      name: 'Shopify',
      image: './dist/img/shopify.svg'
    }, {
      name: 'Spotify',
      image: './dist/img/spotify.svg'
    }],
    cards: [{
      title: 'Modular',
      paragraph: 'Composed in a pseudo-Latin language which more or less corresponds.',
      anchor: 'Read More >',
      icon: 'fab fa-dropbox'
    }, {
      title: 'Responsive',
      paragraph: 'Composed in a pseudo-Latin language which more or less corresponds.',
      anchor: 'Read More >',
      icon: 'fas fa-desktop'
    }, {
      title: 'Customizable',
      paragraph: 'Composed in a pseudo-Latin language which more or less corresponds.',
      anchor: 'Read More >',
      icon: 'fas fa-paint-brush'
    }, {
      title: 'Scalable',
      paragraph: 'Composed in a pseudo-Latin language which more or less corresponds.',
      anchor: 'Read More >',
      icon: 'fas fa-expand-arrows-alt'
    }],
    // Sezione card buy
    section_buy: [{
      type: 'Basic',
      price: '$9.00',
      time: 'Per Month',
      description: 'All the basics for businesses that are just getting started.'
    }, {
      type: 'Business',
      price: '$39.00',
      time: 'Per Month',
      description: 'Better for growing businesses that want more customers.',
      ribbon: '<div class="ribbon ribbon-top-right"><span>Best</span></div>'
    }, {
      type: 'Enterprise',
      price: '$79.00',
      time: 'Per Month',
      description: 'Advanced features for pros who need more customization.'
    }],
    // Sezione lista card
    buy_list: [{
      icon: 'far fa-check-circle',
      list: 'Full Access'
    }, {
      icon: 'far fa-check-circle',
      list: 'Enhanced Security'
    }, {
      icon: 'far fa-check-circle',
      list: 'Source Files'
    }, {
      icon: 'far fa-check-circle',
      list: '1 Domain Free'
    }, {
      icon: 'far fa-check-circle',
      list: 'Enhanced Security'
    }],
    // Footer
    footer: [{
      logo: './dist/img/logo-light.png',
      paragraph: 'Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.',
      social: [{
        icon: 'fab fa-facebook-f',
        url: 'https://it-it.facebook.com/'
      }, {
        icon: 'fab fa-instagram',
        url: 'https://www.instagram.com/'
      }, {
        icon: 'fab fa-twitter',
        url: 'https://twitter.com/?lang=it'
      }, {
        icon: 'fab fa-linkedin-in',
        url: 'https://www.linkedin.com/'
      }],
      companylist: [{
        title: 'Company'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'About us',
        url: '#'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Services',
        url: '#'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Team',
        url: '#'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Pricing',
        url: '#'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Project',
        url: '#'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Careers',
        url: '#'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Blog',
        url: '#'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Login',
        url: '#'
      }],
      usefull_link: [{
        title: 'Usefull link'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Terms of Services',
        url: '#'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Privacy Policy',
        url: '#'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Documentation',
        url: '#'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Changelog',
        url: '#'
      }, {
        icon: 'fas fa-angle-right',
        subtitle: 'Components',
        url: '#'
      }],
      newsletter: [{
        title: 'Newsletter',
        paragraph: 'Sign up and receive the latest tips via email.',
        email_title: 'Write your email *',
        placeholder: '         Your Email :',
        button: 'Subscribe',
        iconmessage: 'far fa-envelope'
      }],
      copyright: [{
        title: '© 2021 Landrick. Design with <i class="fas fa-heart"></i> by Shreethemes.',
        images: [{
          card: './dist/img/american-ex.png'
        }, {
          card: './dist/img/discover.png'
        }, {
          card: './dist/img/master-card.png'
        }, {
          card: './dist/img/paypal.png'
        }, {
          card: './dist/img/visa.png'
        }]
      }]
    }]
  },
  mounted: function mounted() {
    console.log("Ok");
  },
  methods: {
    dropdown: function dropdown() {
      this.visible = true;
      console.log(this.visible);
    }
  }
});

/***/ }),

/***/ "./src/scss/master.scss":
/*!******************************!*\
  !*** ./src/scss/master.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/main": 0,
/******/ 			"dist/css/master": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/master"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/master"], () => (__webpack_require__("./src/scss/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;