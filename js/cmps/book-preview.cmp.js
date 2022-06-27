export default {
    props: ["book"],
    template: `
      <section>
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
    },
  }