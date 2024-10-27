import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import JobsView from "@/views/JobsView.vue";
import AddJob from "@/views/AddJob.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView,
    },
    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditJobView,
    },
    {
      path: '/add_Job',
      name: 'add_job',
      component: AddJob
    },


    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    },



  ]
})

export default router
