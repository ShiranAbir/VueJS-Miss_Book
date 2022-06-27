
export default {
    template: `
    <section class="filterSection">
        <input placeholder="Min Price" type="number" v-model="filterBy.fromPrice" @change="filtered">
        <input placeholder="Max Price" type="number" v-model="filterBy.toPrice" @change="filtered">
        <input placeholder="Book Title" type="text" v-model="filterBy.byName" @change="filtered">
    </section>
  `,
    components: {},
    data() {
      return {
        filterBy: {
            byName: null,
            fromPrice:null,
            toPrice:null,
          }
      }
    },
    methods: {
        filtered(){
            this.$emit("filtered", this.filterBy)
        },
    },
    computed: {},
  }