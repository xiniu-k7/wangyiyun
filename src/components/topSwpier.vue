<template>
    <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in state.images" :key="image">
            <img :src="image.pic" />
        </van-swipe-item>
    </van-swipe>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import {getBanner} from '@/request/api/home'
    export default {
        setup() {
            const state = reactive({
                images:[

            ]});
            onMounted(async () => {
                // axios.get('https://autumnfish.cn/banner?type=2').then((res) => {
                //     console.log(res);
                //     state.images=res.data.banners
                // })
                let res = await getBanner();
                state.images=res.data.banners
                // console.log(res)
            })
            return { state };
        },
    };
</script>
<style lang="less" scoped>
.van-swipe{
    width: 100%;
    height: 4rem;
    .van-swipe__track{
        .van-swipe-item{
            padding: 0 0.2rem;
            img{
                width: 100%;
                height: 100%;
                border-radius: 0.2rem;
            }
        }
    }
}
</style>