var app = new Vue({
  el: '#root',
  data: {
    // Scritte navbar centrali
    navbar_center: [
      {
        name: 'Home'
      },
      {
        name: 'Landing',
        content: 'fa-angle-down'
      },
      {
        name: 'Pages',
        content: 'fa-angle-down'
      },
      {
        name: 'Docs',
        content: 'fa-angle-down'
      }
    ],
    // Icone navbar destra
    navbar_right: [
      {
        prefix: 'fas',
        icon: 'fa-search'
      },
      {
        prefix: 'fab',
        icon: 'fa-github'
      },
      {
        prefix: 'fas',
        icon: 'fa-box'
      },
      {
        prefix: 'far',
        icon: 'fa-user'
      },
    ],
    patners: [
      {
        name: 'Amazon',
        image: './dist/img/amazon.svg'
      },
      {
        name: 'Google',
        image: './dist/img/google.svg'
      },
      {
        name: 'Lenovo',
        image: './dist/img/lenovo.svg'
      },
      {
        name: 'Paypal',
        image: './dist/img/paypal.svg'
      },
      {
        name: 'Shopify',
        image: './dist/img/shopify.svg'
      },
      {
        name: 'Spotify',
        image: './dist/img/spotify.svg'
      },
    ],
  },

  mounted() {
    console.log("Ok");
  },
  methods: {

  }
})
