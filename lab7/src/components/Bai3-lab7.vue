<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-6">
                <h3>Form Đăng Ký</h3>
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label>Họ tên:</label>
                        <input type="text" class="form-control" v-model="form.name" placeholder="Nhập họ và tên">
                    </div>
                    <div class="mb-3">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="form.email" placeholder="email@gmail.com">
                    </div>
                    <div class="mb-3">
                        <label>Mật khẩu:</label>
                        <input type="password" class="form-control" v-model="form.password" placeholder="Nhập mật khẩu">
                    </div>
                    <div class="mb-3">
                        <label>Ngày sinh:</label>
                        <input type="date" class="form-control" v-model="form.dob">
                    </div>
                    <div class="mb-3">
                        <label>Giới tính:</label><br>
                        <input type="radio" value="Nam" v-model="form.gender">Nam
                        <input type="radio" value="Nữ" v-model="form.gender">Nữ
                        <input type="radio" value="Khác" v-model="form.gender">Khác
                    </div>
                    <div class="mb-3">
                        <label>Ngôn ngữ:</label><br>
                        <input type="checkbox" value="Tiếng Việt" v-model="form.languages">Tiếng Việt
                        <input type="checkbox" value="Tiếng Anh" v-model="form.languages">Tiếng Anh
                        <input type="checkbox" value="Tiếng Nhật" v-model="form.languages">Tiếng Nhật
                    </div>
                    <button type="submit" class="btn btn-primary mb-3 me-3">Đăng ký</button>
                    <button type="button" class="btn btn-secondary mb-3" @click="resetForm">Làm mới</button>
                </form>
            </div>

            <div v-if="submitted" class="col-sm-6">
                <h3>Thông tin đã đăng ký:</h3>
                <p><strong>Họ tên:</strong> {{ submitted.name }}</p>
                <p><strong>Email:</strong> {{ submitted.email }}</p>
                <p><strong>Ngày sinh:</strong> {{ submitted.dob }}</p>
                <p><strong>Giới tính:</strong> {{ submitted.gender }}</p>
                <p><strong>Ngôn ngữ:</strong> {{ submitted.languages.join(', ') }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const form = ref({
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    languages: []
});

const submitted = ref(null)

const submitForm = () => {
    submitted.value = { ...form.value }
}

const resetForm = () => {
    form.value = {
        name: '',
        email: '',
        password: '',
        dob: '',
        gender: '',
        languages: []
    }
    submitted.value = null
}
</script>