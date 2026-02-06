<template>
    <div class="bg-light">
        <!-- Header -->
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <nav class="navbar navbar-light">
                <div class="container">
                    <a href="#" class="text-decoration-none d-flex align-items-center gap-2 text-dark"
                        @click.prevent="goToHome">
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
                            <a class="nav-link d-flex align-items-center gap-3"
                                :class="{ active: activeSection === 'profile' }" href="#"
                                @click.prevent="activeSection = 'profile'">
                                <i class="fa-solid fa-user"></i>
                                <span class="fw-semibold">Cài đặt hồ sơ</span>
                            </a>
                            <a class="nav-link d-flex align-items-center gap-3"
                                :class="{ active: activeSection === 'posts' }" href="#"
                                @click.prevent="activeSection = 'posts'">
                                <i class="fa-regular fa-file-lines"></i>
                                <span class="fw-semibold">Bài viết đã xuất bản</span>
                            </a>
                            <a class="nav-link d-flex align-items-center gap-3"
                                :class="{ active: activeSection === 'security' }" href="#"
                                @click.prevent="activeSection = 'security'">
                                <i class="fa-solid fa-shield-halved"></i>
                                <span class="fw-semibold">Bảo mật</span>
                            </a>
                        </nav>

                        <!-- User Info -->
                        <div class="pt-4 border-top position-absolute bottom-0 start-0 end-0 p-4 bg-white">
                            <div class="d-flex align-items-center gap-3">
                                <img :src="userProfile.avatar" class="rounded-circle object-fit-cover" width="50"
                                    height="50" alt="User">
                                <div class="flex-grow-1 text-truncate">
                                    <div class="fw-bold small text-truncate">{{ userProfile.name }}</div>
                                    <div class="text-muted small text-truncate">{{ userProfile.email }}</div>
                                </div>
                                <i class="bi bi-box-arrow-right text-muted" @click="logout"
                                    style="cursor: pointer;"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Main Content -->
                <main class="col-sm-9 p-4 p-lg-5">
                    <div class="mx-auto" style="max-width: 900px;">

                        <!-- Profile Section -->
                        <div v-show="activeSection === 'profile'">
                            <header class="mb-5">
                                <h1 class="display-5 fw-bold mb-2">Cài Đặt Tài Khoản</h1>
                            </header>

                            <!-- Profile Photo -->
                            <section class="card border shadow-sm mb-4">
                                <div class="card-body p-4">
                                    <div class="row align-items-center">
                                        <div class="col-auto">
                                            <img :src="userProfile.avatar" class="rounded-circle object-fit-cover"
                                                width="150" height="150" alt="Profile">
                                        </div>
                                        <div class="col">
                                            <h4 class="fw-bold mb-1">Ảnh Đại Diện</h4>
                                            <p class="text-muted small mb-3">PNG, JPG. Tối đa 2MB.</p>
                                            <button class="btn btn-primary text-white" @click="selectAvatar">Tải
                                                ảnh</button>
                                            <input type="file" ref="avatarInput" @change="handleAvatarUpload"
                                                accept="image/*" style="display: none;">
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <!-- Personal Details -->
                            <section class="mb-5">
                                <h3 class="fw-bold mb-4">Thông Tin Cá Nhân</h3>
                                <div class="card border shadow-sm">
                                    <div class="card-body p-4">
                                        <form @submit.prevent="updateProfile">
                                            <div v-if="profileMessage" class="alert" :class="profileMessageType">{{
                                                profileMessage }}</div>
                                            <div class="row g-3 mb-4">
                                                <div class="col-md-6">
                                                    <label class="form-label fw-bold">Họ và tên</label>
                                                    <input type="text" class="form-control" v-model="userProfile.name">
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label fw-bold">Email</label>
                                                    <input type="email" class="form-control"
                                                        v-model="userProfile.email">
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label fw-bold">Tiểu sử</label>
                                                <textarea class="form-control" rows="3"
                                                    v-model="userProfile.bio"></textarea>
                                            </div>
                                            <div class="text-end">
                                                <button type="submit" class="btn btn-primary text-white px-4"
                                                    :disabled="loadingProfile">
                                                    <span v-if="loadingProfile">Đang lưu...</span>
                                                    <span v-else>Lưu</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <!-- Posts Section -->
                        <div v-show="activeSection === 'posts'">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                                <h3 class="fw-bold mb-0">Bài Viết ({{ userPosts.length }})</h3>
                                <button class="btn btn-primary px-4" @click="goToCreatePost">
                                    <i class="fa-solid fa-plus me-2"></i>Tạo mới
                                </button>
                            </div>

                            <div v-if="loadingPosts" class="text-center py-5">
                                <div class="spinner-border text-primary"></div>
                            </div>

                            <div class="card border shadow-sm" v-else>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item p-3" v-for="post in userPosts" :key="post.id">
                                        <div class="d-flex gap-3 align-items-center">
                                            <img :src="post.image" class="rounded object-fit-cover" width="64"
                                                height="64">
                                            <div class="flex-grow-1">
                                                <h5 class="fw-bold mb-1">{{ post.title }}</h5>
                                                <div class="d-flex gap-3 text-muted small">
                                                    <span><i class="bi bi-calendar me-1"></i>{{ post.date }}</span>
                                                    <span><i class="bi bi-eye me-1"></i>{{ post.views }} lượt xem</span>
                                                </div>
                                            </div>
                                            <div class="d-flex gap-2">
                                                <button class="btn btn-sm btn-light" @click="viewPost(post.id)">
                                                    <i class="fa-regular fa-eye"></i>
                                                </button>
                                                <button class="btn btn-sm btn-light text-danger"
                                                    @click="deletePost(post.id)">
                                                    <i class="fa-regular fa-trash-can"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="card-footer bg-light text-center" v-if="userPosts.length === 0">
                                    <p class="text-muted mb-0">Chưa có bài viết.</p>
                                </div>
                            </div>
                        </div>

                        <!-- Security Section -->
                        <div v-show="activeSection === 'security'">
                            <h3 class="fw-bold mb-4">Bảo Mật</h3>
                            <div class="card border shadow-sm">
                                <div class="card-body p-4">
                                    <form @submit.prevent="updatePassword">
                                        <div v-if="securityMessage" class="alert" :class="securityMessageType">{{
                                            securityMessage }}</div>
                                        <div class="mb-3">
                                            <label class="form-label fw-semibold">Mật khẩu hiện tại</label>
                                            <input type="password" class="form-control"
                                                v-model="passwordForm.currentPassword">
                                        </div>
                                        <div class="row g-3 mb-4">
                                            <div class="col-md-6">
                                                <label class="form-label fw-semibold">Mật khẩu mới</label>
                                                <input type="password" class="form-control"
                                                    v-model="passwordForm.newPassword">
                                            </div>
                                            <div class="col-md-6">
                                                <label class="form-label fw-semibold">Xác nhận</label>
                                                <input type="password" class="form-control"
                                                    v-model="passwordForm.confirmPassword">
                                            </div>
                                        </div>
                                        <div class="text-end">
                                            <button type="submit" class="btn btn-primary px-4"
                                                :disabled="loadingSecurity">
                                                <span v-if="loadingSecurity">Đang cập nhật...</span>
                                                <span v-else>Cập nhật</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="border-top pt-5">
                                <div class="card border-danger">
                                    <div class="card-body p-4" style="background-color: rgba(220, 53, 69, 0.05);">
                                        <div class="row align-items-center">
                                            <div class="col-md-8">
                                                <h5 class="text-danger fw-bold mb-2">Xóa Tài Khoản</h5>
                                                <p class="text-muted small mb-md-0">Xóa vĩnh viễn tài khoản và toàn bộ
                                                    nội dung của bạn.</p>
                                            </div>
                                            <div class="col-md-4 text-md-end">
                                                <button class="btn btn-outline-danger">Xoá</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const activeSection = ref('profile')
