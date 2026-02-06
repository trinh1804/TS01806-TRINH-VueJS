import { createRouter, createWebHistory } from 'vue-router'
import BaiVietChiTiet from '../components/BaiVietChiTiet.vue'
import DangNhapDangKy from '../components/DangNhap-DangKy.vue'
import HoSoCaNhan from '../components/HoSoCaNhan.vue'
import TaoBaiViet from '../components/TaoBaiViet.vue'
import TrangChu from '../components/TrangChu.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'TrangChu',
            component: TrangChu
        },
        {
            path: '/dang-nhap',
            name: 'DangNhap',
            component: DangNhapDangKy
        },
        {
            path: '/tao-bai-viet',
            name: 'TaoBaiViet',
            component: TaoBaiViet,
            meta: { requiresAuth: true }
        },
        {
            path: '/bai-viet/:id',
            name: 'BaiVietChiTiet',
            component: BaiVietChiTiet
        },
        {
            path: '/ho-so',
            name: 'HoSoCaNhan',
            component: HoSoCaNhan,
            meta: { requiresAuth: true }
        }
    ]
})

// Kiểm tra đăng nhập
router.beforeEach((to, from, next) => {
    const isLoggedIn = sessionStorage.getItem('currentUserId')

    if (to.meta.requiresAuth && !isLoggedIn) {
        next('/dang-nhap')
    } else {
        next()
    }
})

export default router