<template>
    <!-- /// -->
    <div class="max-w-6xl mx-auto p-4" id="app">
        <div v-if="errorValue" class="alert alert-danger mt-3">
            <p>Error: {{ errorValue }}</p>
        </div>
   <div class="bg-blue-700 text-white p-4 rounded-lg">
    <div class="text-sm mb-2">
     <!-- <a class="text-white" href="#">
      Xperience
     </a>
     /
     <a class="text-white" href="#">
      Việt Nam
     </a>
     /
     <a class="text-white" href="#">
      Tỉnh Kiên Giang
     </a>
     /
     <a class="text-white" href="#">
      Phú Quốc
     </a>
     /
     <a class="text-white" href="#">
      xã Hòn Thơm
     </a> -->
     
     <a class="text-lime-400" href="#">
        <div v-if="valueTour">{{valueTour.name}}</div>
     </a>
    </div>
    <h1 class="text-3xl font-bold mb-2">
        <div v-if="valueTour">{{valueTour.name}}</div>
    </h1>
    <div class="flex items-center mb-4">
     <i class="fas fa-map-marker-alt mr-2">
     </i>
     <span>
      Gam Ghi island, Hòn Thơm, Phu Quoc, Kien Giang, Vietnam
     </span>
     <a class="text-lime-400 ml-2" href="#">
      Xem bản đồ
     </a>
    </div>
    <div class="flex items-center mb-4">
     <i class="fas fa-calendar-alt mr-2">
     </i>   
     <span>
      Thời gian tour |   <span v-if="valueTour">{{valueTour.duration}}</span>
     </span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
     <div class="relative">
      <img 
         class="w-full h-full object-cover rounded-lg" height="400"  width="600"
        v-if="valueTour && valueTour.images && valueTour.images.length > 0" 
        :src="`http://localhost:8000/${valueTour.images[0].image_url}`" 
        :alt="valueTour.images[0].alt_text" 
        />
     </div>
     <div class="grid grid-cols-2 gap-4">
        <img 
         class="w-full h-full object-cover rounded-lg" height="300"  width="200"
        v-if="valueTour && valueTour.images && valueTour.images.length > 0" 
        :src="`http://localhost:8000/${valueTour.images[1].image_url}`" 
        :alt="valueTour.images[1].alt_text" 
        />
        <img 
         class="w-full h-full object-cover rounded-lg" height="400"  width="600"
        v-if="valueTour && valueTour.images && valueTour.images.length > 0" 
        :src="`http://localhost:8000/${valueTour.images[2].image_url}`" 
        :alt="valueTour.images[2].alt_text" 
        />
        <img 
         class="w-full h-full object-cover rounded-lg" height="400"  width="600"
        v-if="valueTour && valueTour.images && valueTour.images.length > 0" 
        :src="`http://localhost:8000/${valueTour.images[3].image_url}`" 
        :alt="valueTour.images[3].alt_text" 
        />
      <div class="relative">
        <img 
         class="w-full h-full object-cover rounded-lg" height="400"  width="600"
        v-if="valueTour && valueTour.images && valueTour.images.length > 0" 
        :src="`http://localhost:8000/${valueTour.images[4].image_url}`" 
        :alt="valueTour.images[4].alt_text" 
        />
      </div>
     </div>
    </div>
    <div class="flex items-center justify-between mt-4">
     <div class="flex items-center">
      <div class="bg-blue-800 text-white rounded-full px-3 py-1 text-lg font-bold">
       8.8
      </div>
      <div class="ml-2">
       <div class="text-lg font-bold">
        Tốt
       </div>
       <div class="text-sm">
        Từ 49 đánh giá
       </div>
      </div>
     </div>
     <div class="flex items-center">
      <i class="fas fa-map-marker-alt text-blue-800 mr-2">
      </i>
      <a class="text-blue-800 text-lg" href="#">
       Xem bản đồ
      </a>
     </div>
     <div class="text-lg">
        <div v-if="valueTour">{{valueTour.name}}</div>
     </div>
    </div>
   </div>
   <div class="bg-white p-4 rounded-lg mt-4 flex items-center justify-between">
    <div class="text-red-600 text-2xl font-bold">
        <div>
            <p v-if="valueTour">{{ formatPrice(valueTour.price) }} VND</p>
        </div>
    </div>
    <!-- <div class="text-gray-500 line-through">
     650.000 VND
    </div> -->
    <button @click="bookTour(tourID)" class="bg-orange-500 text-white px-4 py-2 rounded-lg">
        Đặt vé
    </button>
   </div>
  </div>
  
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
        
        // const getImage = ($urlImage) => {
        //     return `http://localhost:8000/images/${$urlImage}`
        // }
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
            router.push({ name: 'Bookingticket', params: { id } });
        }
        onMounted(() => {
            tourID.value = route.params.id;
            getDetailTour();
        });
        const formatPrice = (price) => {
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        }
        const logValue = () => {
            console.log('tourID',tourID);
            console.log('errorValue',errorValue);
            console.log('valueTour',valueTour.value);
            
        }
        return {tourID,logValue,getDetailTour,valueTour,bookTour,errorValue,formatPrice}
    }
}
</script>
<style lang="scss" module>
@import './Detail.module.scss'; 
</style>
