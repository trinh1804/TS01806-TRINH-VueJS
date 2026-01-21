<template >
    <div class="bg-light">
        <!-- Header -->
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <nav class="navbar navbar-light">
                <div class="container">
                    <div class="d-flex align-items-center gap-3">
                        <a href="#" class="text-decoration-none d-flex align-items-center gap-2 text-dark">
                            <i class="fa-solid fa-arrow-left me-2" style="color: #389485;"></i>
                            <span class="fw-semibold small">Quay lại</span>
                        </a>
                        <div class="vr"></div>
                        <div class="d-flex align-items-center gap-2 text-muted">
                            <i class="bi bi-cloud-check"></i>
                            <span class="small text-uppercase fw-semibold">Đã lưu nháp</span>
                        </div>
                    </div>

                    <div class="d-flex align-items-center gap-3">
                        <button class="btn btn-light d-flex align-items-center gap-2">
                            <i class="bi bi-eye"></i>
                            <span>Xem trước</span>
                        </button>
                        <button class="btn btn-primary text-white">
                            Xuất bản bài viết
                        </button>
                        <img src="../assets/images/avatar1.png" class="rounded-circle object-fit-cover" width="32" height="32" alt="User">
                    </div>
                </div>
            </nav>
        </header>

        <!-- Main Content -->
        <div class="container mt-4">
            <div class="row">
                <!-- Editor Column -->
                <div class="col-lg-8 mx-auto">
                    <!-- Cover Image Upload -->
                    <div class="border border-2 border-dashed rounded-2 p-5 mb-4 text-center" style="border-color: rgba(56, 148, 133, 0.3) !important; background-color: rgba(56, 148, 133, 0.05);">
                        <div class="mb-3">
                            <div class="bg-white rounded-circle d-inline-flex p-3 shadow-sm">
                                <i class="fa-solid fa-image" style="color: #389485;"></i>
                            </div>
                        </div>
                        <h5 class="fw-bold">Thêm ảnh bìa</h5>
                        <p class="text-muted small mb-0">Kích thước tối ưu: 1200x630px. Kéo thả hoặc nhấp vào.</p>
                    </div>

                    <!-- Title Input -->
                    <div class="mb-4">
                        <textarea class="form-control border-0 fw-bold p-2" rows="2" placeholder="Nhập tiêu đề..." style="resize: none; font-size: 2rem !important;"></textarea>
                    </div>
                   
                   <!-- Content Area -->
                    <div class="mb-5">
                        <textarea class="form-control border-0 p-2" rows="15" placeholder="Bắt đầu câu chuyện của bạn tại đây..."></textarea>
                    </div>
                </div>

                <!-- Sidebar (hidden on mobile) -->
                <aside class="col-lg-4 d-none d-xl-block">
                    <!-- Status Card -->
                    <div class="card border shadow-sm mb-3">
                        <div class="card-body">
                            <h6 class="text-uppercase text-muted fw-bold small mb-3">Trạng thái & Hiển thị</h6>
                            
                            <div class="d-flex justify-content-between align-items-center mb-3 small">
                                <span class="text-muted">Hiển thị</span>
                                <div class="d-flex">      
                                    <select class="form-select">
                                        <option>Công khai</option>
                                        <option>Riêng tư</option>
                                    </select>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between align-items-center mb-3 small">
                                <span class="text-muted">Xuất bản</span>
                                <div class="d-flex fw-semibold">
                                    <span>Ngay lập tức <i class="fa-solid fa-calendar-days ms-1" style="color: #389485;"></i></span>
                                  
                                </div>
                            </div>

                            <button class="btn btn-outline-primary w-100">Lưu nháp</button>
                        </div>
                    </div>

                    <!-- Settings Card -->
                    <div class="card border shadow-sm mb-3">
                        <div class="card-body">
                            <!-- Category -->
                            <div class="mb-3">
                                <label class="text-uppercase text-muted fw-bold small mb-2">Danh mục</label>
                                <select class="form-select">
                                    <option>Thiết kế</option>
                                    <option>Phong cách sống</option>
                                    <option>Sức khỏe</option>
                                    <option>Kiến trúc</option>
                                    <option>Công nghệ</option>
                                </select>
                            </div>

                            <!-- Tags -->
                            <div class="mb-3">
                                <label class="text-uppercase text-muted fw-bold small mb-2">Thẻ</label>
                                <div class="mb-2 d-flex flex-wrap gap-2">
                                    <span class="badge bg-primary d-inline-flex align-items-center gap-1">
                                        Tối giản <i class="bi bi-x small"></i>
                                    </span>
                                    <span class="badge bg-primary d-inline-flex align-items-center gap-1">
                                        Thiết kế Web <i class="bi bi-x small"></i>
                                    </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Thêm thẻ...">
                            </div>

                            <!-- URL Slug -->
                            <div class="mb-0">
                                <label class="text-uppercase text-muted fw-bold small mb-2">URL Slug</label>
                                <div class="input-group input-group-sm">
                                    <span class="input-group-text bg-light text-muted small">blogvue.com/pc/</span>
                                    <input type="text" class="form-control" value="tieu-de-bai-viet">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Excerpt Card -->
                    <div class="card border shadow-sm mb-3">
                        <div class="card-body">
                            <label class="text-uppercase text-muted fw-bold small mb-2">Tóm tắt</label>
                            <textarea class="form-control" rows="3" placeholder="Viết tóm tắt ngắn..."></textarea>
                            <p class="text-muted small fst-italic mt-2 mb-0">Hiển thị trên trang chủ và kết quả tìm kiếm.</p>
                        </div>
                    </div>

                    <!-- Delete -->
                    <div class="text-center">
                        <button class="btn btn-link text-danger text-decoration-none small">
                            <i class="fa-regular fa-trash-can me-1" style="color: #dd3d4b;"></i> Chuyển vào thùng rác
                        </button>
                    </div>       
                </aside>
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
    .btn-outline-primary:hover {
        background-color: #389485 !important;
        color: #ffffff !important;
    }
    .text-primary {
        color: #389485 !important;
    }
    .badge.bg-primary {
        background-color: rgba(56, 148, 133, 0.1) !important;
        color: #389485 !important;
    }
    .form-control:focus, .form-select:focus {
        border-color: #389485;
        box-shadow: 0 0 0 0.25rem rgba(56, 148, 133, 0.25);
    }
</style>