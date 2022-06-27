import bookApp from "./views/book-app.cmp.js"
import bookHeader from "./cmps/book-header.cmp.js"

const options = {
  template: `
        <section>
            <book-header />
            <book-app />
        </section>
    `,
  components: {
    bookApp,
    bookHeader,

  },
}

const app = Vue.createApp(options)
app.mount("#app")