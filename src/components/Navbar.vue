<script setup>
import '@/assets/img/logo.png'
import Router from "@/router/index.js";
import {useRoute} from "vue-router";

const isActiveLink = (routePath) =>{
  const route = useRoute();
  return route.path === routePath;
}
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <a class="flex flex-shrink-0 items-center mr-4" href="index.html">
            <img class="h-10 w-auto" src="../assets/img/logo.png" alt="Vue Jobs" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
            >Vue Jobs</span
            >
          </a>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/" :class="[isActiveLink('/') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white text-white','text-white', 'px-3', 'py-2', 'rounded-md']">Home</RouterLink>

              <RouterLink to="jobs" :class="[isActiveLink('/jobs') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']">Jobs</RouterLink>

              <RouterLink to="/add_Job" :class="[isActiveLink('/add_Job') ? 'bg-green-900' : 'hover:bg-gray-900 hover:text-white text-white', 'text-white', 'px-3', 'py-2', 'rounded-md']">Add Job</RouterLink>


            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<style scoped>

</style>