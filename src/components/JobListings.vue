<script setup>
import {onMounted, reactive} from "vue";
import JobListing from "@/components/JobListing.vue";
import axios from "axios";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const state = reactive({
  jobs: [],
  isLoading: true
})

defineProps({
  limit:Number,
  showButton: {
    type: Boolean,
    default: false
  }
})

onMounted( async () => {
  try{
    const response = await axios.get('/api/jobs')
    state.jobs = response.data
  }catch (error){
    console.log('Error Fetching job', error);
  }finally {
    state.isLoading = false;
  }
})
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
<!--      Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center text-gray-500 mb-6 py-6"> <PulseLoader/> </div>


      <div v-else class="grid grid-cols-1 md:grid-cols-3  gap-6">
        <JobListing v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id"  :job="job"/>
      </div>
    </div>

  </section>

  <section class="m-auto max-w-lg my-10 px-6">
    <RouterLink to="jobs" v-if="showButton"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
    >View All Jobs</RouterLink
    >
  </section>

</template>

<style scoped>

</style>