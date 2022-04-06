import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/app/HomeView.vue'
import AddPostView from "@/views/app/AddPostView";
import CategoryPostsView from "@/views/app/CategoryPostsView";
import EditCategoriesView from "@/views/editor/EditCategoriesView";
import EditPostsView from "@/views/editor/EditPostsView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPostView
  },
  {
    path: '/category-posts/:id',
    name: 'category-posts',
    component: CategoryPostsView,
    props: true
  },
  {
    path: '/edit-categories',
    name: 'edit-categories',
    component: EditCategoriesView
  },
  {
    path: '/edit-posts',
    name: 'edit-posts',
    component: EditPostsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
