<template>
  <form @submit.prevent="handleSubmit" action="">
    <h1>Login Form</h1>
    <div class="wrap-parent">
      <div class="parent">
        <input @input="logValue" v-model="username" type="text" />
        <label class="placeholder">{{ errorUsername }}</label>
      </div>
      <div class="parent">
        <input @input="logValue" v-model="password" type="password" />
        <label class="placeholder">{{ errorPassword }}</label>
      </div>
    </div>

    <label for="user">User</label>
    <input @input="logValue" v-model="role" type="radio" value="1" id="user" />
    <label for="someValue">Some Value</label>
    <input @input="logValue" v-model="role" type="radio" value="2" id="someValue" />
    <label for="admin">Admin</label>
    <input @input="logValue" v-model="role" type="radio" value="3" id="admin" />
    
    <div class="placeholder">{{ errorRole }}</div>
    <button type="submit">Submit</button>
  </form>

  <button @click="logValue">valueCurrentUser</button>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'UserLogin',
  props: {
    setCurrentUser: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const username = ref('');
    const password = ref('');
    const role = ref('');
    const errorUsername = ref('');
    const errorPassword = ref('');
    const errorRole = ref('');

    const logValue = () => {
      console.log('valueCurrentUser', props.setCurrentUser);
      console.log('username', username.value);
      console.log('password', password.value);
      console.log('role', role.value);
      console.log('errorUsername', errorUsername.value);
      console.log('errorPassword', errorPassword.value);
      console.log('errorRole', errorRole.value);
    };

    const handleDataCurrentUser = async () => {
      try {
        const token = localStorage.getItem('tokenLogin');
          const response = await axios.get('http://localhost:8000/api/inforCurrentUser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
         console.log('User info retrieved successfully:', response.data.data);
        props.setCurrentUser(response.data.data);
          
      } catch (error) {
        console.error('Failed to retrieve user info:', error.response.data);
        alert(error.response.data.message);
      }
    };

    const handleSubmit = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/login', {
          username: username.value,
          password: password.value,
          role: role.value,
        });
        console.log('login successful:', response.data);
        if (response.data.message === 'login sussesfully') {
          localStorage.setItem('tokenLogin', response.data.token);
          await handleDataCurrentUser();
        }
      } catch (error) {
        console.error('Registration failed:', error.response.data);
        if (error.response && error.response.data) {
          const errors = error.response.data.errors || {};
          errorUsername.value = errors.username ? errors.username[0] : '';
          errorPassword.value = errors.password ? errors.password[0] : '';
          errorRole.value = errors.role ? errors.role[0] : '';
        }
      }
    };

    return {
      username,
      password,
      role,
      errorUsername,
      errorPassword,
      errorRole,
      logValue,
      handleSubmit,
    };
  },
};
</script>

<style lang="scss" module>
@import './Login.module.scss'; 
</style>
