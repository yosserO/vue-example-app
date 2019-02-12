import _ from 'lodash'

export default {
  namespaced: true, //this.$store.getters[basket/articles]
  // namespaced: false, //this.$store.getters[articles]
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
    exampleGetter: (state, getters, rootState, rootGetters) => {
      const sum = getters.totalAmountToPay
      const loading = rootGetters.isLoading
    }
},
  actions: {
    addToBasket (context, article) {
      context.commit('add', article)
      context.commit('updateVisibility')
    },
    addToBasketExample ({ commit, getters, rootGetters }, article) {
      const visible = getters.isVisible
      const loading = rootGetters.isLoading
      commit('toggleLoading', null, { root: true })
      commit('add', article)
      commit('updateVisibility')
      commit('toggleLoading', null, { root: true })
    },
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
  },
  // nested modules
  modules: {
    // inherits the namespace from parent module
    monthly: {
      state: {
        monthlyArticles: [],
      },
      getters: {
        monthlyArticles: state => state.monthlyArticles, // -> this.$store.getters[basket/monthlyArticles]
      }
    },
    once: {
      namespaced: true,
      state: {
        uniqueArticles: [],
      },
      getters: {
        uniqueArticles: state => state.uniqueArticles, // -> this.$store.getters[basket/once/uniqueArticles]
      }
    }
  }
}