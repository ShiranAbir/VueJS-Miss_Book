import bookPreview from "../cmps/book-preview.cmp.js"

export default {
  props: ["books"],
  template: `
 <section class="books-list app-main">
        <ul>
            <li v-for="(book,id) in books" :key="book.id">
                <book-preview :book="book"/>
                <router-link tag="button" :to="'/book/'+book.id"><button>Details</button></router-link>
            </li>
        </ul>
    </section>
`,
  components: {
    bookPreview,
  },

  data() {
    return {}
  },
  methods: {
  },
  computed: {},
}