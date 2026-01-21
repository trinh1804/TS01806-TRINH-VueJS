<template >
    <div class="bg-light min-vh-100 d-flex flex-column">
        <!-- Header -->
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <div class="container">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid justify-content-start fw-bold">
                        <i class="fa-solid fa-arrow-left me-2" style="color: #389485;"></i>
                        Quay lại
                    </div>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <div class="flex-grow-1 d-flex align-items-center py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-xl-9">
                        <div class="card border-0 shadow-sm overflow-hidden">
                            <div class="row g-0">
                                <!-- Left Panel - Visual -->
                                <div class="col-md-5 bg-primary text-white p-5 d-flex flex-column justify-content-between position-relative">
                                    <div class="position-relative" style="z-index: 10;">
                                        <i class="bi bi-quote fs-1 opacity-75 mb-3 d-block"></i>
                                        <h3 class="fw-bold mb-4">"Viết lách là hình học của tâm hồn."</h3>
                                        <p class="opacity-75">Tham gia cùng 10,000+ nhà sáng tạo đang xây dựng di sản của họ thông qua những câu chuyện ý nghĩa.</p>
                                    </div>
                                </div>

                                <!-- Right Panel - Form -->
                                <div class="col-md-7 p-5">
                                    <div class="mb-4">
                                        <h1 class="fw-bold mb-2">Bắt đầu câu chuyện của bạn</h1>
                                        <p class="text-muted">Nhập thông tin tài khoản.</p>
                                    </div>

                                    <!-- Toggle Tabs -->
                                    <ul class="nav nav-pills nav-fill mb-4 bg-light p-2 rounded" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#dangky" type="button">Đăng ký</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#dangnhap" type="button">Đăng nhập</button>
                                        </li>
                                    </ul>

                                    <!-- Tab Content -->
                                    <div class="tab-content">
                                        <!-- Signup Form -->
                                        <div id="dangky" class="container tab-pane active">
                                            <form>
                                                <div class="mb-3">
                                                    <label class="form-label fw-bold">Họ và tên</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" placeholder="Nguyễn Văn A">
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label fw-bold">Địa chỉ Email</label>
                                                    <div class="input-group">
                                                        <input type="email" class="form-control" placeholder="email@domain.com">
                                                    </div>
                                                </div>

                                                <div class="mb-4">
                                                    <label class="form-label fw-bold">Mật khẩu</label>
                                                    <div class="input-group">
                                                        <input type="password" class="form-control" placeholder="••••••••">
                                                    </div>
                                                </div>

                                                <button type="submit" class="btn btn-primary text-white w-100 py-3 mb-4">
                                                    Tạo tài khoản 
                                                </button>
                                            </form>
                                        </div>

                                        <!-- Login Form -->
                                        <div id="dangnhap" class="container tab-pane">
                                            <form>
                                                <div class="mb-3">
                                                    <label class="form-label fw-bold">Địa chỉ Email</label>
                                                    <div class="input-group">
                                                        <input type="email" class="form-control" placeholder="email@domain.com">                                                       
                                                    </div>
                                                </div>

                                                <div class="mb-4">
                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <label class="form-label fw-bold mb-0">Mật khẩu</label>                       
                                                    </div>
                                                    <div class="input-group mb-2">
                                                        <input type="password" class="form-control" placeholder="••••••••">                                                      
                                                    </div>
                                                    <a href="#" class="text-primary text-decoration-none small">Quên mật khẩu?</a>
                                                </div>

                                                <button type="submit" class="btn btn-primary text-white w-100 py-3 mb-4">
                                                    Đăng nhập <i class="bi bi-arrow-right ms-2"></i>
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    <!-- Divider -->
                                    <div class="position-relative my-4">
                                        <hr>
                                        <span class="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small text-uppercase">Hoặc tiếp tục với</span>
                                    </div>

                                    <!-- Social Login -->                
                                    <div>
                                        <button class="btn btn-outline-secondary w-100 mb-3">
                                            <i class="fa-brands fa-google"></i> Google
                                        </button>
                                    </div>
                      
                                 

                                    <!-- Terms -->
                                    <p class="text-muted text-center small">
                                        Bằng việc tiếp tục, bạn đồng ý với 
                                        <a href="#" class="text-decoration-none">Điều khoản dịch vụ</a> và 
                                        <a href="#" class="text-decoration-none">Chính sách bảo mật</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-white text-white text-muted text-center p-3">
            © 2026 BlogViet. All rights reserved. <br/> 
            PHAM THUY TRINH
        </footer>
    </div>
</template>

<style scoped>
    :root {
        --bs-primary: #389485;
        --bs-primary-rgb: 56, 148, 133;
    }
    .btn-primary, .bg-primary {
        background-color: #389485 !important;
        border-color: #389485 !important;
    }
    .text-primary {
        color: #389485 !important;
    }
    .border-primary {
        border-color: #389485 !important;
    }
    .nav-pills .nav-link.active,
    .nav-pills .show > .nav-link {
        background-color: #389485 !important;
        color: #fff !important;
    }
</style>