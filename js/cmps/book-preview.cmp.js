export default {
    props: ["book"],
    template: `
      <section class="book-pre">
      <img :src="bookImgUrl">
      <img v-if="book.listPrice.isOnSale" class="sale" src="img/sale-tag.png">
      <p>{{formatedTitle}}</p>
      <p>{{formatedPrice}}</p>
      </section>
  `,
    data() {
      return {};
    },
    methods: {},
    computed: {
      formatedPrice(){
        const amount = this.book.listPrice.amount
        const currency = this.book.listPrice.currencyCode
        return new Intl.NumberFormat('en-US',{ style: 'currency', currency }).format(amount)
      },
      formatedTitle(){
        const title = this.book.title
        return title.charAt(0).toUpperCase() + title.slice(1)
      },
      bookImgUrl() {
        return this.book.thumbnail
      },
    },
  }