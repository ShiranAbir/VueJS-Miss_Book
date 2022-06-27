import longText from '../cmps/long-text.cmp.js'
import { eventBus } from '../services/eventBus-service.js'

export default {
  props: ["book"],
  template: `
      <section class="book-details app-main">
          <button class="close-modal" @click="$emit('close')">Close</button>
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
          <button @click="callBus">Call the Bus</button>
      </section>
  `,
  data() {
    return {};
  },
  methods: {
    callBus(){
      console.log('testing');
      eventBus.emit('show-msg', { txt: 'Saved/Update successfully', type: 'success' });
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
  components: {
		longText,
    eventBus,
	},
}