<template>
    <div>
      <h1>More infomation Form</h1>
     <form @submit.prevent="handleSubmit">
     <div class="wrap-parent">
      <div class="parent">
        <input @input="logUsername" type="text" v-model="day" :placeholder="errorDay">
        <label class="placeholder">{{ errorDay }}</label>
      </div>
      <div class="parent">
        <input @input="logUsername" type="text" v-model="month" :placeholder="errorMonth">
        <label class="placeholder">{{ errorMonth }}</label>
      </div>
      <div class='parent'>
        <input @input="logUsername" type="text" v-model="year" :placeholder="errorYear">
        <label class="placeholder">{{ errorYear }}</label>
      </div>
     </div>
       <select v-model="gender" name="" id="">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
       </select>
       <div>{{errorGender}}</div>
       <button type="submit">Submit</button>
     </form>
     <form @submit.prevent="handleSubmitMainInformation">
        <button type="submit">skip</button>
     </form>
    </div>
   </template>
   
   
   <script>
  import axios from 'axios';
  
   export default {
     name: 'MoreInfomation',
     
     props: {
       password: {
         type: Function,
         required: true,
       },
       username: {
         type: String, 
         required: true, 
       },
       role: {
         required: true, 
       },
       
     },

     data() {
       return {
         day: '',
         month: '',
         year: '',
         gender: '',
         errorDay: '',
         errorMonth: '',
         errorYear: '',   
         errorGender: '',
       };
     },  
   
     methods: {
       logUsername() {
         console.log('day:', this.day)
         console.log('month:', this.month)
         console.log('year:', this.year)
         console.log('gender:', this.gender)
         console.log('username:', this.username)
         console.log('password:', this.password)
       
       },
       props: {
        setSwicth: {
        type: Function,
        required: true,
      },
    
    },
       async handleSubmit() {
        try {
          const response = await axios.post('http://localhost:8000/api/RegistermoreInfomation', {
            day: parseInt(this.day, 10),  
            month: parseInt(this.month, 10),
            year: parseInt(this.year, 10),
            gender: this.gender,
            username: this.username,
            password: this.password,
            role: this.role,
          });
          console.log('Registration successful:', response.data);
          this.setSwicth = response.data.swicth;
          console.log('setSwicth:', this.setSwicth);
       
        } catch (error) { 
              console.error('Registration failed:', error.response.data);
              if (error.response && error.response.data) {
              const errors = error.response.data.errors || {};
              this.errorDay = errors.day ? errors.day[0] : "";
              this.errorMonth = errors.month ? errors.month[0] : "";
              this.errorYear = errors.year ? errors.year[0] : "";
              this.errorGender = errors.gender ? errors.gender[0] : "";
          } 
          
        }
     },
     async handleSubmitMainInformation() {
        try {
          const response = await axios.post('http://localhost:8000/api/registerMainInfo', {
            username: this.username,
            password: this.password,
            role: this.role,
          });
          console.log('Registration successful:', response.data);
          this.setSwicth = response.data.swicth;
          console.log('setSwicth:', this.setSwicth);
       
        } catch (error) { 
              console.error('Registration failed:', error.response.data);
          } 
          
        }
     },
   }
   
  
   </script>