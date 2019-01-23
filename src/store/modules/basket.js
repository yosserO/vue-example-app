import _ from 'lodash'

export default {
  namespaced: true,
  state: {
    articles: [],
    isVisible: false,
  },
  getters: {
    articles: state => state.articles,
    isVisible: state => state.isVisible,
    numberOfArticles: state => _.chain(state.articles)
      .map('count')
      .sum()
      .value(),
    totalAmountToPay: state => _.chain(state.articles)
      .map('price')
      .sum()
      .value(),
},
  actions: {
    addToBasket (context, article) {
      context.commit('add', article)
      context.commit('updateVisibility')
    }
  },
  mutations: {
    add(state, article) {
      const alreadyInBasket = _.find(state.articles, ['id', article.id])

      if (alreadyInBasket) {
        alreadyInBasket.count++
        alreadyInBasket.price += alreadyInBasket.price
      } else {
        const basketArticle = _.cloneDeep(article)
        basketArticle.count = 1
        state.articles.push(basketArticle)
      }
    },
    updateVisibility(state) {
      state.isVisible = !!state.articles.length
    }
  }
}