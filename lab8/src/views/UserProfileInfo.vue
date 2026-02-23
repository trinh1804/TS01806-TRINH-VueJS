<template>
    <div class="card border-0 shadow-sm p-4">
        <h4 class="fw-bold mb-4">Thông tin cơ bản</h4>
        <div class="row g-3">
            <div class="col-md-6">
                <label class="form-label fw-semibold">Họ và tên</label>
                <input type="text" class="form-control" v-model="info.name">
            </div>
            <div class="col-md-6">
                <label class="form-label fw-semibold">Email</label>
                <input type="email" class="form-control" v-model="info.email">
            </div>
            <div class="col-12">
                <label class="form-label fw-semibold">Tiểu sử</label>
                <textarea class="form-control" rows="3" v-model="info.bio"></textarea>
            </div>
            <div class="col-12">
                <button class="btn text-white" style="background-color:#389485">
                    Lưu thông tin
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserProfileInfo',
    data() {
        return {
            info: { name: 'Phạm Thuỳ Trinh', email: 'trinh@gmail.com', bio: 'Viết để chia sẻ, chia sẻ để kết nối.' },
        }
    },
}
</script>