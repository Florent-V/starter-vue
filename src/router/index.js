import { createRouter, createWebHistory } from 'vue-router'
import WelcomeHomeView from '../views/WelcomeHomeView.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import HelloView from '@/views/HelloView.vue'
import NotFound from '@/views/NotFound.vue'
import NProgress from '@/plugins/nprogress'
import DemoProductView from '@/views/Demo/DemoProductView.vue'
import DemoFeaturedCardsView from '@/views/Demo/DemoFeaturedCardsView.vue'
import ProductCrudView_1 from '@/views/ProductCrudView_1.vue'
import ProductCrudView_2 from '@/views/ProductCrudView_2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      meta: {
        title: 'Welcome',
        description: 'This is the Welcome page'
      },
      component: WelcomeHomeView
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: 'Home',
        description: 'This is the Home page'
      },
      component: HomeView
    },
    {
      path: '/product-crud-1',
      name: 'product1',
      meta: {
        title: 'ProductCrudView_1',
        description: 'This is the ProductCrudView_1 page'
      },
      component: ProductCrudView_1
    },
    {
      path: '/product-crud-2',
      name: 'product2',
      meta: {
        title: 'ProductCrudView_2',
        description: 'This is the ProductCrudView_2 page'
      },
      component: ProductCrudView_2
    },
    {
      path: '/hello/:name',
      name: 'hello',
      meta: {
        title: 'Hello',
        description: 'This is the hello page'
      },
      component: HelloView
    },
    {
      path: '/demo-product',
      name: 'demo-product',
      meta: {
        title: 'Demo Product',
        description: 'This is the demo product page'
      },
      component: DemoProductView
    },
    {
      path: '/demo-features',
      name: 'demo-features',
      meta: {
        title: 'Demo Features',
        description: 'This is the Demo Features page'
      },
      component: DemoFeaturedCardsView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About',
        description: 'This is the about page'
      },
      component: AboutView
    },
    {
      path: '/:pathMatch(.*)*', // Correspond à toutes les routes non définies
      name: 'NotFound',
      component: NotFound,
    },
  ]
})

router.beforeEach((to) => {
  const { title, description } = to.meta;
  const defaultTitle = 'Default Title';
  const defaultDescription = 'Default Description';

  document.title = title || defaultTitle

  const descriptionElement = document.querySelector('meta[name="description"]')

  descriptionElement.setAttribute('content', description || defaultDescription)
})

router.beforeEach((to, from) => {
  if (to.path !== from.path)
    NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
