import Vue from 'vue';
import Router from 'vue-router';
import ArticlePage from '@/pages/ArticlePage';

Vue.use(Router);

export default new Router({
    routes: [
      {
        path: '/',
        name: 'ArticlePage',
        component: ArticlePage,
      }
    ],
});
