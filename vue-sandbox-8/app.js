const vm = Vue.createApp({
  data() {
    return {
      firstName: "Hoodad",
      lastName: "Wesker",
      url: "https://google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>'
    }
  },
  /* Return the full name */
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`
    }
  },
}).mount("#app")

/* Set Timeout */
/* setTimeout(() => {
  vm.firstName = "Ali".toUpperCase()
}, 2000); */