<template>
    <div class="container mt-4">
        <h3>Nhập điểm của bạn</h3>
        <input type="number" v-model.number="score" />
        <p v-if="score < 0 || score > 10" class="text-danger">Vui lòng nhập điểm từ 0 đến 10!</p>
        <p v-else-if="score < 5">Yếu</p>
        <p v-else-if="score >= 5 && score < 6.5">Trung bình</p>
        <p v-else-if="score >= 6.5 && score < 8">Khá</p>
        <p v-else-if="score >= 8 && score < 9">Giỏi</p>
        <p v-else>Xuất sắc</p>

    </div>
</template>
<script setup>
import { ref } from 'vue';

const score = ref('0');
</script>