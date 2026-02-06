<template>
    <div class="bg-light">
        <!-- Header -->
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <nav class="navbar navbar-light">
                <div class="container">
                    <div class="d-flex align-items-center gap-3">
                        <a href="#" class="text-decoration-none d-flex align-items-center gap-2 text-dark"
                            @click.prevent="goBack">
                            <i class="fa-solid fa-arrow-left me-2" style="color: #389485;"></i>
                            <span class="fw-semibold small">Quay lại</span>
                        </a>
                        <div class="vr"></div>
                        <div class="d-flex align-items-center gap-2 text-muted">
                            <i class="bi bi-cloud-check"></i>
                            <span class="small text-uppercase fw-semibold">{{ saveStatus }}</span>
                        </div>
                    </div>

                    <div class="d-flex align-items-center gap-3">
                        <button class="btn btn-light d-flex align-items-center gap-2" @click="previewPost">
                            <i class="bi bi-eye"></i>
                            <span>Xem trước</span>
                        </button>
                        <button class="btn btn-primary text-white" @click="publishPost" :disabled="loading">
                            <span v-if="loading">{{ editMode ? 'Đang cập nhật...' : 'Đang xuất bản...' }}</span>
                            <span v-else>{{ editMode ? 'Cập nhật bài viết' : 'Xuất bản bài viết' }}</span>
                        </button>
                        <img :src="currentUser?.avatar || '/assets/images/avatar1.png'"
                            class="rounded-circle object-fit-cover" width="32" height="32" alt="User">
                    </div>
                </div>
            </nav>
        </header>

        <!-- Main Content -->
        <div class="container mt-4">
            <div class="row">
                <!-- Editor Column -->
                <div class="col-lg-8 mx-auto">
                    <!-- Message -->
                    <div v-if="message" class="alert" :class="messageType">
                        {{ message }}
                    </div>

                    <!-- Cover Image Upload -->
                    <div class="border border-2 border-dashed rounded-2 p-5 mb-4 text-center position-relative"
                        style="border-color: rgba(56, 148, 133, 0.3) !important; background-color: rgba(56, 148, 133, 0.05);">
                        <div v-if="!postData.image">
                            <div class="mb-3">
                                <div class="bg-white rounded-circle d-inline-flex p-3 shadow-sm">
                                    <i class="fa-solid fa-image" style="color: #389485;"></i>
                                </div>
                            </div>
                            <h5 class="fw-bold">Thêm ảnh bìa</h5>
                            <p class="text-muted small mb-3">Kích thước tối ưu: 1200x630px. Kéo thả hoặc nhấn vào.</p>
                            <input type="file" ref="imageInput" @change="handleImageUpload" accept="image/*"
                                style="display: none;">
                            <button class="btn btn-primary text-white" @click="selectImage">Chọn ảnh</button>
                        </div>
                        <div v-else>
                            <img :src="postData.image" class="img-fluid rounded mb-3" style="max-height: 300px;"
                                alt="Cover">
                            <button class="btn btn-sm btn-danger" @click="removeImage">Xóa ảnh</button>
                        </div>
                    </div>

                    <!-- Title Input -->
                    <div class="mb-4">
                        <textarea class="form-control border-0 fw-bold p-2" rows="2" placeholder="Nhập tiêu đề..."
                            style="resize: none; font-size: 2rem !important;" v-model="postData.title"></textarea>
                    </div>

                    <!-- Content Area -->
                    <div class="mb-5">
                        <textarea class="form-control border-0 p-2" rows="15"
                            placeholder="Bắt đầu câu chuyện của bạn tại đây..." v-model="postData.content"></textarea>
                    </div>
                </div>

                <!-- Sidebar (hidden on mobile) -->
                <aside class="col-lg-4 d-none d-xl-block">
                    <!-- Status Card -->
                    <div class="card border shadow-sm mb-3">
                        <div class="card-body">
                            <h6 class="text-uppercase text-muted fw-bold small mb-3">Trạng thái & Hiển thị</h6>

                            <div class="d-flex justify-content-between align-items-center mb-3 small">
                                <span class="text-muted">Hiển thị</span>
                                <div class="d-flex">
                                    <select class="form-select" v-model="postData.visibility">
                                        <option>Công khai</option>
                                        <option>Riêng tư</option>
                                    </select>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between align-items-center mb-3 small">
                                <span class="text-muted">Xuất bản</span>
                                <div class="d-flex fw-semibold">
                                    <span>Ngay lập tức <i class="fa-solid fa-calendar-days ms-1"
                                            style="color: #389485;"></i></span>
                                </div>
                            </div>

                            <button class="btn btn-outline-primary w-100" @click="saveDraft">Lưu nháp</button>
                        </div>
                    </div>

                    <!-- Settings Card -->
                    <div class="card border shadow-sm mb-3">
                        <div class="card-body">
                            <!-- Category -->
                            <div class="mb-3">
                                <label class="text-uppercase text-muted fw-bold small mb-2">Danh mục</label>
                                <select class="form-select" v-model="postData.category">
                                    <option>Thiết kế</option>
                                    <option>Phong cách sống</option>
                                    <option>Sức khỏe</option>
                                    <option>Kiến trúc</option>
                                    <option>Công nghệ</option>
                                </select>
                            </div>

                            <!-- Tags -->
                            <div class="mb-3">
                                <label class="text-uppercase text-muted fw-bold small mb-2">Thẻ</label>
                                <div class="mb-2 d-flex flex-wrap gap-2">
                                    <span class="badge bg-primary d-inline-flex align-items-center gap-1"
                                        v-for="(tag, index) in postData.tags" :key="index">
                                        {{ tag }} <i class="bi bi-x small" style="cursor: pointer;"
                                            @click="removeTag(index)"></i>
                                    </span>
                                </div>
                                <div class="input-group input-group-sm">
                                    <input type="text" class="form-control" placeholder="Thêm thẻ..." v-model="newTag"
                                        @keyup.enter="addTag">
                                    <button class="btn btn-primary text-white" @click="addTag">Thêm</button>
                                </div>
                            </div>

                            <!-- Author -->
                            <div class="mb-0">
                                <label class="text-uppercase text-muted fw-bold small mb-2">Tác giả</label>
                                <input type="text" class="form-control" v-model="postData.author" readonly>
                            </div>
                        </div>
                    </div>

                    <!-- Delete -->
                    <div class="text-center">
                        <button class="btn btn-link text-danger text-decoration-none small" @click="clearForm">
                            <i class="fa-regular fa-trash-can me-1" style="color: #dd3d4b;"></i> Xóa nội dung
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Data
const loading = ref(false)
const message = ref('')
const messageType = ref('')
const saveStatus = ref('Chưa lưu')
const imageInput = ref(null)
const newTag = ref('')
const currentUser = ref(null)

