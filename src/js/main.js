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
    ],
// Sezione card buy
    section_buy: [
      {
        type: 'Basic',
        price: '$9.00',
        time: 'Per Month',
        description: 'All the basics for businesses that are just getting started.',
      },
      {
        type: 'Business',
        price: '$39.00',
        time: 'Per Month',
        description: 'Better for growing businesses that want more customers.',
      },
      {
        type: 'Enterprise',
        price: '$79.00',
        time: 'Per Month',
        description: 'Advanced features for pros who need more customization.',
      }
    ],
// Sezione lista card
    buy_list: [
      {
        icon: 'far fa-check-circle',
        list: 'Full Access'
      },
      {
        icon: 'far fa-check-circle',
        list: 'Enhanced Security'
      },
      {
        icon: 'far fa-check-circle',
        list: 'Source Files'
      },
      {
        icon: 'far fa-check-circle',
        list: '1 Domain Free'
      },
      {
        icon: 'far fa-check-circle',
        list: 'Enhanced Security'
      }
    ],

    // Footer
    footer: [
      {
        logo: './dist/img/logo-light.png',
        paragraph: 'Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.',
        social: [
          {
            icon: 'fab fa-facebook-f'
          },
          {
            icon: 'fab fa-instagram'
          },
          {
            icon: 'fab fa-twitter'
          },
          {
            icon: 'fab fa-linkedin-in'
          }
        ],
        companylist: [
          {
            icon: 'fas fa-angle-right',
            subtitle: 'About us'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Services'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Team'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Pricing'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Project'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Careers'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: ' Blog'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Login'
          },
        ]
      }
    ]
  },

  mounted() {
    console.log("Ok");
  },
  methods: {

  }
})
