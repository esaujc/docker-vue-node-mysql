<template>
  <div justify="center" align="center">
    <div cols="12" sm="8" md="6">
      <div class="logo py-4 d-flex justify-center">
        <button  @click=getUsers()>Get Employee</button> |
        		<input
              v-model="userId"
              name="userId"
              autocomplete="off"
            > |
        <button @click=clearUsers()>Clear</button>
        
      </div>
      <div class="logo py-4 d-flex justify-center">
        <div v-for="(user, employeeNumber) in users" :key="employeeNumber">
          {{user}}
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GetUsersByIdView',
  components: {
    
  },
  data: () => {
    return {
      users:'',
      userId: ''
    }
  },
  methods: {
    async getUsers() {
      // const ip = await axios.get('http://localhost:3005/api/users').then(response => (this.users = response))
      const ip = await axios.get(`http://${process.env.VUE_APP_BACKEND_URL}/api/users/${this.userId}`)
      this.users = ip.data.data;    
      if (ip.data.data.length === 0)
        this.users = {Message: 'The user do not exist'}
    },
    async clearUsers() {         
      this.users = '';      
    }
  }
}
</script>
