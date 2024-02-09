const vm = Vue.createApp({
  data() {
    return {
      firstName: "Hoodad",
      lastName: "Wesker"
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