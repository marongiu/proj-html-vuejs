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
    ]
  },
  mounted() {
    console.log("Ok");
  },
  methods: {

  }
})
