var app = new Vue({
  el: '#root',
  data: {
    email: '',
    visible: false,
    // Scritte navbar centrali
    navbar_center: [
      {
        name: 'Home',
        url: '#'
      },
      {
        name: 'Landing',
        content: 'fa-angle-down',
        url: '#'
      },
      {
        name: 'Pages',
        content: 'fa-angle-down',
        url: '#'
      },
      {
        name: 'Docs',
        content: 'fa-angle-down',
        url: '#'
      }
    ],
    // Icone navbar destra
    navbar_right: [
      {
        prefix: 'fas',
        icon: 'fa-search',
        url: '#'
      },
      {
        prefix: 'fab',
        icon: 'fa-github',
        url: '#'
      },
      {
        prefix: 'fas',
        icon: 'fa-box',
        url: '#'
      },
      {
        prefix: 'far',
        icon: 'fa-user',
        url: '#'
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
        ribbon: '<div class="ribbon ribbon-top-right"><span>Best</span></div>'
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
            icon: 'fab fa-facebook-f',
            url: 'https://it-it.facebook.com/'
          },
          {
            icon: 'fab fa-instagram',
            url: 'https://www.instagram.com/'
          },
          {
            icon: 'fab fa-twitter',
            url: 'https://twitter.com/?lang=it'
          },
          {
            icon: 'fab fa-linkedin-in',
            url: 'https://www.linkedin.com/'
          }
        ],
        companylist: [
          {
            title: 'Company'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'About us',
            url: '#'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Services',
            url: '#'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Team',
            url: '#'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Pricing',
            url: '#'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Project',
            url: '#'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Careers',
            url: '#'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Blog',
            url: '#'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Login',
            url: '#'
          },
        ],
        usefull_link: [
          {
            title: 'Usefull link'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Terms of Services',
            url: '#'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Privacy Policy',
            url: '#'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Documentation',
            url: '#'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Changelog',
            url: '#'
          },
          {
            icon: 'fas fa-angle-right',
            subtitle: 'Components',
            url: '#'
          },
        ],
        newsletter: [
          {
            title: 'Newsletter',
            paragraph: 'Sign up and receive the latest tips via email.',
            email_title: 'Write your email *',
            placeholder: '         Your Email :',
            button: 'Subscribe',
            iconmessage: 'far fa-envelope'
          }
        ],

        copyright: [
          {
            title: '© 2021 Landrick. Design with <i class="fas fa-heart"></i> by Shreethemes.',
            images: [
              {
                card: './dist/img/american-ex.png'
              },
              {
                card: './dist/img/discover.png'
              },
              {
                card: './dist/img/master-card.png'
              },
              {
                card: './dist/img/paypal.png'
              },
              {
                card: './dist/img/visa.png'
              },
            ]
          }
        ]
      }
    ]
  },

  mounted() {
    console.log("Ok");
  },
  methods: {
    dropdown: function () {
      this.visible = true;
      console.log(this.visible);
    }

  }
})
