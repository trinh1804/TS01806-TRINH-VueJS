<template>
    <div class="bg-light min-vh-100">
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <div class="container">
                <nav class="navbar navbar-expand-lg py-3">
                    <a class="navbar-brand d-flex align-items-center" href="#">
                        <div class="rounded p-2 me-2 text-white" style="background-color:#389485">
                            <i class="fas fa-book-open"></i>
                        </div>
                        <span class="fw-bold fs-5">BlogVue</span>
                    </a>
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <router-link class="nav-link fw-semibold" :to="{ name: 'Home' }">Trang chủ</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{ name: 'BlogList' }">Bài viết</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{ name: 'Dashboard' }">Dashboard</router-link>
                            </li>
                        </ul>
                        <div class="d-flex gap-2 ms-3">
                            <router-link :to="{ name: 'Login' }" class="btn btn-outline-dark">Đăng nhập</router-link>
                            <router-link :to="{ name: 'UserProfile' }" class="btn btn-primary text-white">Hồ
                                sơ</router-link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        <main class="container my-5">
            <div class="text-center py-5">
                <h1 class="display-4 fw-bold mb-3">Chào mừng đến <span style="color:#389485">BlogVue</span></h1>
                <p class="lead text-muted mb-4">Nơi chia sẻ những câu chuyện và ý tưởng thú vị</p>
            </div>

            <div class="row g-4 mt-2">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm h-100 text-center p-4">
                        <i class="fas fa-list fs-1 mb-3" style="color:#389485"></i>
                        <h5 class="fw-bold">Danh sách Blog</h5>
                        <p class="text-muted">Khám phá các bài viết đa dạng</p>
                        <router-link :to="{ name: 'BlogList' }" class="btn btn-sm text-white mt-auto"
                            style="background-color:#389485">Xem ngay</router-link>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm h-100 text-center p-4">
                        <i class="fas fa-user fs-1 mb-3" style="color:#389485"></i>
                        <h5 class="fw-bold">Hồ sơ cá nhân</h5>
                        <p class="text-muted">Thông tin và cài đặt tài khoản</p>
                        <router-link :to="{ name: 'UserProfile' }" class="btn btn-sm text-white mt-auto"
                            style="background-color:#389485">Xem ngay</router-link>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm h-100 text-center p-4">
                        <i class="fas fa-tachometer-alt fs-1 mb-3" style="color:#389485"></i>
                        <h5 class="fw-bold">Dashboard</h5>
                        <p class="text-muted">Khu vực dành riêng cho thành viên</p>
                        <button class="btn btn-sm text-white mt-auto" style="background-color:#389485"
                            @click="$router.push({ name: 'Dashboard' })">Truy cập</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default { name: 'Home' }
</script>