import router from './router'
import store from "./store";

router.beforeEach((to, from, next) => {
  let pageType = to.meta.pageType || 'FullPage';
  store.dispatch('updatePageType', pageType);
  next();
})
