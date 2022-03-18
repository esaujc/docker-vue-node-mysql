<template>
  <div justify="center" align="center">
    <div cols="12" sm="8" md="6">
      <div class="logo py-4 d-flex justify-center">
        <button  @click=deleteUser()>Delete Employee</button> 
        		<input
              v-model="employeeNumber"
              name="employeeNumber"
              autocomplete="off"
            > 
        <div></div>        
      </div>
      <div>
        {{this.message}}
      </div>


    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DeleteUsersByIdView',
  components: {
    
  },
  data: () => {
    return {
      users:'',
      employeeNumber: '',
      message: ''
    }
  },
  methods: {
    async deleteUser() {
      const headers = {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8;'
      }
      const data = {
        employeeNumber: this.employeeNumber
      }
      if (this.employeeNumber !== ''){
        // const ip = await axios.get('http://localhost:3005/api/users').then(response => (this.users = response))
        // await axios.delete(`http://${process.env.VUE_APP_BACKEND_URL}/api/users`, {employeeNumber: this.employeeNumber})     
        await axios.delete(`http://${process.env.VUE_APP_BACKEND_URL}/api/users`,  {data} )     
        
        
        this.message = 'Employee deleted successfully';
      }
      else
        this.message = 'Employee id is required'
    },
    async clearUsers() {         
      this.users = '';      
    }
  }
}
</script>
