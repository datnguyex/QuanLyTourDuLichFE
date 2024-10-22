<template>
  <div>
    <!-- Check if switch is empty or falsy -->
    <h1 v-if="swicth == ''">Register Form</h1>
    <form v-if="swicth == ''" @submit.prevent="handleSubmit">
      <label class="placeholder">{{ errorUsername }}</label>
      <input 
        class="input"
        @input="logUsername" 
        type="text" 
        v-model="username" 
      />
      <input 
        type="password" 
        v-model="password" 
        :placeholder="errorPassword" 
      />
      <div>{{ username }}</div>
      <button type="submit">Submit</button>

      <div>
        <input v-model="role" type="radio" value="1" id="admin" />
        <label for="admin">Admin</label>

        <input v-model="role" type="radio" value="2" id="someValue" />
        <label for="someValue">Some Value</label>

        <input v-model="role" type="radio" value="3" id="user" />
        <label for="user">User</label>
      </div>

      <div>{{ errorRole }}</div>
    </form>
  
    <SendConfirmation :username="username" :setSwicth="setSwicth"  v-if="swicth == 'send code'"></SendConfirmation>
    <MoreInfomation :username="username" :role="role"  :password="password" v-if="swicth=='more infomation'"></MoreInfomation>
   
  </div>
</template>


<script>

import axios from 'axios';
import SendConfirmation from '../SendConfirmation/SendConfirmation.vue';
import MoreInfomation from '../moreInfomation/moreInfomation.vue';
export default {
  components: {
    SendConfirmation,
    MoreInfomation
  },
  name: 'UserLogin',
  
  data() {
    return {
      username: '',
      password: '',
      role:'',
      errorUsername:'',
      errorPassword:'',
      errorRole:'',
      swicth:'',
    };
  },  

  methods: {
    logUsername() {
      console.log('username:', this.username);
      console.log('password:', this.password);
      console.log('errorPassword:', this.errorPassword);
      console.log('errorUsername:', this.errorUsername);
      console.log('role:', this.role);
    },

    setSwicth(item) {
      this.swicth = item;
    },

    async handleSubmit() {
      try {
        const response = await axios.post('http://localhost:8000/api/mainInformation', {
          username: this.username,
          password: this.password,
          role: this.role,
        });
        console.log('Registration successful:', response.data);
        this.swicth = response.data.swicth; 
      } catch (error) {
    
        console.error('Registration failed:', error.response.data);
                if (error.response && error.response.data) {
            const errors = error.response.data.errors || {};

            this.errorUsername = errors.username ? errors.username[0] : "";
            this.errorPassword = errors.password ? errors.password[0] : "";
            this.errorRole = errors.role ? errors.role[0] : "";
        } 
       
      }
    }
  }
}

</script>
<style lang="scss" scoped>
@import './Register.module.scss'; 
</style>