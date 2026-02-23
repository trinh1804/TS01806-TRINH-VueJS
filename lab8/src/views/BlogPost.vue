<template>
    <div class="bg-light min-vh-100">
        <header class="sticky-top bg-white border-bottom shadow-sm">
            <nav class="navbar navbar-light">
                <div class="container">
                    <a href="#" class="text-decoration-none d-flex align-items-center gap-2 text-dark"
                        @click.prevent="$router.push({ name: 'BlogList' })">
                        <i class="fas fa-arrow-left me-2" style="color:#389485"></i>
                        <span class="fw-semibold">Quay lại</span>
                    </a>
                </div>
            </nav>
        </header>

        <div class="container my-5">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="bg-white rounded shadow-sm p-4 p-md-5">
                        <img :src="post.image" class="w-100 rounded-2" style="height:350px;object-fit:cover" alt="">
                        <h1 class="fw-bold mb-3 mt-3">{{ post.title }}</h1>
                        <p class="lead" style="line-height:1.8">{{ post.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import img1 from '../assets/images/nghe-thuat-song-toi-gian.jpg';
import img3 from '../assets/images/post-card1.jpg';
import img4 from '../assets/images/suc-khoe-tinh-than.jpeg';
import img2 from '../assets/images/thiet-ke-ben-vung.jpg';

const allPosts = [
    { id: '1', title: 'Nghệ Thuật Sống Tối Giản', content: 'Trong xã hội hiện đại đầy rẫy những tiếng ồn và sự hối hả, việc sống tối giản không chỉ là một xu hướng mà còn là một triết lý sống giúp chúng ta tìm lại sự cân bằng và ý nghĩa thực sự của cuộc sống. Sống tối giản không có nghĩa là từ bỏ mọi thứ hay sống nghèo khổ. Đó là về việc loại bỏ những thứ không cần thiết để tập trung vào những gì thực sự quan trọng.', image: img1 },
    { id: '2', title: 'Thiết Kế Bền Vững: Xu Hướng Của Tương Lai', content: 'Thiết kế bền vững không còn là một lựa chọn mà đã trở thành một yêu cầu bắt buộc trong ngành kiến trúc và xây dựng hiện đại. Với tình trạng biến đổi khí hậu ngày càng nghiêm trọng, việc tạo ra những công trình kiến trúc thân thiện với môi trường là trách nhiệm của mỗi kiến trúc sư.', image: img2 },
    { id: '3', title: 'Không Gian Làm Việc Sáng Tạo', content: 'Môi trường làm việc có ảnh hưởng rất lớn đến năng suất và sự sáng tạo của chúng ta. Một không gian được thiết kế tốt không chỉ giúp chúng ta làm việc hiệu quả hơn mà còn mang lại cảm giác hứng khởi và động lực mỗi ngày. Ánh sáng là yếu tố quan trọng nhất.', image: img3 },
    { id: '4', title: 'Sức Khỏe Tinh Thần Trong Thời Đại Số', content: 'Trong kỷ nguyên công nghệ số, chúng ta kết nối với cả thế giới chỉ qua một chiếc điện thoại, nhưng đồng thời cũng đang đối mặt với một cuộc khủng hoảng sức khỏe tâm thần chưa từng có. Mạng xã hội, công việc không ngừng nghỉ, và áp lực thành công đang dần ăn mòn sức khỏe tinh thần.', image: img4 },
]

export default {
    name: 'BlogPost',
    computed: {
        post() {
            // Dùng tham số động :id từ route để tìm bài viết
            return allPosts.find(p => p.id === this.$route.params.id) || null
        }
    }
}
</script>