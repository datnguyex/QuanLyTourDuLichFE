<template>
    <button @click="logValue">Click</button>
    <b-container class="bv-example-row">
     <b-row class="text-center">
    <b-col cols="4">2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
  <div v-if="valueTour">{{valueTour.name}}</div>
  <div v-if="valueTour">{{valueTour.description}}</div>
  <div v-if="valueTour">{{valueTour.duration}}</div>
  <button @click="bookTour(valueTour.id)">BookTour</button>
</b-container>
  
</template>
<script>

import { ref,onMounted } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import axios from 'axios';

export default {
    name: 'DetailComponent', 
   
    setup() {
        const tourID = ref(null);
        const route = useRoute(); 
        const valueTour = ref(null);
        const errorValue = ref(null);
        const router = useRouter();
        const getDetailTour = async () => {
        try {
            console.log('Tour ID:', tourID); 
            const response = await axios.get('http://localhost:8000/api/TourDetail', {
            params: {
                tour_id: tourID.value
            }
            });
            console.log('Response data:', response.data.data);
            valueTour.value = response.data.data
        
        } catch (error) {
            console.error('Failed to retrieve tours:',error.response.data.error);
            errorValue.value = error.response.data.error   
        }
        };

        const bookTour = (id) => {
            router.push({ name: 'Booking', params: { id } });
        }
        onMounted(() => {
            tourID.value = route.params.id;
            getDetailTour();
        });
        const logValue = () => {
            // console.log('tourID',tourID);
            console.log('valueTour',valueTour.value.name);
        }
        return {tourID,logValue,getDetailTour,valueTour,bookTour}
    }
}
</script>