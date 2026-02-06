<template>
    <div class="bg-light">
        <!-- Header -->
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light py-3">
                    <div class="container-fluid">
                        <!-- Logo -->
                        <a class="navbar-brand d-flex align-items-center" href="#" @click.prevent="goToHome">
                            <div class="bg-primary text-white rounded p-2 me-2">
                                <i class="fas fa-book-open"></i>
                            </div>
                            <span class="fw-bold fs-5">BlogVue</span>
                        </a>

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- Menu -->
                        <div class="collapse navbar-collapse">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active text-primary fw-semibold" href="#"
                                        @click.prevent="goToHome">Trang
                                        chủ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-secondary" href="#">Bài viết</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-secondary" href="#">Hỏi đáp</a>
                                </li>
                            </ul>

                            <!-- Search Bar -->
                            <form class="d-flex me-3 d-none d-lg-flex ms-auto" @submit.prevent="searchPosts">
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-0">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </span>
                                    <input class="form-control border-0 bg-light" type="search"
                                        placeholder="Tìm kiếm bài viết..." v-model="searchKeyword">
                                </div>
                            </form>

                            <!-- Auth Buttons -->
                            <div class="d-flex gap-2" v-if="!isLoggedIn">
                                <button class="btn btn-outline-dark" @click="goToLogin">Đăng nhập</button>
                                <button class="btn btn-primary text-white" @click="goToLogin">Đăng ký</button>
                            </div>
                            <div class="d-flex gap-2 align-items-center" v-else>
                                <button class="btn btn-primary text-white" @click="goToCreatePost">
                                    <i class="fa-solid fa-plus me-2"></i>Viết bài
                                </button>
                                <img :src="currentUser?.avatar || '/assets/images/avatar1.png'"
                                    class="rounded-circle object-fit-cover" width="40" height="40" alt="User"
                                    style="cursor: pointer;" @click="goToProfile">
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container my-5">

            <!-- Hero Section - Bài viết nổi bật -->
            <section class="mb-5" v-if="featuredPost">
                <div class="card border-0 shadow-sm overflow-hidden">
                    <div class="row g-0">
                        <div class="col-sm-7">
                            <img :src="featuredPost.image" class="img-fluid w-100 h-100 object-fit-cover"
                                alt="Bài viết nổi bật">
                        </div>
                        <div class="col-sm-5">
                            <div class="card-body p-4 d-flex flex-column justify-content-center">
                                <div class="mb-3">
                                    <span class="badge bg-primary text-white me-2">BÀI VIẾT NỔI BẬT</span>
                                    <span class="text-muted small">• {{ featuredPost.date }}</span>
                                </div>

                                <h2 class="card-title fw-bold mb-3">
                                    {{ featuredPost.title }}
                                </h2>

                                <p class="card-text text-muted mb-4">
                                    {{ featuredPost.content.substring(0, 150) }}...
                                </p>

                                <div class="d-flex align-items-center mb-4">
                                    <img src="/assets/images/avatar1.png" class="rounded-circle me-3 object-fit-cover"
                                        width="48" height="48" alt="Tác giả">
                                    <div>
                                        <p class="mb-0 fw-bold">{{ featuredPost.author }}</p>
                                        <p class="mb-0 small text-muted">{{ featuredPost.category }}</p>
                                    </div>
                                </div>

                                <button class="btn btn-primary text-white" @click="viewPost(featuredPost.id)">
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

                    <!-- Thông báo loading -->
                    <div v-if="loading" class="text-center py-5">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Đang tải...</span>
                        </div>
                    </div>

                    <!-- Thông báo lỗi -->
                    <div v-if="error" class="alert alert-danger">
                        {{ error }}
                    </div>

                    <!-- Post Grid -->
                    <div class="row row-cols-1 row-cols-md-2 g-4 mb-4" v-if="!loading && posts.length > 0">
                        <!-- Post Card -->
                        <div class="col" v-for="post in posts" :key="post.id">
                            <div class="card border-0 shadow-sm h-100" style="cursor: pointer;"
                                @click="viewPost(post.id)">
                                <div class="card-body">
                                    <img :src="post.image" class="card-img-top rounded-2" alt="Post image">
                                    <h4 class="card-title h5 fw-bold mt-3 mb-2">{{ post.title }}</h4>
                                    <p class="card-text mb-3">
                                        {{ post.content.substring(0, 100) }}...
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <span class="badge bg-light text-dark">{{ post.category }}</span>
                                        <span class="text-muted small">
                                            <i class="bi bi-eye me-1"></i>{{ post.views }}
                                        </span>
                                    </div>
                                    <div class="text-muted text-end small mt-2">
                                        {{ post.date }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Thông báo không có bài viết -->
                    <div v-if="!loading && posts.length === 0" class="text-center py-5">
                        <i class="bi bi-inbox fs-1 text-muted"></i>
                        <p class="text-muted mt-3">Chưa có bài viết nào</p>
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
                            <button class="btn btn-sm btn-outline-secondary" @click="filterByCategory('Thiết kế')">Thiết
                                kế</button>
                            <button class="btn btn-sm btn-outline-secondary"
                                @click="filterByCategory('Phong cách sống')">Phong cách sống</button>
                            <button class="btn btn-sm btn-outline-secondary" @click="filterByCategory('Sức khỏe')">Sức
                                khỏe</button>
                            <button class="btn btn-sm btn-outline-secondary" @click="filterByCategory('Kiến trúc')">Kiến
                                trúc</button>
                            <button class="btn btn-sm btn-outline-secondary" @click="filterByCategory('Công nghệ')">Công
                                nghệ</button>
                            <button class="btn btn-sm btn-outline-secondary" @click="clearFilter">Tất cả</button>
                        </div>
                    </div>

                    <!-- Featured Authors -->
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h3 class="h5 fw-bold mb-4">Tác Giả Nổi Bật</h3>

                            <div class="d-flex align-items-center mb-4">
                                <img src="/assets/images/avatar4.jpg" class="rounded-circle me-3 object-fit-cover"
                                    width="48" height="48" alt="Tác giả">
                                <div>
                                    <p class="mb-0 fw-bold">Marcus Vũ</p>
                                    <p class="mb-0 text-muted small">Nhà Phê Bình Kiến Trúc</p>
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <img src="/assets/images/avatar6.jpg" class="rounded-circle me-3 object-fit-cover"
                                    width="48" height="48" alt="Tác giả">
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
            © 2026 BlogVue. All rights reserved. <br />
            PHAM THUY TRINH
        </footer>

    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Data
const posts = ref([])
const featuredPost = ref(null)
const loading = ref(false)
const error = ref('')
const searchKeyword = ref('')
const newsletterEmail = ref('')
const selectedCategory = ref('')

// User data - lấy từ session
const isLoggedIn = ref(false)
const currentUser = ref(null)

// Methods
const fetchPosts = async () => {
    loading.value = true
    error.value = ''
    try {
        let url = 'http://localhost:3000/posts'

        // Thêm filter theo category nếu có
        if (selectedCategory.value) {
            url += `?category=${selectedCategory.value}`
        }

        const response = await axios.get(url)
        posts.value = response.data

        // Lấy bài viết nổi bật (bài có lượt xem cao nhất)
        if (posts.value.length > 0) {
            featuredPost.value = [...posts.value].sort((a, b) => b.views - a.views)[0]
        }
    } catch (err) {
        error.value = 'Không thể tải bài viết. Vui lòng kiểm tra JSON Server đã chạy chưa.'
        console.error('Lỗi khi lấy dữ liệu:', err)
    } finally {
        loading.value = false
    }
}

const searchPosts = () => {
    if (!searchKeyword.value.trim()) {
        fetchPosts()
        return
    }

    const keyword = searchKeyword.value.toLowerCase()

    // Lọc từ tất cả bài viết
    axios.get('http://localhost:3000/posts')
        .then(response => {
            posts.value = response.data.filter(post =>
                post.title.toLowerCase().includes(keyword) ||
                post.content.toLowerCase().includes(keyword) ||
                post.category.toLowerCase().includes(keyword)
            )
        })
        .catch(err => {
            error.value = 'Lỗi khi tìm kiếm'
            console.error(err)
        })
}

const filterByCategory = (category) => {
    selectedCategory.value = category
    fetchPosts()
}

const clearFilter = () => {
    selectedCategory.value = ''
    searchKeyword.value = ''
    fetchPosts()
}

const viewPost = (postId) => {
    router.push({ name: 'BaiVietChiTiet', params: { id: postId } })
}

const goToHome = () => {
    router.push({ name: 'TrangChu' })
}

const goToLogin = () => {
    router.push({ name: 'DangNhap' })
}

const goToCreatePost = () => {
    router.push({ name: 'TaoBaiViet' })
}

const goToProfile = () => {
    router.push({ name: 'HoSoCaNhan' })
}

const subscribeNewsletter = () => {
    if (!newsletterEmail.value) {
        alert('Vui lòng nhập email')
        return
    }
    alert('Đăng ký thành công!')
    newsletterEmail.value = ''
}

const checkLoginStatus = () => {
    // Kiểm tra session từ router state hoặc query
    const userId = sessionStorage.getItem('currentUserId')
    if (userId) {
        isLoggedIn.value = true
        fetchCurrentUser(userId)
    }
}

const fetchCurrentUser = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`)
        currentUser.value = response.data
    } catch (error) {
        console.error('Lỗi khi lấy thông tin user:', error)
    }
}

// Lifecycle
onMounted(() => {
    checkLoginStatus()
    fetchPosts()
})

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

.card {
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
}
</style>