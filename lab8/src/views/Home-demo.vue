<template lang="">
    <div>
        <h1>Day la trang Home</h1>
    </div>
    <button @click="goToAbout">Go to About</button>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const goToAbout = () => {
    router.push('/about')
}
</script>
<style lang="">

</style>