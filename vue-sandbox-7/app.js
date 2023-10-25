/* Create App */
const app = Vue.createApp({
  // data, function
  data() {
    return {
      showBook: true,
      title: "Marefate Nafs",
      author: "Allameh Hassanzadeh Amoli",
      nationality: "Iranian",
      stars: 5
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title
    },
    hideBook() {
      this.title = ""
    }
  }
})

/* Mount App */
app.mount("#app")