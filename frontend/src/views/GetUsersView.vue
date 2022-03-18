<template>
  <div justify="center" align="center">
    <div cols="12" sm="8" md="6">
      <div class="logo py-4 d-flex justify-center">
        <button  @click=getUsers()>Get Employers</button>
        <button @click=clearUsers()>Clear Employers</button>
        
      </div>
      <div class="logo py-4 d-flex justify-center">
        <div v-for="(user) in users" :key="user.employeeNumber">
          {{user}}
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GetUsersView',
  components: {
    
  },
  data: () => {
    return {
      users:''
    }
  },
  methods: {
    async getUsers() {
      // const ip = await axios.get('http://localhost:3005/api/users').then(response => (this.users = response))
      const ip = await axios.get(`http://${process.env.VUE_APP_BACKEND_URL}/api/users`)
      this.users = ip.data.data;      
    },
    async clearUsers() {         
      this.users = '';      
    }
  }
}
</script>
