<template>
    <div class="p-4 bg-gray-100 min-h-screen">
        <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
            <div class="flex">
                <div class="w-2/3 ">
                    <div class="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                        <span>Đừng lo lắng, giá vẫn giữ nguyên. Hoàn tất thanh toán của bạn bằng</span>
                        <span class="font-bold">01:41:42</span>
                    </div>
                    <div class="p-4">
                        <h2 class="text-2xl font-bold mb-4">Bạn muốn thanh toán thế nào?</h2>
                        <div class="mb-4">
                            <div class="flex items-center mb-2">
                                <input type="radio" id="vietqr" name="payment" class="mr-2" v-model="selectPayment"
                                    value="vietqr">
                                <label for="vietqr" class="font-bold">VietQR</label>
                                <span
                                    class="ml-2 bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Ưu
                                    đãi giảm giá</span>
                            </div>
                            <div v-if="selectPayment === 'vietqr'"
                                class="border border-blue-500 p-4 rounded-lg bg-blue-50">
                                <ul class="list-disc pl-5 text-sm">
                                    <li>Đảm bảo bạn có ví điện tử hoặc ứng dụng ngân hàng di động hỗ trợ thanh toán bằng
                                        VietQR.</li>
                                    <li>Mã QR sẽ xuất hiện sau khi bạn nhấp vào nút 'Thanh toán'. Chỉ cần lưu hoặc chụp
                                        màn hình mã QR để hoàn tất thanh toán của bạn trong thời hạn từ/m-banking của
                                        bạn.</li>
                                    <li>Vui lòng sử dụng mã QR mới nhất được cung cấp để hoàn tất thanh toán của bạn.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex items-center mb-2">
                                <input type="radio" id="bank-transfer" name="payment" class="mr-2"
                                    v-model="selectPayment" value="bank-transfer">
                                <label for="bank-transfer">Chuyển khoản ngân hàng</label>
                            </div>
                            <div v-if="selectPayment === 'bank-transfer'" class="mb-4">
                                <div class="border border-blue-300 rounded p-4 bg-blue-50">
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <span class="font-bold">
                                                Chuyển khoản ngân hàng chỉ áp dụng từ 8 giờ sáng đến 8 giờ tối.
                                            </span>
                                            Bạn có thể chuyển khoản qua kênh ngân hàng điện tử của VCB và các ngân hàng
                                            thương mại khác.
                                        </li>
                                        <li>
                                            Chuyển khoản liên ngân hàng qua ATM hoặc Internet Banking không khả dụng.
                                        </li>
                                        <li>
                                            <span class="font-bold">
                                                Hãy lựa chọn Dịch vụ Chuyển tiền Nhanh 24/7
                                            </span>
                                            để chuyển tiền từ các ngân hàng khác ngoài Vietcombank.
                                        </li>
                                    </ul>
                                </div>
                                <div class="mb-6 mt-2">
                                    <h2 class="text-lg font-bold mb-2">
                                        Chọn tài khoản đích
                                    </h2>
                                    <div
                                        class="border border-blue-300 rounded p-1 px-2 mb-2 flex items-center bg-blue-50">
                                        <input type="radio" name="payment" class="mr-2">
                                        <span class="flex-grow">
                                            Vietcombank Transfer
                                        </span>
                                        <img alt="Vietcombank logo" class="ml-2" height="20"
                                            src="https://storage.googleapis.com/a1aa/image/WgnTcRsEac6PFJK5maP5qedpY4mpmJzX63I6gNxz5G1r6l2JA.jpg"
                                            width="50" />
                                    </div>
                                    <div class="border border-gray-300 rounded p-1 px-2 flex items-center bg-gray-50">
                                        <input type="radio" name="payment" class="mr-2">
                                        <span class="flex-grow">
                                            Chuyển tiền qua VietinBank
                                        </span>
                                        <img alt="VietinBank logo" class="ml-2" height="20"
                                            src="https://storage.googleapis.com/a1aa/image/Gg4fjVzYknxQDS2wjmSPSqu3gAqRnfkfvTtRcIxUn9HyqXanA.jpg"
                                            width="50" />
                                    </div>
                                    <div class="text-sm text-gray-600 mt-2 bg-blue-50 p-2 rounded">
                                        Các bước thanh toán dễ dàng và xác minh nhanh hơn
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div class="mb-4">
                            <div class="flex items-center mb-2">
                                <input type="radio" id="credit-card" name="payment" class="mr-2" v-model="selectPayment"
                                    value="credit-card">
                                <label for="credit-card">Thẻ thanh toán</label>
                            </div>

                            <div v-if="selectPayment === 'credit-card'"
                                class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-medium mb-2">
                                        Số thẻ tín dụng
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Số thẻ tín dụng" type="text" />
                                </div>
                                <div class="flex space-x-4 mb-4">
                                    <div class="w-1/2">
                                        <label class="block text-gray-700 text-sm font-medium mb-2">
                                            Hợp lệ đến
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder="MM/YY" type="text" />
                                    </div>
                                    <div class="w-1/2">
                                        <label class="block text-gray-700 text-sm font-medium mb-2">
                                            CVV/CVN
                                        </label>
                                        <div class="relative">
                                            <input
                                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Mã 3-4 chữ số" type="text" />
                                            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                                                <i class="fas fa-question-circle text-blue-500">
                                                </i>
                                                <img alt="CVV example" class="h-5 ml-2" height="20"
                                                    src="https://storage.googleapis.com/a1aa/image/2RLJMyi2LZ4uKp1vl7t1rK3U6IjD8jeY46zXtzr5YfnO8MtTA.jpg"
                                                    width="30" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-medium mb-2">
                                        Tên trên thẻ
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Tên ghi trên thẻ" type="text" />
                                </div>
                                <div class="flex items-center">
                                    <input checked="" class="form-checkbox text-blue-600" type="checkbox" />
                                    <label class="ml-2 text-sm text-gray-700">
                                        Lưu thẻ để thanh toán nhanh hơn vào lần sau
                                    </label>
                                    <a class="ml-1 text-sm text-blue-600" href="#">
                                        Xem thêm
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div class="mb-4">
                            <div class="flex items-center mb-2">
                                <input v-on:click="payment_momo" type="radio" id="payment_momo" name="payment_momo"
                                    class="mr-2">
                                <label for="store">Thanh toán với ATM momo</label>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="flex items-center mb-2">
                                <input type="radio" id="store" name="payment" class="mr-2">
                                <label for="store">Tại điểm du lịch</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-1/3 bg-blue-50 rounded-r-lg">
                    <div class="bg-blue-200 p-4 rounded-lg mb-4">
                        <h3 class="text-lg font-bold">Tóm tắt Xperience</h3>
                        <p class="text-sm">Mã đặt chỗ 1194956492</p>
                    </div>
                    <div class="p-6">
                        <div class="mb-4">
                            <h4 class="font-bold">CHI TIẾT ĐẶT CHỖ</h4>
                            <p class="text-sm">Three Islands Excursion by Canoe in South Phu Quoc - Day Tour</p>
                            <p class="text-sm">Ngày tham quan: Th 2, 4 thg 11, 2024</p>
                            <p class="text-sm">Áp dụng cho: Người lớn: 1</p>
                        </div>
                        <div>
                            <h4 class="font-bold">KHÁCH</h4>
                            <p class="text-sm">minhiep</p>
                            <p class="text-sm">+84834983286</p>
                            <p class="text-sm">minhhiep325@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'UserPayment',
    data() {
        return {
            selectPayment: '',
            urlCheckout: 'http://127.0.0.1:3000/minh-hiep/tours',
            price: '10000'
        }
    },

    methods: {
        async payment_momo() {
            try {
                const formData = new FormData();
                formData.append('urlCheckout', this.urlCheckout);
                formData.append('price', this.price);

                const response = await axios.post('http://127.0.0.1:8000/api/payments/momo_payment', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (response.status === 200) {
                    window.location.href = response.data.payUrl;
                    console.log(response);
                }
            } catch (error) {
                console.log(error);
            }

        }
    }
}
</script>