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
                                    <a class="nav-link text-secondary" href="#">Trang chủ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active text-primary fw-semibold" href="#">Bài viết</a>
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

                            <div class="d-flex">
                                <img src="../assets/images/avatar1.png" class="rounded-circle object-fit-cover" width="32" height="32" alt="User">
                            </div>                           
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container py-4">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="mb-4">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="#" class="text-decoration-none">Trang chủ</a></li>
                    <li class="breadcrumb-item"><a href="#" class="text-decoration-none">Bài viết</a></li>
                    <li class="breadcrumb-item active text-primary">Xu hướng Thiết kế</li>
                </ol>
            </nav>

            <!-- Article -->
            <article class="mx-auto" style="max-width: 800px;">
                <!-- Hero Image -->
                <div class="position-relative rounded-3 overflow-hidden mb-5">
                    <img src="../assets/images/img2.jpg" class="img-fluid w-100 h-100 object-fit-cover">
                    <div class="position-absolute bottom-0 start-0 w-100 p-4 text-white" style="background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);">
                        <span class="badge bg-primary text-white mb-3">XU HƯỚNG THIẾT KẾ</span>
                        <h1 class="display-5 fw-bold mb-3">Tương Lai Của Thiết Kế Không Gian Làm Việc Tối Giản</h1>
                        <div class="d-flex gap-4 small">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-calendar"></i>
                                <span>21 Tháng 01, 2026</span>
                            </div>                          
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div class="mb-5">
                    <h5 class="text-muted mb-3">
                        Chủ nghĩa tối giản không chỉ là việc sở hữu ít đồ đạc hơn. Trong bối cảnh không gian làm việc hiện đại, nó đã phát triển thành triết lý về tính chủ đích - tạo ra môi trường thúc đẩy sự tập trung, sáng tạo và sự rõ ràng trong tâm trí.
                    </h5>

                    <h2 class="fw-bold mt-5 mb-3">Tâm Lý Học Của Không Gian</h2>
                    <p>
                        Nghiên cứu cho thấy rằng một môi trường lộn xộn có thể dẫn đến một tâm trí lộn xộn. Khi không gian vật lý của chúng ta đầy rẫy tiếng ồn thị giác, bộ não của chúng ta liên tục xử lý thông tin đó, ngay cả khi chúng ta không nhận thức được. Bằng cách loại bỏ những thứ không cần thiết, chúng ta giải phóng nguồn lực nhận thức cho các nhiệm vụ thực sự quan trọng.
                    </p>

                    <p class="text-muted fst-italic">
                        "Sự đơn giản không phải là sự vắng mặt của sự lộn xộn, đó là hậu quả của sự đơn giản. Sự đơn giản về cơ bản là mô tả mục đích và vị trí của một đối tượng và sản phẩm."
                    </p>

                    <p>
                        Không gian làm việc tối giản hiện đại kết hợp các yếu tố tự nhiên - một khái niệm được gọi là thiết kế sinh học. Cửa sổ lớn, cây cối trong nhà và kết cấu gỗ tự nhiên giúp người dùng cảm thấy gần gũi hơn với thiên nhiên, giảm mức độ căng thẳng và tăng năng suất trong các phiên làm việc dài.
                    </p>
                </div>

                <!-- Engagement Stats -->
                <div class="d-flex justify-content-between align-items-center py-4 border-top border-bottom mb-5">
                    <div class="d-flex gap-4">
                        <button class="btn btn-link text-decoration-none text-muted d-flex align-items-center gap-2">
                            <i class="fa-solid fa-heart"></i>
                            <span class="fw-semibold">1.2k</span>
                        </button>
                        <button class="btn btn-link text-decoration-none text-muted d-flex align-items-center gap-2">
                            <i class="fa-solid fa-comments"></i>
                            <span class="fw-semibold">24 Bình luận</span>
                        </button>
                    </div>
                    <div class="d-flex gap-3">
                        <button class="btn btn-link text-muted p-0">
                            <i class="fa-solid fa-share-nodes"></i>
                        </button>
                        <button class="btn btn-link text-muted p-0">
                            <i class="fa-solid fa-bookmark"></i>
                        </button>
                    </div>
                </div>

                <!-- Author Card -->
                <div class="card border-primary mb-5" style="border-color: rgba(56, 148, 133, 0.3) !important; background-color: rgba(56, 148, 133, 0.05);">
                    <div class="card-body p-4">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <img src="../assets/images/avatar1.png" class="rounded-circle object-fit-cover" width="80" height="80" alt="Tác giả">
                            </div>
                            <div class="col">
                                <div class="d-flex justify-content-between align-items-start mb-2">
                                    <h4 class="fw-bold mb-0">Alex Rivera</h4>
                                    <button class="btn btn-primary btn-sm text-white">Theo dõi</button>
                                </div>
                                <p class="text-muted small mb-3">
                                    Alex là Chiến lược gia Thiết kế Cấp cao tại MinimalStudio. Ông tập trung vào giao điểm giữa hành vi con người và môi trường kiến trúc. Trong thập kỷ qua, ông đã giúp hàng chục công ty công nghệ thiết kế lại không gian làm việc vật lý và kỹ thuật số của họ.
                                </p>
                                <div class="d-flex gap-3">
                                    <a href="#" class="text-primary text-decoration-none small fw-semibold">Twitter</a>
                                    <a href="#" class="text-primary text-decoration-none small fw-semibold">Portfolio</a>
                                    <a href="#" class="text-primary text-decoration-none small fw-semibold">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comments Section -->
                <section id="comments">
                    <h3 class="fw-bold mb-4">Bình luận</h3>

                    <!-- Comment Input -->
                    <div class="card border mb-4">
                        <div class="card-body">
                            <div class="d-flex gap-3">
                                <img src="../assets/images/avatar1.png" class="rounded object-fit-cover" width="40" height="40" alt="You">
                                <div class="flex-grow-1">
                                    <textarea class="form-control mb-3" rows="3" placeholder="Thêm bình luận..."></textarea>
                                    <div class="d-flex justify-content-between align-items-center pt-3 border-top">
                                        <div class="d-flex gap-2">
                                            <button class="btn btn-sm btn-light">
                                                <i class="fa-regular fa-image" style="color: #389485;"></i>
                                            </button>
                                            <button class="btn btn-sm btn-light">
                                                <i class="fa-solid fa-paperclip" style="color: #389485;"></i>
                                            </button>
                                        </div>
                                        <button class="btn btn-primary text-white">Đăng bình luận</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Comment List -->
                    <div class="vstack gap-4">
                        <!-- Comment 1 -->
                        <div class="d-flex gap-3">
                            <img src="../assets/images/avatar1.png" class="rounded object-fit-cover" width="40" height="40" alt="User">
                            <div class="flex-grow-1">
                                <div class="d-flex align-items-center gap-2 mb-1">
                                    <span class="fw-bold">Sarah Jenkins</span>
                                    <span class="text-muted small">2 giờ trước</span>
                                </div>
                                <p class="text-muted small mb-2">
                                    Bài viết này rất đúng. Gần đây tôi đã dọn sạch bàn làm việc của mình chỉ còn laptop và một cây cảnh, và sự tập trung của tôi đã cải thiện đáng kể. Điểm về nguồn lực nhận thức rất chính xác!
                                </p>
                                <div class="d-flex gap-3">
                                    <button class="btn btn-link btn-sm text-decoration-none text-muted p-0">
                                        <i class="bi bi-hand-thumbs-up me-1"></i> 14
                                    </button>
                                    <button class="btn btn-link btn-sm text-decoration-none text-muted p-0">Trả lời</button>
                                </div>

                                <!-- Nested Reply -->
                                <div class="ms-4 mt-3 ps-3 border-start">
                                    <div class="d-flex gap-3">
                                        <img src="../assets/images/avatar1.png" class="rounded object-fit-cover" width="40" height="40" alt="Reply">
                                        <div class="flex-grow-1">
                                            <div class="d-flex align-items-center gap-2 mb-1">
                                                <span class="fw-bold small">Marcus Chen</span>
                                                <span class="text-muted" style="font-size: 0.75rem;">1 giờ trước</span>
                                            </div>
                                            <p class="text-muted small mb-2">
                                                @Sarah hoàn toàn đồng ý. Bạn có thấy khó duy trì lúc đầu không? Tôi luôn gặp khó khăn với "giấy tờ lấn chiếm" sau vài ngày.
                                            </p>
                                            <div class="d-flex gap-3">
                                                <button class="btn btn-link btn-sm text-decoration-none text-muted p-0">Thích</button>
                                                <button class="btn btn-link btn-sm text-decoration-none text-muted p-0">Trả lời</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Comment 2 -->
                        <div class="d-flex gap-3">
                            <img src="../assets/images/avatar1.png" class="rounded object-fit-cover" width="40" height="40" alt="User">
                            <div class="flex-grow-1">
                                <div class="d-flex align-items-center gap-2 mb-1">
                                    <span class="fw-bold">Elena Rodriguez</span>
                                    <span class="text-muted small">5 giờ trước</span>
                                </div>
                                <p class="text-muted small mb-2">
                                    Những hiểu biết tuyệt vời! Tôi muốn xem một bài viết tiếp theo về lựa chọn ánh sáng cho thiết lập tối giản. Đó thường là nơi tôi gặp khó khăn nhất.
                                </p>
                                <div class="d-flex gap-3">
                                    <button class="btn btn-link btn-sm text-decoration-none text-muted p-0">
                                        <i class="bi bi-hand-thumbs-up me-1"></i> 8
                                    </button>
                                    <button class="btn btn-link btn-sm text-decoration-none text-muted p-0">Trả lời</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Load More -->
                    <div class="text-center mt-5">
                        <button class="btn btn-outline-secondary">Tải thêm bình luận</button>
                    </div>
                </section>
            </article>
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
    }
    .btn-primary, .bg-primary {
        background-color: #389485 !important;
        border-color: #389485 !important;
    }
    .text-primary {
        color: #389485 !important;
    }
    .progress-bar {
        background-color: #389485 !important;
    }
</style>