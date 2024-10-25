<template>
    <div>
        <div class="container">
            <form class="form_tour" v-if="swicth == ''" @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label> Thông tin cấu hình tour du lịch </label>
                    <img alt="Placeholder image for tour" height="100"
                        src="https://storage.googleapis.com/a1aa/image/KfEfbvu74JiS7UHxDAQrvKeWqFeYtHfsJBayi1oG95YWkgNdC.jpg"
                        width="100" />
                    <span class="add-image"> Thêm ảnh + </span>
                </div>
                <div class="form-group">
                    <label> Tên tour </label>
                    <input @input="logTour" placeholder="Nhập tên tour du lịch" type="text" v-model.lazy="name" />
                    <div v-if="errorName" class="error">{{ errorName }}</div>
                </div>
                <div class="form-group">
                    <label> Thời gian </label>
                    <input placeholder="Nhập vào số giờ" type="text" v-model="duration" />
                    <div v-if="errorDuration" class="error">{{ errorDuration }}</div>
                </div>
                <div class="form-group">
                    <div class="time_tour">
                        <div class="time_start">
                            <label> Ngày bắt đầu </label>
                            <VueDatePicker v-model="start" @change="updateStartDate"></VueDatePicker>
                            <div v-if="errorStartDate" class="error">
                                {{ errorStartDate }}
                            </div>
                        </div>
                        <div class="time_end">
                            <label> Ngày kết thúc </label>
                            <VueDatePicker v-model="end" @change="updateEndDate"></VueDatePicker>
                            <div v-if="errorEndDate" class="error">{{ errorEndDate }}</div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label> Địa chỉ </label>
                    <input placeholder="Nhập vào địa chỉ" type="text" v-model="location" />
                    <div v-if="errorLocation" class="error">{{ errorLocation }}</div>
                </div>
                <div class="form-group">
                    <div class="schedule">
                        <div class="price">
                            <label> Giá </label>
                            <input placeholder="Nhập vào giá" type="text" v-model="price" />
                            <div v-if="errorPrice" class="error">{{ errorPrice }}</div>
                        </div>
                        <div class="status">
                            <label> Trạng thái </label>
                            <select v-model="availability">
                                <option>Chọn trạng thái</option>
                            </select>
                            <div v-if="errorAvailability" class="error">
                                {{ errorAvailability }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label> Lịch trình </label>
                    <div class="schedule">
                        <input placeholder="Nhập vào tên lịch trình" type="text" />
                        <select>
                            <option>Chọn thời gian</option>
                        </select>
                    </div>
                    <span class="add-schedule"> Thêm lịch trình + </span>
                </div>

                <div class="form-group">
                    <label> Mô tả </label>
                    <textarea placeholder="Nhập vào mô tả" type="text" v-model="description"></textarea>
                    <div v-if="errorDescription" class="error">{{ errorDescription }}</div>
                </div>

                <div class="form-group">
                    <label> Hình ảnh / Video </label>
                    <input type="file" @change="handleFileUpload" multiple />
                    <div v-if="errorImage" class="error">{{ errorImage }}</div>
                </div>

                <div class="form-actions">
                    <button class="save">Lưu</button>
                    <button class="cancel">Đóng</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
    name: "CreateTour",
    components: {
        VueDatePicker,
    },
    setup() {
        // Sử dụng ref để quản lý start và end date
        const start = ref(null);
        const end = ref(null);

        // Function cập nhật giá trị start_date và end_date
        const updateStartDate = (value) => {
            start.value = value;
        };

        const updateEndDate = (value) => {
            end.value = value;
        };

        const files = ref([]); // To store uploaded files

        const handleFileUpload = (event) => {
            const selectedFiles = Array.from(event.target.files);
            files.value = selectedFiles; // Store the selected files
        };

        return {
            start,
            end,
            updateStartDate,
            updateEndDate,
            files,
            handleFileUpload,
        };
    },
    watch: {
        // Theo dõi sự thay đổi của start và end date
        start(val) {
            this.start_date = val;
        },
        end(val) {
            this.end_date = val;
        },
    },

    data() {
        return {
            name: "",
            description: "",
            duration: "",
            price: "",
            start_date: "",
            end_date: "",
            location: "",
            availability: "",
            image: "",
            swicth: "",
            errorName: "",
            errorDescription: "",
            errorDuration: "",
            errorPrice: "",
            errorStartDate: "",
            errorEndDate: "",
            errorLocation: "",
            errorAvailability: "",
            errorImage: "",
        };
    },


    methods: {
        logTour() {
            console.log(
                "name:",
                this.name,
                "description:",
                this.description,
                "duration:",
                this.duration,
                "price:",
                this.price,
                "start_date:",
                this.start_date,
                "end_date:",
                this.end_date,
                "location:",
                this.location,
                "availability:",
                this.availability,
                "image:",
                this.image,
                "errorName:",
                this.errorName,
                "errorDescription:",
                this.errorDescription,
                "errorDuration:",
                this.errorDuration,
                "errorPrice:",
                this.errorPrice,
                "errorStartDate:",
                this.errorStartDate,
                "errorEndDate:",
                this.errorEndDate,
                "errorLocation:",
                this.errorLocation,
                "errorAvailability:",
                this.errorAvailability,
                "errorImage:",
                this.errorImage
            );
        },
        validateField(fieldNameError, fieldName, fieldValue, minLength, maxLength, regexPattern) {
            if (!fieldValue || fieldValue.trim() === "") {
                this[`error${fieldNameError}`] = `${fieldName} không được để trống`;
                return false;
            }
            if (fieldValue.length < minLength || fieldValue.length > maxLength) {
                this[
                    `error${fieldNameError}`
                ] = `${fieldName} phải có ít nhất ${minLength} ký tự hoặc ít hơn ${maxLength} ký tự`;
                return false;
            }
            if (fieldNameError == "Price" || fieldNameError == "Duration") {
                this[`error${fieldNameError}`] = `${fieldName} phải là số dương lớn hơn 0`;
                return false;
            }
            if (regexPattern && !regexPattern.test(fieldValue)) {
                this[
                    `error${fieldNameError}`
                ] = `${fieldName} không được chứa ký tự đặc biệt`;
                return false;
            }
            this[`error${fieldNameError}`] = ""; // Xóa lỗi nếu đã nhập tên
            return true;
        },
        setSwicth(item) {
            this.swicth = item;
        },
        async handleSubmit() {
            // check error of variable
            const regex = /^(?!.*\s{2})(?!.*\u3000)[\p{L}0-9\s]+$/u;
            const isValidName = this.validateField(
                "Name",
                "Tên tour",
                this.name,
                5,
                100,
                regex
            );
            const isValidLocation = this.validateField(
                "Location",
                "Địa chỉ",
                this.location,
                5,
                100,
                regex
            );
            const isValidDescription = this.validateField("Description", "Mô tả", this.description, 10, 500, null);
            const isValidDuration = this.validateField("Duration", "Thời gian dụ kiến", this.duration, 1, 3, /^[0-9]+$/, (value) => {
                return value <= 0 ? "Thời gian phải là số dương lớn hơn 0" : "";
            });

            //Validate giá không hợp lệ
            const isValidPrice = this.validateField("Price", "Giá", this.price, 1, 10, /^[0-9]+$/, (value) => {
                return value <= 0 ? "Giá phải là số dương lớn hơn 0" : "" || value != Int32Array ? "Giá phải là số dương lớn hơn 0" : "";
            });

            // Validate trạng thái không hợp lệ
            const isValidAvailability = this.validateField("Availability", "Trạng thái", this.availability, 1, 20, null, (value) => {
                const validOptions = ["Available", "Unavailable"];
                return !validOptions.includes(value) ? "Trạng thái không hợp lệ" : "";
            });

            // Validate image không hợp lệ
            const isValidImage = this.validateField("Image", "Hình ảnh", this.image, 10, 500, /^(https?:\/\/[^\s]+)$/, (value) => {
                return !value.match(/.(jpg|jpeg|png|gif)$/i) ? "Ảnh phải là một URL hợp lệ với định dạng jpg, jpeg, png, hoặc gif" : "";
            });

            // Validate ngày bắt đầu và ngày kết thúc
            let isValidStartDate = true;
            let isValidEndDate = true;

            if (!this.start_date) {
                this.errorStartDate = "Ngày bắt đầu không được để trống";
                isValidStartDate = false;
            } else {
                this.errorStartDate = ""; // Xóa lỗi nếu không có lỗi
            }

            if (!this.end_date) {
                this.errorEndDate = "Ngày kết thúc không được để trống";
                isValidEndDate = false;
            } else {
                this.errorEndDate = ""; // Xóa lỗi nếu không có lỗi
            }

            let startDateObj = null;
            let endDateObj = null;
            //kiểm tra nếu start date bé hơn ngày hiện tại 
            if (this.start_date) {
                startDateObj = new Date(this.start_date);
                const dateNowObj = new Date();
                if (startDateObj < dateNowObj) {
                    this.errorStartDate = "Ngày bắt đầu phải lớn hơn ngày hiện tại";
                    isValidStartDate = false;
                }
            }
            // Kiểm tra nếu start_date lớn hơn end_date
            if (this.start_date && this.end_date) {
                startDateObj = new Date(this.start_date);
                endDateObj = new Date(this.end_date);

                if (startDateObj > endDateObj) {
                    this.errorStartDate = "Ngày bắt đầu phải trước ngày kết thúc";
                    isValidStartDate = false;
                }

                if (endDateObj < startDateObj) {
                    this.errorEndDate = "Ngày kết thúc phải sau ngày bắt đầu";
                    isValidEndDate = false;
                }
            }
            if (!isValidName ||
                !isValidLocation ||
                !isValidDescription ||
                !isValidDuration ||
                !isValidPrice ||
                !isValidStartDate ||
                !isValidEndDate ||
                !isValidAvailability ||
                !isValidImage) {
                console.log("Có lỗi trong form, không gửi dữ liệu.");
                return;
            }

            // Prepare form data for upload
            const formData = new FormData();
            formData.append("name", this.name);
            formData.append("description", this.description);
            formData.append("duration", this.duration);
            formData.append("price", this.price);
            formData.append("start_date", this.start_date);
            formData.append("end_date", this.end_date);
            formData.append("location", this.location);
            formData.append("availability", this.availability);
            formData.append("image", this.image);

            // Append files to form data
            this.files.forEach(file => {
                formData.append("files[]", file);
            });

            try {
                const response = await axios.post("http://127.0.0.1:8000/api/tours", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log("Registration successful:", response.data);
                this.swicth = response.data.swicth;
            } catch (error) {
                console.error("Registration failed:", error.response.data);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@use "../../assets/Global.module.scss";
@use "../../assets/Tour.module.scss";
</style>