const avatarInput = ref(null)
const profileMessage = ref('')
const profileMessageType = ref('')
const securityMessage = ref('')
const securityMessageType = ref('')
const loadingProfile = ref(false)
const loadingSecurity = ref(false)
const loadingPosts = ref(false)

const userProfile = ref({
    id: '',
    name: '',
    email: '',
    password: '',
    avatar: '/assets/images/avatar.jpg',
    bio: ''
})

const passwordForm = ref({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
})

const userPosts = ref([])

const goToHome = () => router.push({ name: 'TrangChu' })
const goToCreatePost = () => router.push({ name: 'TaoBaiViet' })
const selectAvatar = () => avatarInput.value.click()

const handleAvatarUpload = async (event) => {
    const file = event.target.files[0]
    if (file) {
        // Giả lập lưu ảnh vào thư mục assets
        const imagePath = `/assets/images/${file.name}`

        userProfile.value.avatar = imagePath

        try {
            await axios.patch(`http://localhost:3000/users/${userProfile.value.id}`, {
                avatar: imagePath
            })

            profileMessage.value = 'Cập nhật ảnh thành công!'
            profileMessageType.value = 'alert-success'
            setTimeout(() => profileMessage.value = '', 3000)
        } catch (error) {
            console.error(error)
        }
    }
}


