<template>
    <div class="container mt-5">
        <div class="row">
            <form @submit.prevent="submitForm" class="col-sm-4">
                <h3>Thêm học sinh</h3>
                <div class="mb-3 mt-3">
                    <label for="name">Họ tên:</label>
                    <input type="text" class="form-control" id="name" v-model="student.name" required />
                </div>

                <div class="mb-3">
                    <label for="age">Điểm:</label>
                    <input type="number" max="10" min="0" class="form-control" id="score" v-model="student.score"
                        required />
                </div>

                <div class="mb-3">
                    <label for="address">Ngày sinh:</label>
                    <input type="date" class="form-control" id="dob" v-model="student.dob" required />
                </div>

                <button type="submit" class="btn btn-success mb-5">{{ isEditing ? 'Cập nhật' : 'Thêm' }}</button>
                <button type="button" class="btn btn-secondary mb-5 ms-2" @click="resetForm">Làm mới</button>
            </form>

            <div class="col-sm-8">
                <h3>Danh sách học sinh</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Họ tên</th>
                            <th>Điểm</th>
                            <th>Ngày sinh</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(stu, index) in students" :key="index">
                            <td>{{ stu.name }}</td>
                            <td>{{ stu.score }}</td>
                            <td>{{ stu.dob }}</td>
                            <td>
                                <button class="btn btn-warning" @click="editStudent(index)">Sửa</button>
                            </td>
                            <td>
                                <button class="btn btn-danger" @click="deleteStudent(index)">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Dữ liệu ban đầu
const students = ref([
    { name: 'Phạm Thuỳ Trinh', score: 9, dob: '2008-04-18' },
    { name: 'Lê Đình Thắng', score: 8, dob: '2006-08-22' },
]);

const student = ref({
    name: '',
    score: null,
    dob: ''
});

let isEditing = ref(false);
let editingIndex = ref(null);

function submitForm() {
    if (isEditing.value) {
        // Cập nhật thông tin học sinh
        // { ...student.value } tạo 1 bản sao mới của đối tượng student.value
        students.value[editingIndex.value] = { ...student.value };
        isEditing.value = false;
        editingIndex.value = null;
    } else {
        // Thêm học sinh mới
        students.value.push({ ...student.value });
    }
    resetForm()
}

function editStudent(index) {
    student.value = { ...students.value[index] };
    isEditing.value = true;
    editingIndex.value = index;
}

function deleteStudent(index) {
    students.value.splice(index, 1);
}

function resetForm() {
    student.value = {
        name: '',
        score: null,
        dob: ''
    };
}
</script>
