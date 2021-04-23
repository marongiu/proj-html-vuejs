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
    // Scritte navbar centrali
    navbar_center: [{
      name: 'Home'
    }, {
      name: 'Landing',
      content: 'fa-angle-down'
    }, {
      name: 'Pages',
      content: 'fa-angle-down'
    }, {
      name: 'Docs',
      content: 'fa-angle-down'
    }],
    // Icone navbar destra
    navbar_right: [{
      prefix: 'fas',
      icon: 'fa-search'
    }, {
      prefix: 'fab',
      icon: 'fa-github'
    }, {
      prefix: 'fas',
      icon: 'fa-box'
    }, {
      prefix: 'far',
      icon: 'fa-user'
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
      description: 'Better for growing businesses that want more customers.'
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
    }]
  },
  mounted: function mounted() {
    console.log("Ok");
  },
  methods: {}
});

/***/ }),

/***/ "./src/scss/master.scss":
/*!******************************!*\
  !*** ./src/scss/master.scss ***!
  \******************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable.\n   ╷\n11 │   color: $dark-blue;\r\n   │          ^^^^^^^^^^\n   ╵\n  src\\scss\\partials\\_common.scss 11:10  @import\n  src\\scss\\master.scss 4:9              root stylesheet\n    at processResult (C:\\Users\\andre.ANDREA\\Desktop\\Esercizi\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:676:19)\n    at C:\\Users\\andre.ANDREA\\Desktop\\Esercizi\\proj-html-vuejs\\node_modules\\webpack\\lib\\NormalModule.js:778:5\n    at C:\\Users\\andre.ANDREA\\Desktop\\Esercizi\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\Users\\andre.ANDREA\\Desktop\\Esercizi\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\Users\\andre.ANDREA\\Desktop\\Esercizi\\proj-html-vuejs\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\Users\\andre.ANDREA\\desktop\\esercizi\\proj-html-vuejs\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\Users\\andre.ANDREA\\desktop\\esercizi\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:92571:16)\n    at _render_closure1.call$2 (C:\\Users\\andre.ANDREA\\desktop\\esercizi\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:81074:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\andre.ANDREA\\desktop\\esercizi\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:27256:18)\n    at _FutureListener.handleError$1 (C:\\Users\\andre.ANDREA\\desktop\\esercizi\\proj-html-vuejs\\node_modules\\sass\\sass.dart.js:25812:19)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scss/master.scss"]();
/******/ 	
/******/ })()
;