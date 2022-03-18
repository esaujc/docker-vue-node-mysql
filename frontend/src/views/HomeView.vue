<template>
  <div class="home">
    
    <HomeIndex msg="API MYSQL API Connection"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeIndex from '@/components/HomeIndex.vue'

export default {
  name: 'HomeView',
  components: {
    HomeIndex
  }
}
</script>
