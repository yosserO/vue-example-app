import Vue from 'vue';
import Vuex from 'vuex';

import articles from './modules/articles'
import basket from './modules/basket'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loading: false,
    maintenance: {
      visible: 'false',
      message: 'Sorry, we are down for scheduled maintenance. We expect to be back in a couple of hours.'
    }
  },
  getters,
  actions,
  mutations,
  modules: {
    articles,
    basket,
  }
});