<template lang="">
    <div>
        <h1>Day la trang About</h1>
        <lable>
            Search: <input type="text" v-model.trim='search'>
        </lable>
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const search = computed({
    get() {
        return route.query.search ?? ''
    },
    set(search) {
        router.replace({
            query: {
                search
            }
        })
    }
});
</script>
<style lang="">

</style>