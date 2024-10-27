<template>
    <div>
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
                <b-button @click="handleAddTourToFavorite(tour.id)" variant="primary">Add to Favorite</b-button>
                <!-- <b-button @click="logValue" variant="primary">log</b-button> -->
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
  import { inject } from 'vue';

  export default {
    name: 'HomeComponent',
    setup() {
      const valueCurrentUser = inject('valueCurrentUser');
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
      const handleAddTourToFavorite = async (tour_id) => {
    try {
        const response = await axios.post('http://localhost:8000/api/addTourToFavorite', {
            'user_id': valueCurrentUser.value.id,
            'tour_id': tour_id,
        });
      alert(response.data.message);
    } catch (error) {
        if (error.response) {
            console.error('Failed to retrieve tours:', error.response.data);
            alert(error.response.data.message)
        } else {
            console.error('Error:', error.message);
        }
    }
};
  const logValue = () => {
    console.log('valueCurrentUser',valueCurrentUser);
  }
      onMounted(() => {
        getNewesTour();
      });
  
      return { newesTour,displayErrors,handleAddTourToFavorite,logValue };
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import './Home.module.scss'; 
  </style>
  