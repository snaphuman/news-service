import Vue from 'vue';
import Router from 'vue-router';

import ListaNoticias from './components/ListaNoticias';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            alias: '/noticias',
            name: 'noticias',
            component: ListaNoticias
        }
    ]
});
