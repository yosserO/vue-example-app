import _ from 'lodash'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        articles: [
            {
                id: 'photography1',
                title: 'Loneliness',
                src: 'https://picsum.photos/600/300/?image=200',
                price: 20
            },
            {
                id: 'photography2',
                title: 'Forest',
                src: 'https://picsum.photos/600/300/?image=560',
                price: 10
            }
        ],
        basket: [],
        isVisible: false,
    },
    getters: {
        articleList: state => state.articles,
        articleById: (state) => (id) => {
            return _.find(state.articles, ['id', id])
        },
        numberOfArticles: state => _.chain(state.basket)
            .map('count')
            .sum()
            .value(),
        totalAmountToPay: state => _.chain(state.basket)
            .map('price')
            .sum()
            .value(),
    },
    actions: {
        addToBasket (context, article) {
            context.commit('add', article)
            context.commit('updateVisibility')
        },
        addToBasketExample ({ commit, getters }, article) {
            const visible = getters.isVisible
            commit('add', article)
            commit('updateVisibility')
        },
    },
    mutations: {
        add(state, article) {
            const alreadyInBasket = _.find(state.basket, ['id', article.id])

            if (alreadyInBasket) {
                alreadyInBasket.count++
                alreadyInBasket.price += alreadyInBasket.price
            } else {
                const basketArticle = _.cloneDeep(article)
                basketArticle.count = 1
                state.basket.push(basketArticle)
            }
        },
        updateVisibility(state) {
            state.isVisible = !!state.basket.length
        }
    },
})