import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/Home';
import Order from '@/components/Order/Order';
import Product from '@/components/Product/Product';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },{
      path: '/product',
      name: 'Product',
      component: Product
    }
  ]
})
