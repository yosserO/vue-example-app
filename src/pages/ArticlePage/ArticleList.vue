<template>
  <div>
    <b-card
      v-for="(photo, id) in articles"
      :key="id"
      :title="photo.title"
      :img-src="photo.src"
      img-top
      tag="article"

      class="mb-2"
    >
      <p class="card-text">
        {{ photo.description }}
      </p>
      <b-button
        variant="info"
        class="mr-2"
        @click="addToBasket(photo)"
      >
        Buy it
      </b-button>
      <b-button
        variant="outline-info"
      >
        Details
      </b-button>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "ArticleList",
    computed: {
      articles: function() {
        return this.$store.getters['articles/articleList'];
      }
    },
    methods: {
      addToBasket: function(photo) {
        // this.$store.dispatch('addToBasket', photo)
        this.$store.dispatch('basket/addToBasket', photo)
        // this.$store.dispatch('basket/addToBasketExample', photo)
      }
    }
  }
</script>

<style scoped>

</style>