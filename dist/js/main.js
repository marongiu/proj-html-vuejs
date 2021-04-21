var app = new Vue({
  el: '#root',
  data: {
    navbar: [
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
    ]
  },
  mounted() {
    console.log("Ok");
  },
  methods: {

  }
})
