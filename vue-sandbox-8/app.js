const vm = Vue.createApp({
  data() {
    return {
      firstName: "Hoodad",
      lastName: "Wesker"
    }
  }
}).mount("#app")

setTimeout(() => {
  vm.firstName = "Ali"
}, 2000);