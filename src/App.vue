<template>
  
    <router-view />

</template>

<script>
import { ref, provide, onMounted } from 'vue';
import Login from './components/Login/Login.vue';
import axios from 'axios';



export default {
  components: {
    Login
  },
  setup() {
    const dataValue = ref(null);
    const valueCurrentUser = ref(null);
    const displayLogin = ref(false);

    const setCurrentUser = (data) => {
      valueCurrentUser.value = data;
      displayLogin.value = false;
    };

    const logData = () => {
      console.log('valueCurrentUser', valueCurrentUser.value);
      console.log('displayLogin', displayLogin.value); 
    };

    const handleDisplayLogin = (item) => {
      displayLogin.value = item;
    };

    const handleDataCurrentUser = async () => {
      try {
        const token = localStorage.getItem('tokenLogin');
        if(token) {
        const response = await axios.get('http://localhost:8000/api/inforCurrentUser', {
          headers: {
            'Authorization': `Bearer ${token}` 
          }
        });
        valueCurrentUser.value = response.data.data;
        } else {
          valueCurrentUser.value = null;
        }
      
      } catch (error) {
        console.error('Failed to retrieve user info:', error.response.data);
        alert(error.response.data.message);
      }
    };

    onMounted(() => {
      handleDataCurrentUser(); 
    });

    provide('dataValue', dataValue);
    provide('valueCurrentUser', valueCurrentUser);
    provide('setCurrentUser', setCurrentUser);
    provide('handleDisplayLogin', handleDisplayLogin);

    return {
      dataValue,
      valueCurrentUser,
      setCurrentUser,
      logData,
      displayLogin,
    };
  }
};
</script>
