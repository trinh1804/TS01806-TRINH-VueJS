<template>
    <div class="bg-light min-vh-100">
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <nav class="navbar navbar-light">
                <div class="container">
                    <a href="#" class="text-decoration-none d-flex align-items-center gap-2 text-dark"
                        @click.prevent="$router.push({ name: 'Home' })">
                        <i class="fas fa-arrow-left me-2" style="color:#389485"></i>
                        <span class="fw-semibold">Quay lại</span>
                    </a>
                </div>
            </nav>
        </header>

        <main class="container my-5">
            <h2 class="fw-bold mb-4">Tất cả bài viết</h2>
            <div class="row g-4">
                <div class="col-md-6" v-for="post in posts" :key="post.id">
                    <div class="card border-0 shadow-sm h-100" style="cursor:pointer"
                        @click="$router.push({ name: 'BlogPost', params: { id: post.id } })">
                        <img :src="post.image" class="card-img-top rounded-2" style="height:200px;object-fit:cover"
                            alt="">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">{{ post.title }}</h5>
                            <p class="card-text text-muted small">{{ post.content }}</p>
                            <div class="d-flex justify-content-between mt-3">
                                <small class="text-muted">{{ post.author }}</small>
                                <small class="text-muted">{{ post.date }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import img1 from '../assets/images/nghe-thuat-song-toi-gian.jpg';
import img3 from '../assets/images/post-card1.jpg';
import img4 from '../assets/images/suc-khoe-tinh-than.jpeg';
import img2 from '../assets/images/thiet-ke-ben-vung.jpg';

export default {
    name: 'BlogList',
    data() {
        return {
            posts: [
                { id: 1, image: img1, title: 'Nghệ Thuật Sống Tối Giản', content: 'Sống tối giản không có nghĩa là từ bỏ mọi thứ hay sống nghèo khổ...', author: 'Trần Thị Bình', date: '2026-01-15' },
                { id: 2, image: img2, title: 'Thiết Kế Bền Vững: Xu Hướng Của Tương Lai', content: 'Thiết kế bền vững không còn là một lựa chọn mà đã trở thành yêu cầu bắt buộc...', author: 'Nguyễn Mạnh Hùng', date: '2026-01-20' },
                { id: 3, image: img3, title: 'Không Gian Làm Việc Sáng Tạo', content: 'Môi trường làm việc có ảnh hưởng rất lớn đến năng suất và sự sáng tạo...', author: 'Lê Hoàng Minh', date: '2026-01-25' },
                { id: 4, image: img4, title: 'Sức Khỏe Tinh Thần Trong Thời Đại Số', content: 'Trong kỷ nguyên công nghệ số, chúng ta đang đối mặt với khủng hoảng sức khỏe tâm thần...', author: 'Elena Trần', date: '2026-01-28' },
            ]
        }
    }
}
</script>

<style scoped>
.card {
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-4px);
}
</style>