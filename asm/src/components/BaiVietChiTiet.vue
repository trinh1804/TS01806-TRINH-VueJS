<template>
    <div class="bg-light min-vh-100">
        <!-- Header -->
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <nav class="navbar navbar-light">
                <div class="container">
                    <a href="#" class="text-decoration-none d-flex align-items-center gap-2 text-dark"
                        @click.prevent="goBack">
                        <i class="fa-solid fa-arrow-left me-2" style="color: #389485;"></i>
                        <span class="fw-semibold">Quay lại</span>
                    </a>

                    <!-- Action buttons nếu là tác giả -->
                    <div class="d-flex gap-2" v-if="isAuthor">
                        <button class="btn btn-sm btn-outline-primary" @click="editPost">
                            <i class="fa-regular fa-pen-to-square me-1"></i>Chỉnh sửa
                        </button>
                        <button class="btn btn-sm btn-outline-danger" @click="deletePost">
                            <i class="fa-regular fa-trash-can me-1"></i>Xóa
                        </button>
                    </div>
                </div>
            </nav>
        </header>

        <!-- Main Content -->
        <main class="container my-5">
            <!-- Loading -->
            <div v-if="loading" class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Đang tải...</span>
                </div>
            </div>

            <!-- Error -->
            <div v-if="error" class="alert alert-danger">
                {{ error }}
            </div>

            <!-- Post Content -->
            <div v-if="!loading && post" class="row justify-content-center">
                <div class="col-lg-8">
                    <!-- Post Header -->
                    <article class="bg-white rounded shadow-sm p-4 p-md-5 mb-4">
                        <!-- Category & Date -->
                        <div class="mb-4">
                            <span class="badge bg-primary text-white me-2">{{ post.category }}</span>
                            <span class="text-muted small">{{ post.date }}</span>
                        </div>

                        <!-- Title -->
                        <h1 class="display-5 fw-bold mb-4">{{ post.title }}</h1>

                        <!-- Author Info -->
                        <div class="d-flex align-items-center mb-4 pb-4 border-bottom">
                            <img :src="postAuthor?.avatar || '/assets/images/avatar1.png'"
                                class="rounded-circle me-3 object-fit-cover" width="56" height="56" alt="Author">
                            <div class="flex-grow-1">
                                <p class="mb-0 fw-bold">{{ post.author }}</p>
                                <p class="mb-0 text-muted small">
                                    <i class="bi bi-eye me-1"></i>{{ post.views }} lượt xem
                                </p>
                            </div>
                            <div class="d-flex gap-2">
                                <button class="btn btn-sm btn-outline-secondary">
                                    <i class="bi bi-bookmark"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-secondary">
                                    <i class="bi bi-share"></i>
                                </button>
                            </div>
                        </div>

                        <!-- Cover Image -->
                        <div class="mb-4" v-if="post.image">
                            <img :src="post.image" class="img-fluid rounded w-100" alt="Cover">
                        </div>

                        <!-- Content -->
                        <div class="post-content mb-5">
                            <p class="lead" style="white-space: pre-wrap;">{{ post.content }}</p>
                        </div>

                        <!-- Tags -->
                        <div class="mb-4" v-if="post.tags && post.tags.length > 0">
                            <h6 class="text-muted small text-uppercase mb-3">Thẻ</h6>
                            <div class="d-flex flex-wrap gap-2">
                                <span class="badge bg-light text-dark" v-for="tag in post.tags" :key="tag">
                                    #{{ tag }}
                                </span>
                            </div>
                        </div>
                    </article>

                    <!-- Comments Section -->
                    <div class="bg-white rounded shadow-sm p-4 p-md-5">
                        <h3 class="fw-bold mb-4">
                            Bình luận ({{ comments.length }})
                        </h3>

                        <!-- Add Comment Form -->
                        <div v-if="isLoggedIn" class="mb-4">
                            <div class="d-flex gap-3 mb-3">
                                <img :src="currentUser?.avatar || '/assets/images/avatar1.png'"
                                    class="rounded-circle object-fit-cover" width="48" height="48" alt="User">
                                <div class="flex-grow-1">
                                    <textarea class="form-control" rows="3" placeholder="Viết bình luận của bạn..."
                                        v-model="newComment"></textarea>
                                </div>
                            </div>
                            <div class="text-end">
                                <button class="btn btn-primary text-white" @click="addComment"
                                    :disabled="!newComment || loadingComment">
                                    <span v-if="loadingComment">Đang gửi...</span>
                                    <span v-else>Gửi bình luận</span>
                                </button>
                            </div>
                        </div>

                        <div v-else class="alert alert-info">
                            <a href="#" @click.prevent="goToLogin" class="text-decoration-none">Đăng nhập</a> để bình
                            luận
                        </div>

                        <!-- Comments List -->
                        <div v-if="comments.length > 0" class="mt-4">
                            <div class="border-bottom pb-4 mb-4" v-for="comment in comments" :key="comment.id">
                                <div class="d-flex gap-3">
                                    <img :src="comment.userAvatar || '/assets/images/avatar1.png'"
                                        class="rounded-circle object-fit-cover" width="48" height="48" alt="User">
                                    <div class="flex-grow-1">
                                        <div class="d-flex justify-content-between align-items-start mb-2">
                                            <div>
                                                <p class="mb-0 fw-bold">{{ comment.userName }}</p>
                                                <p class="mb-0 text-muted small">{{ comment.date }}</p>
                                            </div>
                                            <button v-if="comment.userId == currentUserId"
                                                class="btn btn-sm btn-link text-danger"
                                                @click="deleteComment(comment.id)">
                                                <i class="bi bi-trash"></i>
                                            </button>
                                        </div>
                                        <p class="mb-0">{{ comment.content }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else class="text-center py-4 text-muted">
                            <i class="bi bi-chat-dots fs-1"></i>
                            <p class="mt-2">Chưa có bình luận nào</p>
                        </div>
                    </div>
                </div>

                <!-- Sidebar -->
                <aside class="col-lg-4">
                    <!-- Author Card -->
                    <div class="card border-0 shadow-sm mb-4">
                        <div class="card-body p-4">
                            <h5 class="fw-bold mb-3">Về tác giả</h5>
                            <div class="d-flex align-items-center mb-3">
                                <img :src="postAuthor?.avatar || '/assets/images/avatar1.png'"
                                    class="rounded-circle me-3 object-fit-cover" width="64" height="64" alt="Author">
                                <div>
                                    <p class="mb-0 fw-bold">{{ post.author }}</p>
                                    <p class="mb-0 text-muted small">{{ postAuthor?.bio || 'Tác giả' }}</p>
                                </div>
                            </div>
                            <button class="btn btn-outline-primary w-100">
                                <i class="bi bi-person-plus me-2"></i>Theo dõi
                            </button>
                        </div>
                    </div>

                    <!-- Related Posts -->
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4">
                            <h5 class="fw-bold mb-3">Bài viết liên quan</h5>
                            <div class="mb-3" v-for="related in relatedPosts" :key="related.id">
                                <a href="#" class="text-decoration-none text-dark"
                                    @click.prevent="viewPost(related.id)">
                                    <div class="d-flex gap-3">
                                        <img :src="related.image" class="rounded object-fit-cover" width="80"
                                            height="80" alt="Post">
                                        <div>
                                            <h6 class="fw-bold mb-1">{{ related.title }}</h6>
                                            <p class="text-muted small mb-0">{{ related.date }}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    </div>
</template>

<script setup>
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

// Data
const post = ref(null)
const comments = ref([])
const relatedPosts = ref([])
const loading = ref(false)
const loadingComment = ref(false)
const error = ref('')
const newComment = ref('')

// User data
const isLoggedIn = ref(false)
const currentUserId = ref(0)
const currentUser = ref(null)
const postAuthor = ref(null)

// Computed
const isAuthor = computed(() => {
    const postUserId = parseInt(post.value?.userId)
    const currentId = parseInt(currentUserId.value)

    const result = isLoggedIn.value &&
        post.value &&
        !isNaN(postUserId) &&
        !isNaN(currentId) &&
        postUserId === currentId

    return result
})

// Methods
const fetchPost = async () => {
    loading.value = true
    error.value = ''

    try {
        const postId = route.params.id
        const response = await axios.get(`http://localhost:3000/posts/${postId}`)
        post.value = response.data

        // Tăng lượt xem
        await axios.patch(`http://localhost:3000/posts/${postId}`, {
            views: post.value.views + 1
        })
        post.value.views += 1

        // THÊM DÒNG NÀY - Lấy thông tin tác giả
        await fetchPostAuthor(post.value.userId)

        // Load comments và related posts
        fetchComments()
        fetchRelatedPosts()

    } catch (err) {
        error.value = 'Không tìm thấy bài viết'
        console.error(err)
    } finally {
        loading.value = false
    }
}

const fetchComments = async () => {
    try {
        const postId = route.params.id
        const response = await axios.get('http://localhost:3000/comments', {
            params: {
                postId: postId
            }
        })

        // Lấy avatar cho từng comment
        const commentsWithAvatar = await Promise.all(
            response.data.map(async (comment) => {
                try {
                    const userResponse = await axios.get(`http://localhost:3000/users/${comment.userId}`)
                    return {
                        ...comment,
                        userAvatar: userResponse.data.avatar
                    }
                } catch (err) {
                    console.error(`Không tải được avatar cho user ${comment.userId}`)
                    return {
                        ...comment,
                        userAvatar: '/assets/images/avatar.jpg'
                    }
                }
            })
        )

        comments.value = commentsWithAvatar
    } catch (err) {
        console.error('Lỗi khi tải bình luận:', err)
    }
}

const fetchRelatedPosts = async () => {
    try {
        const response = await axios.get('http://localhost:3000/posts', {
            params: {
                category: post.value.category,
                _limit: 3
            }
        })
        // Loại bỏ bài viết hiện tại
        relatedPosts.value = response.data.filter(p => p.id != post.value.id)
    } catch (err) {
        console.error('Lỗi khi tải bài viết liên quan:', err)
    }
}

const fetchPostAuthor = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/users/${userId}`)
        postAuthor.value = response.data
    } catch (err) {
        console.error('Lỗi khi tải thông tin tác giả:', err)
    }
}

const addComment = async () => {
    if (!newComment.value) return

    loadingComment.value = true

    try {
        const comment = {
            postId: parseInt(route.params.id),
            userId: currentUserId.value,
            userName: currentUser.value.name,
            content: newComment.value,
            date: new Date().toISOString().split('T')[0]
        }

        await axios.post('http://localhost:3000/comments', comment)

        // Reload comments (sẽ tự động load avatar)
        await fetchComments()

        newComment.value = ''

        // Hiển thị thông báo thành công
        const tempMessage = document.createElement('div')
        tempMessage.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3'
        tempMessage.style.zIndex = '9999'
        tempMessage.textContent = 'Đã thêm bình luận!'
        document.body.appendChild(tempMessage)

        setTimeout(() => {
            tempMessage.remove()
        }, 2000)

    } catch (err) {
        alert('Lỗi khi thêm bình luận')
        console.error(err)
    } finally {
        loadingComment.value = false
    }
}

const deleteComment = async (commentId) => {
    if (!confirm('Bạn có chắc muốn xóa bình luận này?')) return

    try {
        await axios.delete(`http://localhost:3000/comments/${commentId}`)
        await fetchComments()
        alert('Đã xóa bình luận')
    } catch (err) {
        alert('Lỗi khi xóa bình luận')
        console.error(err)
    }
}