const updateProfile = async () => {
    if (!userProfile.value.name || !userProfile.value.email) {
        profileMessage.value = 'Vui lòng điền đầy đủ'
        profileMessageType.value = 'alert-danger'
        return
    }
    loadingProfile.value = true
    try {
        await axios.patch(`http://localhost:3000/users/${userProfile.value.id}`, {
            name: userProfile.value.name,
            email: userProfile.value.email,
            bio: userProfile.value.bio
        })
        profileMessage.value = 'Cập nhật thành công!'
        profileMessageType.value = 'alert-success'
        setTimeout(() => profileMessage.value = '', 3000)
    } catch (error) {
        profileMessage.value = 'Lỗi'
        profileMessageType.value = 'alert-danger'
    } finally {
        loadingProfile.value = false
    }
}

const updatePassword = async () => {
    if (!passwordForm.value.currentPassword || !passwordForm.value.newPassword) {
        securityMessage.value = 'Vui lòng điền đầy đủ'
        securityMessageType.value = 'alert-danger'
        return
    }
    if (passwordForm.value.newPassword.length < 6) {
        securityMessage.value = 'Mật khẩu ít nhất 6 ký tự'
        securityMessageType.value = 'alert-danger'
        return
    }
    if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
        securityMessage.value = 'Mật khẩu không khớp'
        securityMessageType.value = 'alert-danger'
        return
    }
    if (userProfile.value.password !== passwordForm.value.currentPassword) {
        securityMessage.value = 'Mật khẩu hiện tại sai'
        securityMessageType.value = 'alert-danger'
        return
    }
    loadingSecurity.value = true
    try {
        await axios.patch(`http://localhost:3000/users/${userProfile.value.id}`, { password: passwordForm.value.newPassword })
        userProfile.value.password = passwordForm.value.newPassword
        securityMessage.value = 'Cập nhật mật khẩu thành công!'
        securityMessageType.value = 'alert-success'
        passwordForm.value = { currentPassword: '', newPassword: '', confirmPassword: '' }
        setTimeout(() => securityMessage.value = '', 3000)
    } catch (error) {
        securityMessage.value = 'Lỗi'
        securityMessageType.value = 'alert-danger'
    } finally {
        loadingSecurity.value = false
    }
}

const viewPost = (postId) => router.push({ name: 'BaiVietChiTiet', params: { id: postId } })

const deletePost = async (postId) => {
    if (confirm('Xóa bài viết?')) {
        try {
            await axios.delete(`http://localhost:3000/posts/${postId}`)
            loadUserPosts()
            alert('Đã xóa')
        } catch (error) {
            alert('Lỗi')
        }
    }
}

const logout = () => {
    if (confirm('Đăng xuất?')) {
        sessionStorage.clear()
        router.push({ name: 'TrangChu' })
    }
}

const loadUserPosts = async () => {
    loadingPosts.value = true
    try {
        const response = await axios.get(`http://localhost:3000/posts?userId=${userProfile.value.id}`)
        userPosts.value = response.data
    } catch (error) {
        console.error(error)
    } finally {
        loadingPosts.value = false
    }
}

const loadUserInfo = async () => {
    const userId = sessionStorage.getItem('currentUserId')
    if (!userId) {
        router.push({ name: 'DangNhap' })
        return
    }
    try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`)
        userProfile.value = response.data
    } catch (error) {
        router.push({ name: 'DangNhap' })
    }
}

onMounted(() => {
    loadUserInfo()
    loadUserPosts()
})
</script>

<style scoped>
.btn-primary,
.bg-primary {
    background-color: #389485 !important;
    border-color: #389485 !important;
}

.nav-pills .nav-link.active {
    background-color: rgba(56, 148, 133, 0.1) !important;
    color: #389485 !important;
}

.form-control:focus {
    border-color: #389485;
    box-shadow: 0 0 0 0.25rem rgba(56, 148, 133, 0.25);
}
</style>