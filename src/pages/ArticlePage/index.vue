<template>
  <b-container>
    <b-row>
      <b-col>
        <article-list />
      </b-col>
      <b-col>
        <app-basket v-if="visibleBasket" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import ArticleList from './ArticleList'
  import AppBasket from '@/components/basket/AppBasket.vue'

  export default {
    name: "ArticlePage",
    components: {
      ArticleList,
      AppBasket
    },
    computed: {
      visibleBasket: function() {
        return this.$store.getters['basket/isVisible']
      }
    }
  }
</script>

<style scoped>

</style>