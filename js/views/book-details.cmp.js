import longText from '../cmps/long-text.cmp.js'
import { bookService } from '../services/book-service.js'
import { eventBus } from '../services/eventBus-service.js'


export default {
  template: `
      <section v-if="book" class="book-details app-main">
          <button class="close-modal" @click="closeDetails">Close</button>
          <h1>{{book.title}}</h1>
          <h2>Subtitle:{{book.subtitle}}</h2>
          <long-text :text="book.description"></long-text>
          <p> Pages: <span>{{book.pageCount}}</span> <span>{{pageCountMsg}}</span></p>
          <p> Price <span :class="priceClass">{{priceToDisplay}}</span></p>
          <p>By: <span v-for="author in book.authors">{{author}}</span></p>
          <p> Publish Date <span> {{book.publishedDate}}</span> <span>{{publishDateMsg}}</span></p>
          <div class="categories-modal">Categories <span v-for="category in book.categories">{{category}} </span></div>
          <p>Language: {{book.language}}</p>
          <img :src="bookImgUrl">
          <img v-if="book.listPrice.isOnSale" class="sale" src="img/sale-tag.png">
          <!-- <button @click="callBus">Call the Bus</button> -->
          <div class="reviews">
            <h3>Book reviews</h3>
            <form>
              <label>Full name
              <input type="text" placeholder="Books Reader">
              </label>
              <label>Read at
              <input type="date" value="2022-06-28">
              </label>
              <label>Rate
                <select>
                <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                </select>
              </label>
              <label>Tell us more
              <input type="text">
              </label>
              <button @click="callBus" class="submit-btn" @click="submit">Submit</button>
            </form>
          </div>
      </section>
  `,
  data() {
    return {
      book: null
    };
  },
  methods: {
    callBus() {
      eventBus.emit('show-msg', { txt: 'Rated successfully', type: 'success' });
    },
    closeDetails() {
      location.assign("http://127.0.0.1:5501/index.html#/book")
    }
  },
  computed: {
    bookImgUrl() {
      return this.book.thumbnail
    },
    priceToDisplay() {
      return new Intl.NumberFormat('en-EN', { style: 'currency', currency: this.book.listPrice.currencyCode }).format(this.book.listPrice.amount)
    },
    pageCountMsg() {
      const pageCount = this.book.pageCount
      if (pageCount > 500) return ' Long reading'
      else if (pageCount > 200) return ' Decent reading'
      else if (pageCount < 100) return ' Light reading'
    },
    publishDateMsg() {
      const currentYear = new Date().getFullYear()
      const publishYear = this.book.publishedDate
      const diff = currentYear - publishYear
      if (diff > 10) return ' Veteran book'
      else if (diff < 1) return ' New!'
    },
    priceClass() {
      const price = this.book.listPrice.amount
      if (price > 150) return 'red'
      else if (price < 20) return 'green'
    },
  },
  created() {
    const id = this.$route.params.bookId
    bookService.get(id).then(book => this.book = book)
  },
  components: {
    longText,
    eventBus,
  },
}