const editPost = () => {
    router.push({
        name: 'TaoBaiViet',
        query: {
            mode: 'edit',
            id: post.value.id
        }
    })
}

const deletePost = async () => {
    if (!confirm('Bạn có chắc muốn xóa bài viết này?')) return

    try {
        await axios.delete(`http://localhost:3000/posts/${route.params.id}`)
        alert('Đã xóa bài viết')
        router.push({ name: 'TrangChu' })
    } catch (err) {
        alert('Lỗi khi xóa bài viết')
        console.error(err)
    }
}

const viewPost = (postId) => {
    router.push({ name: 'BaiVietChiTiet', params: { id: postId } })
}

const goBack = () => {
    router.push({ name: 'TrangChu' })
}

const goToLogin = () => {
    router.push({ name: 'DangNhap' })
}

const loadUserInfo = async () => {
    const userId = sessionStorage.getItem('currentUserId')
    if (userId) {
        isLoggedIn.value = true
        currentUserId.value = parseInt(userId) // Parse thành int

        console.log('=== USER INFO (CHI TIET) ===')
        console.log('Session userId:', userId)
        console.log('Parsed userId:', currentUserId.value)

        try {
            const response = await axios.get(`http://localhost:3000/users/${userId}`)
            currentUser.value = response.data
        } catch (error) {
            console.error('Lỗi khi lấy thông tin user:', error)
        }
    }
}

// Lifecycle
onMounted(() => {
    loadUserInfo()
    fetchPost()
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

.post-content {
    font-size: 1.1rem;
    line-height: 1.8;
}

.form-control:focus {
    border-color: #389485;
    box-shadow: 0 0 0 0.25rem rgba(56, 148, 133, 0.25);
}
</style>