import _ from 'lodash'

export default {
  namespaced: true,
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
  },
  getters: {
    articleList: state => state.articles,
    articleById: (state) => (id) => {
      return _.find(state.articles, ['id', id]) // -> this.$store.getters.articleById('photography2')
    }
  },
}