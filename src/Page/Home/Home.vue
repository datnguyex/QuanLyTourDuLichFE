<template>
    <div>
      <h1>Home Page</h1>
      <div v-if="displayErrors">{{ displayErrors }}</div>
      <b-container v-if="displayErrors == null">
        <b-row>
            <b-col v-for="(tour, index) in newesTour" :key="index" cols="3">
            <div>
              <b-card
                :title="tour.name"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  {{ tour.description }}
                </b-card-text>
                <b-button variant="primary">Go somewhere</b-button>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { onMounted, ref } from 'vue';
  
  export default {
    name: 'HomeComponent',
    setup() {
      const newesTour = ref([]);
       const displayErrors = ref(null);
      const getNewesTour = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/displayNewstTour');
          newesTour.value = response.data.data;
          console.log('newesTour', newesTour.value);
        } catch (error) {
          console.error('Failed to retrieve tours:', error.response.data.message);
          displayErrors.value = error.response.data.message;
          console.log('displayErrors.value',displayErrors.value);
        }
      };
  
      onMounted(() => {
        getNewesTour();
      });
  
      return { newesTour,displayErrors };
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import './Home.module.scss'; 
  </style>
  