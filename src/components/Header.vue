<template>
    <div id="header" class="header-container">
      <div class="header-top">
        <div class="logo-section">
          <div class="logo">traveloka</div>
          <div class="language-currency">
            <img alt="Cờ" class="flag" src="@/assets/Images/Vn.jpg" />
            <span>VI|VND</span>
          </div>
          <nav class="nav-links">
            <a href="#">Ưu Đãi</a>
            <a href="#">Hỗ Trợ</a>
            <a href="#">Đối Tác</a>
            <a href="#">Đã Lưu</a>
            <a href="#">Đặt Chỗ</a>
          </nav>
        </div>
        <div class="user-section">
          <img alt="Ảnh đại diện" class="avatar" src="@/assets/Images/Icontk.jpg" />
          <div class="dropdown">
            <a href="#" class="dropdown-toggle">
              Toàn Đức
              <i class="fas fa-caret-down"></i>
            </a>
            <div class="dropdown-content">
              <a class="highlight" href="#">Bạn là ưu tiên hàng đầu của chúng tôi</a>
              <a href="#">0 Điểm</a>
              <a href="/UserDetails">Chỉnh sửa hồ sơ</a>
              <a href="#">Thẻ của tôi</a>
              <a href="#">Danh sách mua hàng</a>
              <a href="#">Đặt chỗ của tôi</a>
              <a href="#">Hoàn tiền <span class="new">Mới!</span></a>
              <a href="#">Cảnh báo giá chuyến bay</a>
              <a href="#">Chi tiết hành khách đã lưu</a>
              <a href="#">Thông tin khuyến mại</a>
              <a href="#">Đăng xuất</a>
            </div>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <nav class="main-nav">
          <a href="#">Khách Sạn</a>
          <a href="#">Chuyến Bay</a>
          <a href="#">Xe Buýt &amp; Xe Khách</a>
          <a href="#">Đưa Đón Sân Bay</a>
          <a href="#">Thuê Xe</a>
          <a href="#">Hoạt Động</a>
          <a href="#">Thêm</a>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainHeader',
  };
  </script>
  
  <style scoped>
  /* Căn chỉnh tổng thể */
  body {
    font-family: 'Roboto', sans-serif;
  }
  
  .header-container {
    background-color: white;
  }
  
  .header-top {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
  }
  
  .logo-section {
    display: flex;
    align-items: center;
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  
  .language-currency {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  
  .language-currency img.flag {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  
  .nav-links a {
    margin-left: 20px;
    text-decoration: none;
    color: #666;
  }
  
  .nav-links a:hover {
    color: #007bff;
  }
  
  .user-section {
    display: flex;
    align-items: center;
  }
  
  .user-section img.avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .dropdown {
    position: relative;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    min-width: 200px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    z-index: 1;
    border-radius: 4px;
  }
  
  .dropdown-content a {
    padding: 10px 15px;
    text-decoration: none;
    display: block;
    color: #333;
    border-bottom: 1px solid #eee;
  }
  
  .dropdown-content a:last-child {
    border-bottom: none;
  }
  
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  .header-bottom {
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
  }
  
  .main-nav a {
    margin-left: 20px;
    text-decoration: none;
    color: #666;
  }
  
  .main-nav a:hover {
    color: #007bff;
  }
  
  .highlight {
    color: #007bff;
    font-weight: bold;
  }
  
  .new {
    background-color: red;
    color: white;
    font-size: 12px;
    padding: 2px 4px;
    border-radius: 3px;
  }
  </style>
  
  