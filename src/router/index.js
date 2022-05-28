import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'
import EditArticleLayout from "@/layout/EditArticleIndex";
import ArticleLayout from "@/layout/ArticleIndex";
import ArticleDetailLayout from "@/layout/ArticleDetailIndex";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Layout
    },
    {
      path: '/edit',
      name: 'EditArticle',
      component: EditArticleLayout
    },
    {
      path: '/homepage',
      name: 'ArticleIndex',
      component: ArticleLayout
    },
    {
      path: '/detail',
      name: 'ArticleDetailIndex',
      component: ArticleDetailLayout
    }
  ]
})
