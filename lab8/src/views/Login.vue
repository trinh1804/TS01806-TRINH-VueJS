<template>
    <div class="bg-light min-vh-100 d-flex flex-column">
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <div class="container">
                <nav class="navbar">
                    <a href="#" class="text-decoration-none d-flex align-items-center gap-2 text-dark"
                        @click.prevent="goToHome">
                        <i class="fa-solid fa-arrow-left me-2" style="color:#389485"></i>
                        <span class="fw-semibold small">Quay lại</span>
                    </a>
                </nav>
            </div>
        </header>

        <div class="flex-grow-1 d-flex align-items-center py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-xl-9">
                        <div class="card border-0 shadow-sm overflow-hidden">
                            <div class="row g-0">
                                <!-- Left panel -->
                                <div class="col-md-5 text-white p-5 d-flex flex-column justify-content-center"
                                    style="background-color:#389485">
                                    <i class="bi bi-quote fs-1 opacity-75 mb-3 d-block"></i>
                                    <h3 class="fw-bold mb-3">Viết để hiểu mình, viết để được lắng nghe.</h3>
                                    <p class="opacity-75">Cùng cộng đồng người viết chia sẻ suy nghĩ và giá trị sống.
                                    </p>
                                </div>

                                <!-- Right panel -->
                                <div class="col-md-7 p-5">
                                    <h2 class="fw-bold mb-2">Bắt đầu câu chuyện của bạn</h2>
                                    <p class="text-muted mb-4">Nhập thông tin tài khoản.</p>

                                    <!-- Tab switch -->
                                    <ul class="nav nav-pills nav-fill mb-4 bg-light p-2 rounded">
                                        <li class="nav-item">
                                            <button class="nav-link" :class="{ active: tab === 'register' }"
                                                @click="tab = 'register'">
                                                Đăng ký
                                            </button>
                                        </li>
                                        <li class="nav-item">
                                            <button class="nav-link" :class="{ active: tab === 'login' }"
                                                @click="tab = 'login'">
                                                Đăng nhập
                                            </button>
                                        </li>
                                    </ul>

                                    <!-- Login Form -->
                                    <form v-if="tab === 'login'" @submit.prevent="login">
                                        <div class="mb-3">
                                            <label class="form-label fw-bold">Email</label>
                                            <input type="email" class="form-control" v-model="loginForm.email"
                                                placeholder="email@example.com" required>
                                        </div>
                                        <div class="mb-4">
                                            <label class="form-label fw-bold">Mật khẩu</label>
                                            <input type="password" class="form-control" v-model="loginForm.password"
                                                placeholder="••••••••" required>
                                        </div>
                                        <button class="btn btn-primary text-white w-100 py-3">
                                            Đăng nhập
                                        </button>
                                    </form>

                                    <!-- Register Form -->
                                    <form v-if="tab === 'register'" @submit.prevent="register">
                                        <div class="mb-3">
                                            <label class="form-label fw-bold">Họ và
                                                tên</label>
                                            <input type="text" class="form-control" placeholder="Nguyễn Văn A" required>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label fw-bold">Email</label>
                                            <input type="email" class="form-control" placeholder="email@example.com"
                                                required>
                                        </div>
                                        <div class="mb-4">
                                            <label class="form-label fw-bold">Mật khẩu</label>
                                            <input type="password" class="form-control" placeholder="••••••••" required>
                                            <small class="text-muted">Tối thiểu 6 ký tự</small>
                                        </div>
                                        <button class="btn btn-primary text-white w-100 py-3">
                                            Tạo tài khoản
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="bg-white text-muted text-center p-3">
            © 2026 BlogVue. All rights reserved. <br />
            PHAM THUY TRINH
        </footer>
    </div>
</template>

<script>
import { auth } from '../router/index.js';

export default {
    name: 'Login',
    data() {
        return {
            tab: 'login',
            loginForm: { email: '', password: '' },
        }
    },
    methods: {
        // Giả lập đăng nhập thành công - cập nhật isAuthenticated và redirect Dashboard
        login() {
            setTimeout(() => {
                auth.isAuthenticated = true
                this.$router.push({ name: 'Dashboard' })
            }, 800)
        },

        goToHome() {
            this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style scoped>
.btn-primary,
.bg-primary {
    background-color: #389485 !important;
    border-color: #389485 !important;
}

.nav-pills .nav-link.active {
    background-color: #389485 !important;
    color: #fff !important;
}

.form-control:focus {
    border-color: #389485;
    box-shadow: 0 0 0 0.25rem rgba(56, 148, 133, 0.25);
}
</style>