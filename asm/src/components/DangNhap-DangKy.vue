<template>
    <div class="bg-light min-vh-100 d-flex flex-column">
        <!-- Header -->
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <div class="container">
                <nav class="navbar navbar-expand-lg ">
                    <a href="#" class="text-decoration-none d-flex align-items-center gap-2 text-dark"
                        @click.prevent="goBack">
                        <i class="fa-solid fa-arrow-left me-2" style="color: #389485;"></i>
                        <span class="fw-semibold small">Quay lại</span>
                    </a>
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
                                <!-- Left Panel -->
                                <div
                                    class="col-md-5 bg-primary text-white p-5 d-flex flex-column justify-content-between position-relative">
                                    <div class="position-relative" style="z-index: 10;">
                                        <i class="bi bi-quote fs-1 opacity-75 mb-3 d-block"></i>
                                        <h3 class="fw-bold mb-4">Viết để hiểu mình, viết để được lắng nghe.</h3>
                                        <p class="opacity-75">Cùng hơn 10.000 người viết đang chia sẻ suy nghĩ và giá
                                            trị
                                            sống qua từng câu chữ.</p>
                                    </div>
                                </div>

                                <!-- Right Panel -->
                                <div class="col-md-7 p-5">
                                    <div class="mb-4">
                                        <h1 class="fw-bold mb-2">Bắt đầu câu chuyện của bạn</h1>
                                        <p class="text-muted">Nhập thông tin tài khoản.</p>
                                    </div>

                                    <!-- Message -->
                                    <div v-if="message" class="alert" :class="messageType">
                                        {{ message }}
                                    </div>

                                    <!-- Toggle Tabs -->
                                    <ul class="nav nav-pills nav-fill mb-4 bg-light p-2 rounded" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" :class="{ active: activeTab === 'register' }"
                                                @click="activeTab = 'register'" type="button">Đăng ký</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" :class="{ active: activeTab === 'login' }"
                                                @click="activeTab = 'login'" type="button">Đăng nhập</button>
                                        </li>
                                    </ul>

                                    <!-- Tab Content -->
                                    <div class="tab-content">
                                        <!-- Signup Form -->
                                        <div v-show="activeTab === 'register'">
                                            <form @submit.prevent="handleRegister">
                                                <div class="mb-3">
                                                    <label class="form-label fw-bold">Họ và tên</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control"
                                                            placeholder="Nguyễn Văn A" v-model="registerForm.name"
                                                            required>
                                                    </div>
                                                </div>

                                                <div class="mb-3">
                                                    <label class="form-label fw-bold">Email</label>
                                                    <div class="input-group">
                                                        <input type="email" class="form-control"
                                                            placeholder="email@domain.com" v-model="registerForm.email"
                                                            required>
                                                    </div>
                                                </div>

                                                <div class="mb-4">
                                                    <label class="form-label fw-bold">Mật khẩu</label>
                                                    <div class="input-group">
                                                        <input type="password" class="form-control"
                                                            placeholder="••••••••" v-model="registerForm.password"
                                                            required>
                                                    </div>
                                                    <small class="text-muted">Tối thiểu 6 ký tự</small>
                                                </div>

                                                <button type="submit" class="btn btn-primary text-white w-100 py-3 mb-4"
                                                    :disabled="loading">
                                                    <span v-if="loading">Đang xử lý...</span>
                                                    <span v-else>Tạo tài khoản</span>
                                                </button>
                                            </form>
                                        </div>

                                        <!-- Login Form -->
                                        <div v-show="activeTab === 'login'">
                                            <form @submit.prevent="handleLogin">
                                                <div class="mb-3">
                                                    <label class="form-label fw-bold">Email</label>
                                                    <div class="input-group">
                                                        <input type="email" class="form-control"
                                                            placeholder="email@domain.com" v-model="loginForm.email"
                                                            required>
                                                    </div>
                                                </div>

                                                <div class="mb-4">
                                                    <div class="d-flex justify-content-between align-items-center mb-2">
                                                        <label class="form-label fw-bold mb-0">Mật khẩu</label>
                                                    </div>
                                                    <div class="input-group mb-2">
                                                        <input type="password" class="form-control"
                                                            placeholder="••••••••" v-model="loginForm.password"
                                                            required>
                                                    </div>
                                                    <a href="#" class="text-primary text-decoration-none small">Quên mật
                                                        khẩu?</a>
                                                </div>

                                                <button type="submit" class="btn btn-primary text-white w-100 py-3 mb-4"
                                                    :disabled="loading">
                                                    <span v-if="loading">Đang xử lý...</span>
                                                    <span v-else>Đăng nhập <i class="bi bi-arrow-right ms-2"></i></span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>

                                    <!-- Divider -->
                                    <div class="position-relative my-4">
                                        <hr>
                                        <span
                                            class="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small text-uppercase">Hoặc
                                            tiếp tục với</span>
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
            © 2026 BlogViet. All rights reserved. <br />
            PHAM THUY TRINH
        </footer>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Data
