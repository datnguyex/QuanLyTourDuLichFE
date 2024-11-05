<template>
  <!-- <h1>Danh sách tour</h1>
    <select v-model="sortBy" @change="fetchTours">
      <option value="popular">Phổ biến</option>
      <option value="latest">Mới nhất</option>
      <option value="promotion">Khuyến mãi</option>
    </select> -->
  <div class="grid">
    <div class="row">
      <div class="col-md-12">
        <div class="groud_action">
          <button class="btn_addTour" @click="pageCreate">Thêm tour du lịch</button>
        </div>
        <div class="tour_list">
          <div class="tour_item" v-for="tour in tours" :key="tour.id">
            <div class="left-section">
              <img alt="Main tour image" height="120" :src="getImageUrl(tour.images[0]?.image_url)" width="120" />
              <div class="image-grid">
                <img v-for="image in tour.images?.slice(0, 3)" :key="image.id" alt="Tour image" height="40"
                  :src="getImageUrl(image?.image_url)" width="40" class="image-grid-item" />
                <div class="view-more" v-if="tour.images.length > 3">
                  Xem ảnh
                </div>
              </div>
            </div>


            <div class="middle-section">
              <h2>{{ tour.name }}</h2>
              <div class="rating">
                <!-- <i v-for="star in Math.floor(tour.rating)" class="fas fa-star"></i>
                  <i v-if="tour.rating % 1 !== 0" class="fas fa-star-half-alt"></i>
                  <span>({{ tour.reviews }} Đánh giá)</span> -->
              </div>
              <div class="location">
                <i class="fas fa-map-marker-alt"></i>
                {{ tour.location }}
              </div>
              <div class="features">
                <div>
                  <i class="fas fa-bicycle"></i>
                  Cho thuê xe đạp
                </div>
                <div>
                  <i class="fas fa-car"></i>
                  Cho thuê xe hơi
                </div>
                <div>
                  <i class="fas fa-plane"></i>
                  Đưa đón sân bay
                </div>
              </div>
              <div class="payment-info">
                <i class="fas fa-check-circle"></i>
                Không Thanh Toán Ngay
                <span>Thanh Toán tại địa điểm đặt không cần thẻ tín dụng</span>
              </div>
            </div>

            <div class="right-section">
              <div class="price">{{ tour.price }} VND</div>
              <!-- <div class="original-price">{{ tour.original_price }} VND</div>
                <div class="bookings">{{ tour.bookings }} lượt đặt</div> -->
            </div>

            <div class="buttons">
              <button class="delete" @click="deleteTour(tour.id)">
                <i class="fas fa-trash-alt"></i>
                Xóa Tour
              </button>
              <button class="edit" @click="pageEdit(tour.id)">
                <i class="fas fa-edit"></i>
                Sửa Tour
              </button>
              <button class="details" @click="viewTourDetails(tour.id)">
                <i class="fas fa-info-circle"></i>
                Chi
              </button>
            </div>
          </div>
          <nav aria-label="Page navigation example mt-4" v-if="links">
            <ul class="pagination mt-4">
              <li class="page-item" :class="{ disabled: !links.prev }">
                <a class="p-1 page-link" href="#" @click.prevent="fetchTours(meta.current_page - 1)"
                  aria-label="Previous" :disabled="!links.prev">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li v-for="page in meta.last_page" :key="page" class="page-item"
                :class="{ active: page === meta.current_page }">
                <a class="p-1 px-2 page-link" href="#" @click.prevent="fetchTours(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ disabled: !links.next }">
                <a class="p-1 page-link" href="#" @click.prevent="fetchTours(meta.current_page + 1)" aria-label="Next"
                  :disabled="!links.next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default {
  name: "TourList",
  data() {
    return {
      tours: [],
      meta: {},
      links: {},
      sortBy: 'popular', // Giá trị mặc định
    };
  },
  methods: {
    async fetchTours(page = 1) {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/tours/list?page=${page}&per_page=3`);
        if (response.data.tours.length === 0) {
          console.log("Không có tour nào để hiển thị.");
          return;
        }
        this.tours = response.data.tours;
        this.meta = response.data.meta;
        this.links = response.data.links;
      } catch (error) {
        console.error("Failed to fetch tour data:", error);
      }
    },

    async fetchToursSort() {
      try {
        const response = await axios.get(`/api/tours/sort?sort=${this.sortBy}`);
        this.tours = response.data;
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy danh sách tour:', error);
      }
    },

    getImageUrl(urlImage) {
      return `http://127.0.0.1:8000/images/${urlImage}`
    },

    pageCreate() {
      window.location.href = "http://localhost:3000/minh-hiep/tours/create";
    },

    pageEdit($id) {
      // const secretKey = 'your-secret-key'; // Đặt secret key của bạn ở đây
      // const hashedId = this.hashId($id, secretKey);
      window.location.href = `http://localhost:3000/minh-hiep/tours/edit/${$id}`;
    },

    notifySuccess(message) {
      toast.success(`${message} thành công !`, {
        autoClose: 1500,
      }); // ToastOptions
    },

    notifyError(message) {
      toast.error(`${message} thất bại !`, {
        autoClose: 1500,
      }); // ToastOptions
    }
  },

  mounted() {
    //FetchData Tour
    this.fetchTours();
    const message = this.$route.query.message;

    //Send Notification 
    switch (message) {
      case "successEdit":
        this.notifySuccess("Sửa");
        break;
      case "errorEdit":
        this.notifyError("Sửa");
        break
      case "successCreate":
        this.notifySuccess("Thêm");
        break;
      case "errorCreate":
        this.notifyError("Thêm");
        break
    }

    //Replace url when success action
    setTimeout(() => {
      this.$router.replace({ query: { ...this.$route.query, message: undefined } });
    }, 3000)
  }

};
</script>

<style lang="scss" scoped>
@use "../../assets/Global.module.scss";
@use "../../assets/Tour.module.scss";
</style>
