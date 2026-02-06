// auth.js - Quản lý xác thực người dùng (dùng biến trong bộ nhớ, không dùng localStorage)

// Biến lưu thông tin người dùng đang đăng nhập (lưu trong bộ nhớ RAM)
let currentUser = null

// Hàm đăng nhập
export function login(user) {
    currentUser = user // Lưu thông tin user vào biến
}

// Hàm đăng xuất
export function logout() {
    currentUser = null // Xóa thông tin user khỏi biến
}

// Hàm kiểm tra đã đăng nhập chưa
export function isAuthenticated() {
    return currentUser !== null // Trả về true nếu đã đăng nhập, false nếu chưa
}

// Hàm lấy thông tin người dùng hiện tại
export function getCurrentUser() {
    return currentUser // Trả về thông tin user hoặc null
}
