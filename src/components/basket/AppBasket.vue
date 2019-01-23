<template>
  <div>
    <h4>
      Basket <b-badge class="pull-right">
        {{ numberOfArticles }} Articles
      </b-badge>
    </h4>
    <b-table
      :items="articles"
      :fields="fields"
    />
    <h6>
      Total Amount in Basket <b-badge variant="info">
        {{ totalAmountToPay }} €
      </b-badge>
    </h6>
  </div>
</template>

<script>
  export default {
    name: "AppBasket",
    data () {
      return {
        fields: ['title', 'count', 'price']
      }
    },
    computed: {
      articles: function() {
        return this.$store.getters['basket/articles'];
      },
      numberOfArticles: function() {
        return this.$store.getters['basket/numberOfArticles']
      },
      totalAmountToPay: function() {
        return this.$store.getters['basket/totalAmountToPay']
      }
    }
  }
</script>

<style scoped>
  .pull-right {
    float: right
  }
</style>