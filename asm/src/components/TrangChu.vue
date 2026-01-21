<template>
    <div class="bg-light">
        <!-- Header -->
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light py-3">
                    <div class="container-fluid">
                        <!-- Logo -->
                        <a class="navbar-brand d-flex align-items-center" href="#">
                            <div class="bg-primary text-white rounded p-2 me-2">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <span class="fw-bold fs-5">BlogVue</span>
                        </a>

                        <!-- Toggler -->
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- Nav Items -->
                        <div class="collapse navbar-collapse">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active text-primary fw-semibold" href="#">Trang chủ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-secondary" href="#">Bài viết</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-secondary" href="#">Hỏi đáp</a>
                                </li>
                            </ul>

                            <!-- Search Bar -->
                            <form class="d-flex me-3 d-none d-lg-flex ms-auto">
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-0">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </span>
                                    <input class="form-control border-0 bg-light" type="search"
                                        placeholder="Tìm kiếm bài viết...">
                                </div>
                            </form>

                            <!-- Auth Buttons -->
                            <div class="d-flex gap-2">
                                <button class="btn btn-outline-dark">Đăng nhập</button>
                                <button class="btn btn-primary text-white">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container my-5">

            <!-- Hero Section -->
            <section class="mb-5">
                <div class="card border-0 shadow-sm overflow-hidden">
                    <div class="row g-0">
                        <div class="col-sm-7">
                            <img src="../assets/images/img1.webp" class="img-fluid w-100 h-100 object-fit-cover"
                                alt="Bài viết nổi bật">
                        </div>
                        <div class="col-sm-5">
                            <div class="card-body p-4 d-flex flex-column justify-content-center">
                                <div class="mb-3">
                                    <span class="badge bg-primary text-white me-2">BÀI VIẾT NỔI BẬT</span>
                                    <span class="text-muted small">• 10/01/2026</span>
                                </div>

                                <h2 class="card-title fw-bold mb-3">
                                    Tương Lai Của Phong Cách Sống Tối Giản Trong Không Gian Đô Thị
                                </h2>

                                <p class="card-text text-muted mb-4">
                                    Khám phá cách thiết kế có chủ đích và thói quen sống lành mạnh có thể biến đổi môi trường
                                    hàng ngày của bạn thành một một nơi yên bình và thư thái.
                                </p>

                                <div class="d-flex align-items-center mb-4">
                                    <img src="../assets/images/avatar1.png" class="rounded-circle me-3 object-fit-cover" width="48" height="48"
                                        alt="Tác giả">
                                    <div>
                                        <p class="mb-0 fw-bold">Elena Trần</p>
                                        <p class="mb-0 small text-muted">Biên tập viên Phong cách sống</p>
                                    </div>
                                </div>

                                <button class="btn btn-primary text-white">
                                    Đọc bài viết <i class="bi bi-arrow-right ms-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="row">
                <!-- Feed Content -->
                <div class="col-lg-8">
                    <h2 class="fw-bold mb-4">Bài Viết Gần Đây</h2>

                    <!-- Post Grid -->
                    <div class="row row-cols-2 g-4 mb-4">
                        <!-- Post Card 1 -->
                        <div class="col">
                            <div class="card border-0 shadow-sm h-100">
                                <div class="card-body">
                                    <img src="../assets/images/post-card1.jpg" class="card-img-top rounded-2">
                                    <h4 class="card-title h5 fw-bold mt-3 mb-2">10 Mẹo Cho Không Gian Làm Việc Hiện Đại</h4>
                                    <p class="card-text mb-3">
                                        Tăng năng suất với những bí quyết tổ chức văn phòng dựa trên khoa học mà không tốn
                                        kém.
                                    </p>
                                    <div class="text-muted text-end small">                                      
                                        22/01/2026
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Post Card 2 -->
                        <div class="col">
                            <div class="card border-0 shadow-sm h-100">
                                <div class="card-body">
                                    <img src="../assets/images/post-card1.jpg" class="card-img-top rounded-2">
                                    <h4 class="card-title h5 fw-bold mt-3 mb-2">Xu Hướng Thiết Kế 2026</h4>
                                    <p class="card-text">
                                        Từ da đến nội thất nhựa tái chế, khám phá vật liệu của tương lai.
                                    </p>
                                    <div class="text-muted text-end small">                                      
                                        22/01/2026
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Post Card 3 -->
                        <div class="col">
                            <div class="card border-0 shadow-sm h-100">
                                <div class="card-body">
                                    <img src="../assets/images/post-card1.jpg" class="card-img-top rounded-2">
                                    <h4 class="card-title h5 fw-bold mt-3 mb-2">Nghệ Thuật Sống Chậm Trong Thế Giới Nhanh</h4>
                                    <p class="card-text">
                                        Tại sao chậm lại là cuộc nổi loạn tối thượng và nó có thể cứu sức khỏe tinh thần của
                                        bạn như thế nào.
                                    </p>
                                    <div class="text-muted text-end small">                                      
                                        22/01/2026
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Post Card 4 -->
                        <div class="col">
                            <div class="card border-0 shadow-sm h-100">
                                <div class="card-body">
                                    <img src="../assets/images/post-card1.jpg" class="card-img-top rounded-2">
                                    <h4 class="card-title h5 fw-bold mt-3 mb-2">Làm Chủ Công Nghệ Thay Vì Bị Chi Phối</h4>
                                    <p class="card-text">
                                        Những nguyên tắc tối giản kỹ thuật số giúp bạn kiểm soát thời gian và sự chú ý mỗi ngày.
                                    </p>
                                    <div class="text-muted text-end small">                                      
                                        22/01/2026
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Load More Button -->
                    <div class="text-center">
                        <button class="btn btn-outline-dark btn-lg mt-3">
                            Xem thêm bài viết 
                        </button>
                    </div>
                </div>

                <!-- Sidebar -->
                <aside class="col-lg-4">
                    <!-- Newsletter Card -->
                    <div class="card border-0 shadow-sm mb-4" style="background-color: rgba(56, 148, 133, 0.1);">
                        <div class="card-body p-4">
                            <div class="bg-primary text-white rounded p-3 d-inline-flex mb-3">
                                <i class="fas fa-envelope fa-2x"></i>
                            </div>
                            <h3 class="h5 fw-bold mb-3">Nhận Bản Tin</h3>
                            <p class="text-muted small mb-4">
                                Những bài đăng hữu ích sẽ được gửi đến hộp thư của bạn.
                            </p>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="email@example.com">
                            </div>
                            <button class="btn btn-primary text-white w-100">Đăng ký</button>                          
                        </div>
                    </div>

                    <!-- Categories -->
                    <div class="mb-4">
                        <h3 class="h5 fw-bold mb-3">
                            <i class="fa-solid fa-table-columns me-1" style="color: #389485;"></i>
                            Khám Phá Danh Mục
                        </h3>
                        <div class="d-flex flex-wrap gap-2">
                            <a href="#" class="btn btn-sm btn-outline-secondary">Thiết kế</a>
                            <a href="#" class="btn btn-sm btn-outline-secondary">Phong cách sống</a>
                            <a href="#" class="btn btn-sm btn-outline-secondary">Sức khỏe</a>
                            <a href="#" class="btn btn-sm btn-outline-secondary">Kiến trúc</a>
                            <a href="#" class="btn btn-sm btn-outline-secondary">Công nghệ</a>
                        </div>
                    </div>

                    <!-- Featured Authors -->
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h3 class="h5 fw-bold mb-4">Tác Giả Nổi Bật</h3>

                            <div class="d-flex align-items-center mb-4">
                                <img src="../assets/images/avatar1.png" class="rounded-circle me-3 object-fit-cover" width="48" height="48"
                                        alt="Tác giả">                              
                                <div>
                                    <p class="mb-0 fw-bold">Marcus Vũ</p>
                                    <p class="mb-0 text-muted small">Nhà Phê Bình Kiến Trúc</p>
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <img src="../assets/images/avatar1.png" class="rounded-circle me-3 object-fit-cover" width="48" height="48"
                                    alt="Tác giả">
                                <div>
                                    <p class="mb-0 fw-bold">Sana Miyazaki</p>
                                    <p class="mb-0 text-muted small">Nhà Thiết Kế</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>

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
</style>