const editMode = ref(false)
const editPostId = ref(null)

const postData = ref({
    title: '',
    content: '',
    image: '',
    category: 'Thiết kế',
    tags: [],
    author: '',
    userId: 0,
    date: '',
    views: 0,
    visibility: 'Công khai'
})

// Methods
const selectImage = () => {
    imageInput.value.click()
}

const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            postData.value.image = `/assets/images/${file.name}`
            saveStatus.value = 'Chưa lưu'
        }
        reader.readAsDataURL(file)
    }
}

const removeImage = () => {
    postData.value.image = ''
    saveStatus.value = 'Chưa lưu'
}

const addTag = () => {
    if (newTag.value && !postData.value.tags.includes(newTag.value)) {
        postData.value.tags.push(newTag.value)
        newTag.value = ''
        saveStatus.value = 'Chưa lưu'
    }
}

const removeTag = (index) => {
    postData.value.tags.splice(index, 1)
    saveStatus.value = 'Chưa lưu'
}

const validatePost = () => {
    if (!postData.value.title) {
        message.value = 'Vui lòng nhập tiêu đề'
        messageType.value = 'alert-danger'
        return false
    }

    if (!postData.value.content) {
        message.value = 'Vui lòng nhập nội dung'
        messageType.value = 'alert-danger'
        return false
    }

    if (!postData.value.image) {
        message.value = 'Vui lòng chọn ảnh bìa'
        messageType.value = 'alert-danger'
        return false
    }

    return true
}

const saveDraft = () => {
    if (!validatePost()) return

    saveStatus.value = 'Đã lưu nháp'
    message.value = 'Đã lưu bài viết nháp'
    messageType.value = 'alert-success'

    setTimeout(() => {
        message.value = ''
    }, 2000)
}

const publishPost = async () => {
    if (!validatePost()) return

    loading.value = true
    message.value = ''

    try {
        const postPayload = {
            title: postData.value.title,
            content: postData.value.content,
            image: postData.value.image,
            category: postData.value.category,
            tags: postData.value.tags,
            author: postData.value.author,
            userId: parseInt(postData.value.userId), // Đảm bảo là number
            date: editMode.value ? postData.value.date : new Date().toISOString().split('T')[0],
            views: editMode.value ? postData.value.views : 0,
            visibility: postData.value.visibility
        }

        console.log('=== PUBLISH DEBUG ===')
        console.log('userId:', postPayload.userId, 'type:', typeof postPayload.userId)

        let response
        let postId

        if (editMode.value && editPostId.value) {
            response = await axios.put(
                `http://localhost:3000/posts/${editPostId.value}`,
                postPayload
            )
            postId = editPostId.value
            message.value = 'Cập nhật bài viết thành công!'
        } else {
            response = await axios.post(
                'http://localhost:3000/posts',
                postPayload
            )
            postId = response.data.id
            message.value = 'Xuất bản bài viết thành công!'
        }

        messageType.value = 'alert-success'
        saveStatus.value = 'Đã xuất bản'

        setTimeout(() => {
            router.push({
                name: 'BaiVietChiTiet',
                params: { id: postId }
            })
        }, 1500)

    } catch (error) {
        console.error('Error:', error)
        message.value = `Lỗi: ${error.response?.data || error.message}`
        messageType.value = 'alert-danger'
    } finally {
        loading.value = false
    }
}

