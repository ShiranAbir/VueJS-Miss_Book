import { utilService } from "../services/util-service.js"
import bookList from "../cmps/book-list.cmp.js"
import bookDetails from "./book-details.cmp.js"
import bookFilter from "../cmps/book-filter.cmp.js"
import { bookService } from '../services/book-service.js'

export default {
  props: ["book"],
  template: `
    <book-filter @filtered="filterBook"></book-filter>
    <book-list :books="booksToShow"></book-list>
    <book-details></book-details>
`,
  data() {
    return {
      books: utilService.gBooks,
      filterBy: {
        byName: null,
        fromPrice: null,
        toPrice: null
      },
    }
  },
  components: {
    bookList,
    bookDetails,
    bookFilter,
  },
  methods: {
    filterBook(filterBy) {
      this.filterBy = filterBy;
    },
  },
  computed: {
    booksToShow() {
      var books = this.books
      if (this.filterBy.byName){
        books = books.filter(book => book.title.startsWith(this.filterBy.byName.toLowerCase()))
      }
      if (this.filterBy.fromPrice){
        books = books.filter(book => book.listPrice.amount > this.filterBy.fromPrice)
      }
      if (this.filterBy.toPrice){
        books = books.filter(book => book.listPrice.amount < this.filterBy.toPrice)
      }
      return books
    },
  },
  created() {
    bookService.query().then(books => this.books = books)
},
}
