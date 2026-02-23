<template>
    <div class="bg-light min-vh-100">
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <nav class="navbar navbar-light">
                <div class="container">
                    <a href="#" class="text-decoration-none d-flex align-items-center gap-2 text-dark"
                        @click.prevent="$router.push({ name: 'Home' })">
                        <i class="fa-solid fa-arrow-left me-2" style="color: #389485;"></i>
                        <span class="fw-semibold">Quay lại</span>
                    </a>
                </div>
            </nav>
        </header>

        <div class="container my-5">
            <div class="row">
                <div class="col-md-3">
                    <div class="card border-0 shadow-sm p-3">
                        <div class="text-center mb-4 pt-2">
                            <div class="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center text-white fw-bold fs-3"
                                style="width:80px;height:80px;background-color:#389485">U</div>
                            <h6 class="fw-bold mb-0">Người dùng</h6>
                        </div>
                        <nav class="nav flex-column nav-pills">
                            <router-link class="nav-link d-flex align-items-center gap-2"
                                :to="{ name: 'UserProfileInfo' }">
                                <i class="fas fa-user"></i> Thông tin cơ bản
                            </router-link>
                            <router-link class="nav-link d-flex align-items-center gap-2"
                                :to="{ name: 'UserProfileSettings' }">
                                <i class="fas fa-gear"></i> Cài đặt
                            </router-link>
                        </nav>
                    </div>
                </div>

                <!-- Hiển thị nested route con tại đây -->
                <div class="col-md-9">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default { name: 'UserProfile' }
</script>

<style scoped>
.nav-pills .nav-link.router-link-active {
    background-color: rgba(56, 148, 133, 0.15) !important;
    color: #389485 !important;
    font-weight: 600;
}

.nav-pills .nav-link {
    color: #555;
    border-radius: 8px;
    margin-bottom: 4px;
}
</style>