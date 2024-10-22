<template>
    <div>
      <h1>SendCode Form</h1>
     <form @submit.prevent="handleSubmit">
       <input @input="logUsername" type="text" v-model="code" :placeholder="errorCode">
       <button type="submit">Submitzzzz</button>
     </form>
    </div>
   </template>
   
   
   <script>
   import axios from 'axios';
   
   export default {
     name: 'SendConfirmation',
     
     props: {
       setSwicth: {
         type: Function,
         required: true,
       },
       username: {
         type: String, 
         required: true, 
       },
     },
   
     data() {
       return {
         code: '',
         errorCode: '',
       };
     },  
   
     methods: {
       logUsername() {
         console.log('code:', this.code);
         console.log('username:', this.username);
       },
   
       async handleSubmit() {
         try {
           const response = await axios.post('http://localhost:8000/api/sendCode', {
             username: this.username,
             confirmCode: this.code,
           });
           console.log('Registration successful:', response.data);
           this.setSwicth(response.data.swicth); 
         } catch (error) { 
           console.error('Registration failed:', error.response.data);
           if (error.response && error.response.data) {
             const errors = error.response.data.errors || {};
             this.errorCode = errors.confirmCode ? errors.confirmCode[0] : "";
           } 
          
         }
       }
     }
   }
   </script>
   