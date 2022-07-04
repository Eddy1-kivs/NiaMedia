require('./bootstrap');

import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import { Link } from "@inertiajs/inertia-vue"
import { Head } from "@inertiajs/inertia-vue"
import { InertiaProgress } from '@inertiajs/progress'

Vue.use(Vuetify);

createInertiaApp({
  title: title => `${title} - My App`,
  resolve: async name => {
    let page = (await import(`./Pages/${name}`)).default;

    return page;

  },
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)
      .use(require('vue-moment'))
      .component('Link', Link)
      .component('Link', Head)


    new Vue({
      vuetify: new Vuetify({
        theme: {
          themes: {
            light: {
              main: '#f5f5f5',
              background: '#edeff0',
              drawer: '#2a3042',
              verify: '#f6f8fc',
              // nav: '#1c1c27',
              nav: '#3e474f',
              tag: '#28293d',
            },
          },
        },
        icons: {
          iconfont: 'mdi', // default - only for display purposes
        },
      }),
      render: h => h(App, props),
    }).$mount(el)
  },
});

InertiaProgress.init({
  color: 'red',
  includeCSS: true,
  showSpinner: false,
})