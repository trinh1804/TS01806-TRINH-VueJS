<template>
    <div class="bg-light min-vh-100">
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <nav class="navbar navbar-light">
                <div class="container">
                    <a href="#" class="text-decoration-none d-flex align-items-center gap-2 text-dark"
                        @click.prevent="$router.push({ name: 'Home' })">
                        <i class="fas fa-arrow-left me-2" style="color:#389485"></i>
                        <span class="fw-semibold">Trang chủ</span>
                    </a>
                </div>
            </nav>
        </header>

        <main class="container my-5">
            <div class="card border-0 shadow-sm mb-5">
                <div class="card-body p-5">
                    <h1 class="fw-bold mb-3">Dashboard</h1>
                    <p class="lead text-muted mb-4">
                    </p>
                    <div class="d-flex gap-3 flex-wrap">
                        <router-link :to="{ name: 'BlogList' }" class="btn text-white" style="background-color:#389485">
                            Xem bài viết
                        </router-link>
                        <button class="btn btn-outline-secondary" @click="$router.push({ name: 'UserProfile' })">
                            Hồ sơ của tôi
                        </button>
                        <router-link :to="{ name: 'UserProfileInfo' }" class="btn btn-outline-secondary">
                            Thông tin cá nhân
                        </router-link>
                        <router-link :to="{ name: 'UserProfileSettings' }" class="btn btn-outline-secondary">
                            Cài đặt
                        </router-link>
                        <!-- Test alias /me -->
                        <router-link to="/me" class="btn btn-outline-secondary">
                            Tôi
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm p-4 text-center">
                        <i class="fas fa-file-alt fs-1 mb-3" style="color:#389485"></i>
                        <h3 class="fw-bold">6</h3>
                        <p class="text-muted mb-0">Bài viết</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm p-4 text-center">
                        <i class="fas fa-comments fs-1 mb-3" style="color:#389485"></i>
                        <h3 class="fw-bold">12</h3>
                        <p class="text-muted mb-0">Bình luận</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm p-4 text-center">
                        <i class="fas fa-eye fs-1 mb-3" style="color:#389485"></i>
                        <h3 class="fw-bold">12.3k</h3>
                        <p class="text-muted mb-0">Lượt xem</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default { name: 'Dashboard' }
</script>