<template>
  <div>
    <h1>Danh sách tour</h1>
    <select v-model="sortBy" @change="fetchTours">
      <option value="popular">Phổ biến</option>
      <option value="latest">Mới nhất</option>
      <option value="promotion">Khuyến mãi</option>
    </select>

    <ul>
      <li v-for="tour in tours" :key="tour.id">
        <h2>{{ tour.name }}</h2>
        <p>{{ tour.description }}</p>
        <p>Giá: {{ tour.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "TourList",
  data() {
    return {
      tours: [],
      sortBy: 'popular', // Giá trị mặc định
    };
  },
  methods: {
    async fetchTours() {
      try {
        const response = await axios.get(`/api/tours/sort?sort=${this.sortBy}`);
        this.tours = response.data;
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy danh sách tour:', error);
      }
    },
  },
  mounted() {
    this.fetchTours(); // Gọi khi component được mount
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/Global.module.scss";
@use "../../assets/Tour.module.scss";
</style>
