<template>
  <div justify="center" align="center">
    <div cols="12" sm="8" md="6">
      <div class="logo py-4 d-flex justify-center">
        <button  @click=postUser()>Create Employee</button>  
      </div>
      <div>
        employeeNumber: <input v-model="employeeNumber" name="employeeNumber" autocomplete="off"> |
        lastName: <input v-model="lastName" name="lastName"> |
        firstName: <input v-model="firstName" name="firstName"> |
        extension: <input v-model="extension" name="extension"> |
      </div>
      <div>
        email: <input v-model="email" name="email"> |
        officeCode: <input v-model="officeCode" name="officeCode"> |
        reportsTo: <input v-model="reportsTo" name="reportsTo"> |
        jobTitle: <input v-model="jobTitle" name="jobTitle"> |
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
  name: 'PostUserView',
  components: {
    
  },
  data: () => {
    return {
      message: '',
      employeeNumber: '',
      lastName:"",
      firstName: "",
      extension: "",
      email: "",
      officeCode: "",
      reportsTo: "",
      jobTitle: ""
    }
  },
  methods: {
    async postUser() {
    
    if (this.employeeNumber !== ''){
      const payload = {
        employeeNumber: this.employeeNumber,
        lastName:this.lastName,
        firstName: this.firstName,
        extension: this.extension,
        email: this.email,
        officeCode: this.officeCode,
        reportsTo: this.reportsTo,
        jobTitle: this.jobTitle
      }
      
      const result = await axios.post(`http://${process.env.VUE_APP_BACKEND_URL}/api/users`, payload)
      this.message = result.data.data;
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