const activeTab = ref('login')
const loading = ref(false)
const message = ref('')
const messageType = ref('')

const loginForm = ref({
    email: '',
    password: ''
})

const registerForm = ref({
    name: '',
    email: '',
    password: ''
})

// Methods
const handleLogin = async () => {
    message.value = ''
    loading.value = true

    try {
        // Tìm user theo email và password
        const response = await axios.get('http://localhost:3000/users', {
            params: {
                email: loginForm.value.email,
                password: loginForm.value.password
            }
        })

        if (response.data.length > 0) {
            // Đăng nhập thành công
            const user = response.data[0]

            // Lưu vào sessionStorage thay vì localStorage
            sessionStorage.setItem('currentUserId', user.id)
            sessionStorage.setItem('isLoggedIn', 'true')

            message.value = 'Đăng nhập thành công!'
            messageType.value = 'alert-success'

            // Chuyển về trang chủ sau 1 giây
            setTimeout(() => {
                router.push({ name: 'TrangChu' })
            }, 1000)
        } else {
            message.value = 'Email hoặc mật khẩu không đúng'
            messageType.value = 'alert-danger'
        }
    } catch (error) {
        message.value = 'Lỗi kết nối server. Vui lòng kiểm tra JSON Server.'
        messageType.value = 'alert-danger'
        console.error(error)
    } finally {
        loading.value = false
    }
}

const handleRegister = async () => {
    message.value = ''

    // Validate
    if (registerForm.value.password.length < 6) {
        message.value = 'Mật khẩu phải có ít nhất 6 ký tự'
        messageType.value = 'alert-danger'
        return
    }

    loading.value = true

    try {
        // Kiểm tra email đã tồn tại chưa
        const checkEmail = await axios.get('http://localhost:3000/users', {
            params: {
                email: registerForm.value.email
            }
        })

        if (checkEmail.data.length > 0) {
            message.value = 'Email đã được sử dụng'
            messageType.value = 'alert-danger'
            loading.value = false
            return
        }

        // Tạo user mới
        const newUser = {
            name: registerForm.value.name,
            email: registerForm.value.email,
            password: registerForm.value.password,
            avatar: '/assets/images/avatar.jpg',
            bio: ''
        }

        const response = await axios.post('http://localhost:3000/users', newUser)
        const user = response.data

        // Lưu thành string vào sessionStorage 
        sessionStorage.setItem('currentUserId', String(user.id))
        sessionStorage.setItem('isLoggedIn', 'true')

        message.value = 'Đăng ký thành công! Đang chuyển hướng...'
        messageType.value = 'alert-success'

        // Reset form
        registerForm.value = {
            name: '',
            email: '',
            password: ''
        }

        // CHUYỂN THẲNG VỀ TRANG CHỦ (đã đăng nhập)
        setTimeout(() => {
            router.push({ name: 'TrangChu' })
        }, 1500)

    } catch (error) {
        message.value = 'Lỗi khi đăng ký. Vui lòng thử lại.'
        messageType.value = 'alert-danger'
        console.error(error)
    } finally {
        loading.value = false
    }
}

const goBack = () => {
    router.push({ name: 'TrangChu' })
}
</script>

<style scoped>
:root {
    --bs-primary: #389485;
    --bs-primary-rgb: 56, 148, 133;
}

.btn-primary,
.bg-primary {
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
.nav-pills .show>.nav-link {
    background-color: #389485 !important;
    color: #fff !important;
}
</style>