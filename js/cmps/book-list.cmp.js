import bookPreview from "../cmps/book-preview.cmp.js"

export default {
  props: ["books"],
  template: `
 <section class="books-list">
        <ul>
            <li v-for="(book,id) in books" :key="book.id">
                <book-preview :book="book"/>
                <button @click="select(book)">Details</button>
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
    select(book){
      console.log('selected: ',book)
      this.$emit("selected", book)
    }
  },
  computed: {},
}