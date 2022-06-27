export default {
  props: ["book"],
  template: `
      <section class="book-details">
          <h1>{{book.title}}</h1>
          <h2>Subtitle:{{book.subtitle}}</h2>
          <p>Description:{{book.description}}</p>
          <p> Pages: <span>{{book.pageCount}}</span> <span>{{pageCountMsg}}</span></p>
          <p> Price <span>{{priceToDisplay}}</span></p>
          <p>By: <span v-for="author in book.authors"><a href="#">{{author}} </a></span></p>
          <p> Publish Date <span> {{book.publishedDate}}</span> <span>{{publishDateMsg}}</span></p>
          <div class="categories-modal">Categories <a href="#" v-for="category in book.categories">{{category}} </a></div>
          <p>Language: {{book.language}}</p>
          <img :src="bookImgUrl">
      </section>
  `,
  data() {
    return {};
  },
  methods: {
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
  },
}