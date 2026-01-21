<template lang="">
    <div class="bg-light">
        <!-- Header -->
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <nav class="navbar navbar-light">
                <div class="container">                  
                    <a href="#" class="text-decoration-none d-flex align-items-center gap-2 text-dark">
                        <i class="fa-solid fa-arrow-left me-2" style="color: #389485;"></i>
                        <span class="fw-semibold">Quay lại</span>
                    </a>                                             
                </div>
            </nav>
        </header>

        <div class="container">
            <div class="row">
                <!-- Sidebar -->
                <div class="col-sm-3 bg-white border-end sticky-top vh-100 p-0">
                    <div class="p-4">
                        <!-- Brand -->
                        <div class="d-flex align-items-center gap-3 mb-5">
                            <div class="bg-primary rounded p-2 text-white">
                                <i class="fa-solid fa-user-pen" style="color: #ffffff;"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-0">Creator Studio</h6>
                                <small class="text-muted">Tạo từ 2026</small>
                            </div>
                        </div>

                        <!-- Navigation -->
                        <nav class="nav nav-pills flex-column ">
                            <a class="nav-link active d-flex align-items-center gap-3" href="#">
                                <i class="fa-solid fa-user"></i>
                                <span class="fw-semibold">Cài đặt hồ sơ</span>
                            </a>
                            <a class="nav-link text-muted d-flex align-items-center gap-3" href="#">
                                <i class="fa-regular fa-file-lines"></i>
                                <span class="fw-semibold">Bài viết đã xuất bản</span>
                            </a>
                            <a class="nav-link text-muted d-flex align-items-center gap-3" href="#">
                                <i class="fa-solid fa-shield-halved"></i>
                                <span class="fw-semibold">Bảo mật</span>
                            </a>
                            <a class="nav-link text-muted d-flex align-items-center gap-3" href="#">
                                <i class="fa-solid fa-chart-bar"></i>
                                <span class="fw-semibold">Tùy chỉnh</span>
                            </a>
                        </nav>

                        <!-- User Info -->
                        <div class=" pt-4 border-top position-absolute bottom-0 start-0 end-0 p-4 bg-white">
                            <div class="d-flex align-items-center gap-3">
                                <img src="../assets/images/avatar1.png" class="rounded-circle object-fit-cover" width="50" height="50" alt="User">
                                <div class="flex-grow-1 text-truncate">
                                    <div class="fw-bold small text-truncate">Alex Rivera</div>
                                    <div class="text-muted small text-truncate">alex@studio.com</div>
                                </div>
                                <i class="bi bi-box-arrow-right text-muted"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <main class="col-sm-9 p-4 p-lg-5">
                    <div class="mx-auto" style="max-width: 900px;">
                        <!-- Header -->
                        <header class="mb-5">
                            <h1 class="display-5 fw-bold mb-2">Cài Đặt Tài Khoản</h1>
                        </header>

                        <!-- Profile Photo Section -->
                        <section class="card border shadow-sm mb-4">
                            <div class="card-body p-4">
                                <div class="row align-items-center">
                                    <div class="col-auto">
                                        <div class="position-relative">
                                            <img src="../assets/images/avatar1.png" class="rounded-circle object-fit-cover" width="150" height="150" alt="Profile">
                                            <div class="position-absolute top-0 start-0 w-100 h-100 rounded-circle bg-dark bg-opacity-50 d-flex align-items-center justify-content-center opacity-0 hover-opacity-100" style="cursor: pointer; transition: opacity 0.3s;">
                                                <i class="bi bi-camera text-white fs-4"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <h4 class="fw-bold mb-1">Ảnh Đại Diện</h4>
                                        <p class="text-muted small mb-3">PNG, JPG hoặc GIF. Kích thước tối đa 2MB.</p>
                                        <div class="d-flex gap-2">
                                            <button class="btn btn-primary text-white">Tải ảnh mới</button>
                                            <button class="btn btn-outline-secondary">Xóa</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- Personal Details -->
                        <section class="mb-5">
                            <h3 class="fw-bold mb-4">Thông Tin Cá Nhân</h3>
                            <div class="card border shadow-sm">
                                <div class="card-body p-4">
                                    <form>
                                        <div class="row g-3 mb-4">
                                            <div class="col-md-6">
                                                <label class="form-label fw-bold">Họ và tên</label>
                                                <input type="text" class="form-control" value="Alex Rivera">
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label fw-bold">Địa chỉ Email</label>
                                                <input type="email" class="form-control" value="alex@studio.com">
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <button type="submit" class="btn btn-primary text-white px-4">Lưu thay đổi</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>

                        <!-- Security Section -->
                        <section class="mb-5">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h3 class="fw-bold mb-0">Bảo Mật</h3>                              
                            </div>
                            <div class="card border shadow-sm">
                                <div class="card-body p-4">
                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label fw-semibold">Mật khẩu hiện tại</label>
                                            <input type="text" class="form-control" placeholder="abc123">
                                        </div>
                                        <div class="row g-3 mb-4">
                                            <div class="col-md-6">
                                                <label class="form-label fw-semibold">Mật khẩu mới</label>
                                                <input type="password" class="form-control" placeholder="Tối thiểu 8 ký tự">
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label fw-semibold">Xác nhận mật khẩu</label>
                                                <input type="password" class="form-control" placeholder="Nhập lại mật khẩu mới">
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <button type="submit" class="btn btn-primary px-4">Cập nhật bảo mật</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>

                        <!-- Published Posts -->
                        <section class="mb-5">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h3 class="fw-bold mb-0">Bài Viết Đã Xuất Bản</h3>
                                <div class="text-end">
                                    <button type="submit" class="btn btn-primary px-4">
                                        <i class="fa-solid fa-plus me-3" style="color: #ffffff;"></i>
                                        Tạo mới
                                    </button>
                                </div>
                            </div>

                            <div class="card border shadow-sm">
                                <ul class="list-group list-group-flush">
                                    <!-- Post 1 -->
                                    <li class="list-group-item p-3">
                                        <div class="d-flex gap-3 align-items-center">
                                            <img src="../assets/images/post-card1.jpg" class="rounded object-fit-cover" width="64" height="64" alt="Post">
                                            <div class="flex-grow-1">
                                                <h5 class="fw-bold mb-1">Nghệ Thuật Sống Tối Giản Năm 2025</h5>
                                                <div class="d-flex gap-3 text-muted small">
                                                    <span><i class="bi bi-calendar me-1"></i> 12 Tháng 10, 2025</span>
                                                    <span><i class="bi bi-eye me-1"></i> 1.2k lượt xem</span>
                                                </div>
                                            </div>
                                            <div class="d-flex gap-2">
                                                <button class="btn btn-sm btn-light">
                                                    <i class="fa-regular fa-pen-to-square"></i>
                                                </button>
                                                <button class="btn btn-sm btn-light text-danger">
                                                    <i class="fa-regular fa-trash-can"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>

                                    <!-- Post 2 -->
                                    <li class="list-group-item p-3">
                                        <div class="d-flex gap-3 align-items-center">
                                            <img src="../assets/images/post-card1.jpg" class="rounded object-fit-cover" width="64" height="64" alt="Post">
                                            <div class="flex-grow-1">
                                                <h5 class="fw-bold mb-1">Tại Sao Lý Thuyết Màu Sắc Quan Trọng Trong Thiết Kế UI</h5>
                                                <div class="d-flex gap-3 text-muted small">
                                                    <span><i class="bi bi-calendar me-1"></i> 28 Tháng 9, 2025</span>
                                                    <span><i class="bi bi-eye me-1"></i> 842 lượt xem</span>
                                                </div>
                                            </div>
                                            <div class="d-flex gap-2">
                                                <button class="btn btn-sm btn-light">
                                                    <i class="fa-regular fa-pen-to-square"></i>
                                                </button>
                                                <button class="btn btn-sm btn-light text-danger">
                                                    <i class="fa-regular fa-trash-can"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>

                                    <!-- Post 3 -->
                                    <li class="list-group-item p-3">
                                        <div class="d-flex gap-3 align-items-center">                                          
                                            <img src="../assets/images/post-card1.jpg" class="rounded object-fit-cover" width="64" height="64" alt="Post">
                                            <div class="flex-grow-1">
                                                <h5 class="fw-bold mb-1">Tối Ưu Hóa Quy Trình Làm Việc Của Nhà Sáng Tạo</h5>
                                                <div class="d-flex gap-3 text-muted small">
                                                    <span><i class="bi bi-calendar me-1"></i> 15 Tháng 9, 2025</span>
                                                    <span><i class="bi bi-eye me-1"></i> 2.1k lượt xem</span>
                                                </div>
                                            </div>
                                            <div class="d-flex gap-2">
                                                <button class="btn btn-sm btn-light">
                                                    <i class="fa-regular fa-pen-to-square"></i>
                                                </button>
                                                <button class="btn btn-sm btn-light text-danger">
                                                    <i class="fa-regular fa-trash-can"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="card-footer bg-light text-center">
                                    <button class="btn btn-link text-decoration-none text-muted">Xem tất cả bài viết</button>
                                </div>
                            </div>
                        </section>

                        <!-- Danger Zone -->
                        <section class="border-top pt-5">
                            <div class="card border-danger">
                                <div class="card-body p-4" style="background-color: rgba(220, 53, 69, 0.05);">
                                    <div class="row align-items-center">
                                        <div class="col-md-8">
                                            <h5 class="text-danger fw-bold mb-2">Xóa Tài Khoản</h5>
                                            <p class="text-muted small mb-md-0">Xóa vĩnh viễn tài khoản và toàn bộ nội dung của bạn.</p>
                                        </div>
                                        <div class="col-md-4 text-md-end">
                                            <button class="btn btn-outline-danger">Vô hiệu hóa</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>
    :root {
        --bs-primary: #389485;
    }
    .btn-primary, .bg-primary {
        background-color: #389485 !important;
        border-color: #389485 !important;
    }
    .btn-outline-primary {
        color: #389485 !important;
        border-color: #389485 !important;
    }
    .nav-pills .nav-link.active {
        background-color: rgba(56, 148, 133, 0.1) !important;
        color: #389485 !important;
    }
    .form-control:focus, .form-select:focus {
        border-color: #389485;
        box-shadow: 0 0 0 0.25rem rgba(56, 148, 133, 0.25);
    }
</style>