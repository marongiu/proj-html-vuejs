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

    cards: [
      {
        title: 'Modular',
        paragraph: 'Composed in a pseudo-Latin language which more or less corresponds.',
        anchor: 'Read More >',
        icon: 'fab fa-dropbox'
      },
      {
        title: 'Responsive',
        paragraph: 'Composed in a pseudo-Latin language which more or less corresponds.',
        anchor: 'Read More >',
        icon: 'fas fa-desktop'
      },
      {
        title: 'Customizable',
        paragraph: 'Composed in a pseudo-Latin language which more or less corresponds.',
        anchor: 'Read More >',
        icon: 'fas fa-paint-brush'
      },
      {
        title: 'Scalable',
        paragraph: 'Composed in a pseudo-Latin language which more or less corresponds.',
        anchor: 'Read More >',
        icon: 'fas fa-expand-arrows-alt'
      }
    ]
  },

  mounted() {
    console.log("Ok");
  },
  methods: {

  }
})
