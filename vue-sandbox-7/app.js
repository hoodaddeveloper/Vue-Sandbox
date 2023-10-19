/* Create App */
const app = Vue.createApp({
  // data, function
  data() {
    return {
      title: "Marefate Nafs",
      author: "Allameh Hassanzadeh Amoli",
      nationality: "Iranian",
      stars: 5
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    }
  }
})

/* Mount App */
app.mount("#app")