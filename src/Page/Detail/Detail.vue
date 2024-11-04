<template>
    <!-- <button @click="logValue">Click</button>
    <b-container class="bv-example-row">
     <b-row class="text-center">
    <b-col cols="4">2 of 3</b-col>
    <b-col>3 of 3</b-col>
  </b-row>
  <div v-if="valueTour">{{valueTour.name}}</div>
  <div v-if="valueTour">{{valueTour.description}}</div>
  <div v-if="valueTour">{{valueTour.duration}}</div>
  <button @click="bookTour(valueTour.id)">BookTour</button>
</b-container> -->
<div v-if="errorValue">{{ errorValue}}</div>
    <div v-if="!errorValue" :class="$style.wrapper">
           <!-- <button @click="logValue">Click</button> -->
        <h1 v-if="valueTour" :class="$style.tourName">{{valueTour.name}}</h1>
        <div :class="$style.wrapTag">
            <div :class="$style.tag1">
                Bán chạy
            </div>
            <div :class="$style.tag1">
               Tiếng hoa/Tiếng Anh
            </div>
            <div :class="$style.tag1">
              Tour ghép
            </div>
            <div :class="$style.tag1">
               Gặp hướng dẫn
            </div>
            <div :class="$style.tag1">
              Thời lương: <span v-if="valueTour">{{valueTour.duration}}</span>
            </div>
            <div :class="$style.tag1">
              Địa điểm: <span v-if="valueTour">{{valueTour.location}}</span>
            </div>
        </div> 
        <div :class="$style.wrapImg">
            <div :class="$style.imgLeft">
                <img 
                     :class="$style.item"
                     v-if="valueTour" 
                     :src="`http://localhost:8000/${valueTour.images[0].image_url}`" 
                     :alt="valueTour.images[0].alt_text" 
                    />
            </div>
            <div :class="$style.imgRight">
                <div :class="$style.imgItemRight">
                    <div :class="$style.imgItem">
                         <img 
                            :class="$style.item"
                            v-if="valueTour" 
                            :src="`http://localhost:8000/${valueTour.images[1].image_url}`" 
                            :alt="valueTour.images[1].alt_text" 
                             />
                    </div>
                    <div :class="$style.imgItem">
                        <img 
                             :class="$style.item"
                            v-if="valueTour" 
                            :src="`http://localhost:8000/${valueTour.images[2].image_url}`" 
                            :alt="valueTour.images[2].alt_text" 
                             />
                    </div>
                </div>
                <div :class="$style.imgItemRight">
                    <div :class="$style.imgItem">
                        <img 
                             :class="$style.item"
                            v-if="valueTour" 
                            :src="`http://localhost:8000/${valueTour.images[3].image_url}`" 
                            :alt="valueTour.images[3].alt_text" 
                             />
                    </div>
                    <div :class="$style.imgItem">
                        <img 
                             :class="$style.item"
                            v-if="valueTour" 
                            :src="`http://localhost:8000/${valueTour.images[4].image_url}`" 
                            :alt="valueTour.images[3].alt_text" 
                             />
                    </div>
                </div>
            </div>
        </div>
        <div :class="$style.wapcontent">
            <div :class="$style.descripContent">
                <p v-if="valueTour">{{valueTour.description}}</p>
            </div>
            <div :class="$style.priceContent">
                <p v-if="valueTour">{{ formatPrice(valueTour.price) }} đ</p>
                <button @click="bookTour(valueTour.id)">BookTour</button>
            </div>
        </div>
        <!-- <button @click="logValue">Logdata</button> -->
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
            router.push({ name: 'Booking', params: { id } });
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