const previewPost = () => {
    if (!validatePost()) return
    alert('Chức năng xem trước đang được phát triển')
}

const clearForm = () => {
    if (confirm('Bạn có chắc muốn xóa toàn bộ nội dung?')) {
        if (editMode.value) {
            // Nếu đang edit, quay về trang chi tiết
            router.push({ name: 'BaiVietChiTiet', params: { id: editPostId.value } })
        } else {
            // Reset form
            postData.value = {
                title: '',
                content: '',
                image: '',
                category: 'Thiết kế',
                tags: [],
                author: postData.value.author,
                userId: postData.value.userId,
                date: '',
                views: 0,
                visibility: 'Công khai'
            }
            saveStatus.value = 'Chưa lưu'
        }
    }
}

const goBack = () => {
    if (postData.value.title || postData.value.content) {
        if (confirm('Bạn có muốn lưu nháp trước khi thoát?')) {
            saveDraft()
        }
    }
    router.push({ name: 'TrangChu' })
}

const loadUserInfo = async () => {
    console.log('=== LOAD USER INFO ===')

    const userId = sessionStorage.getItem('currentUserId')
    if (!userId) {
        router.push({ name: 'DangNhap' })
        return
    }

    try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`)
        currentUser.value = response.data

        // Parse thành INT để đảm bảo consistency
        postData.value.userId = parseInt(currentUser.value.id)
        postData.value.author = currentUser.value.name

        console.log('Current user ID:', currentUser.value.id)
        console.log('Post userId (parsed):', postData.value.userId)
        console.log('Type:', typeof postData.value.userId)

        if (route.query.mode === 'edit' && route.query.id) {
            await loadPostForEdit(route.query.id)
        }
    } catch (error) {
        console.error('Lỗi khi lấy thông tin user:', error)
    }
}

const loadPostForEdit = async (postId) => {
    try {
        const response = await axios.get(`http://localhost:3000/posts/${postId}`)
        const post = response.data

        console.log('Post loaded:', post)
        console.log('Post userId:', post.userId, 'type:', typeof post.userId)
        console.log('Current userId:', postData.value.userId, 'type:', typeof postData.value.userId)

        // So sánh sau khi parse
        if (parseInt(post.userId) !== parseInt(postData.value.userId)) {
            message.value = 'Bạn không có quyền chỉnh sửa bài viết này'
            messageType.value = 'alert-danger'
            setTimeout(() => {
                router.push({ name: 'TrangChu' })
            }, 2000)
            return
        }

        editMode.value = true
        editPostId.value = postId
        postData.value = {
            title: post.title,
            content: post.content,
            image: post.image,
            category: post.category,
            tags: [...post.tags],
            author: post.author,
            userId: parseInt(post.userId), // Parse thành int
            date: post.date,
            views: post.views,
            visibility: post.visibility || 'Công khai'
        }

        saveStatus.value = 'Chế độ chỉnh sửa'

    } catch (error) {
        message.value = 'Không thể tải bài viết để chỉnh sửa'
        messageType.value = 'alert-danger'
        console.error('Error loading post:', error)
        setTimeout(() => {
            router.push({ name: 'TrangChu' })
        }, 2000)
    }
}


// Lifecycle
onMounted(() => {
    loadUserInfo()
})
</script>

<style scoped>
:root {
    --bs-primary: #389485;
}

.btn-primary,
.bg-primary {
    background-color: #389485 !important;
    border-color: #389485 !important;
}

.btn-outline-primary {
    color: #389485 !important;
    border-color: #389485 !important;
}

.btn-outline-primary:hover {
    background-color: #389485 !important;
    color: #ffffff !important;
}

.text-primary {
    color: #389485 !important;
}

.badge.bg-primary {
    background-color: rgba(56, 148, 133, 0.1) !important;
    color: #389485 !important;
}

.form-control:focus,
.form-select:focus {
    border-color: #389485;
    box-shadow: 0 0 0 0.25rem rgba(56, 148, 133, 0.25);
}

textarea {
    resize: vertical !important;
}
</style>