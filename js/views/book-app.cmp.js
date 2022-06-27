import { utilService } from "../services/util-service.js";
import bookList from "../cmps/book-list.cmp.js";
import bookDetails from "./book-details.cmp.js";
import bookFilter from "../cmps/book-filter.cmp.js";

export default {
  props: ["book"],
  template: `
    <book-filter @filtered="filterBook"></book-filter>
    <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook"></book-list>
    <book-details v-if="selectedBook" @close="selectedBook = null" :book="selectedBook"></book-details>
`,
  data() {
    return {
      books: utilService.gBooks,
      selectedBook: null,
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
    bookFilter
  },
  methods: {
    filterBook(filterBy) {
      this.filterBy = filterBy;
    },
    selectBook(book) {
      this.selectedBook = book;
    }
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
}
