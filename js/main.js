import bookApp from "./views/book-app.cmp.js"
import bookHeader from "./cmps/book-header.cmp.js"
import appFooter from './cmps/app-footer.cmp.js';
import { router } from './router.js';
import userMsg from "./cmps/user-msg.cmp.js";

const options = {
  template: `
        <section>
            <book-header />
            <userMsg />
            <router-view/>
            <app-footer />
        </section>
    `,
  components: {
    bookApp,
    bookHeader,
    appFooter,
    userMsg,

  },
}

const app = Vue.createApp(options)
app.use(router)
app.mount("#app")