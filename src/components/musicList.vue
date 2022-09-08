<template>
    <div class="musicList">
        <div class="musicTop">
            <div class="title">发现好歌单</div>
            <div class="more">查看更多</div>
        </div>
        <div class="musicContent">
            <van-swipe 
            :loop="false" 
            :width="150" 
            class="my-swpie" 
            :show-indicators="false">
                <van-swipe-item  v-for="item in state.musicList" :key="item" >
                    <!-- <router-link :to="{ path: '/itemMusic', query: { id: item.id } }"> -->
                    <img :src="item.picUrl" alt="" @click="pushItem(item)">
                    <span class="playCount">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-24gl-play"></use>
                        </svg>
                        {{changeCount(item.playCount) }}
                    </span>
                    <span class="name">{{item.name}}</span>
                    <!-- </router-link> -->
                    
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>

<script>
import { getMusicList } from "@/request/api/home";
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const $router=useRouter()
        const state = reactive({
            musicList:[]
        })
        onMounted(async () => {
            let res = await getMusicList()
            console.log(res)
            state.musicList=res.data.result
        })
        function changeCount(num) {
            if (num >= 10000) {
                return (num/10000).toFixed(1)+'万'
            }
        }
        function pushItem(item) {
            $router.push({
                path: '/itemmusic',
                query: {
                    id:item.id
                }
            })
        }
        return {state,changeCount,pushItem}
    }
}
</script>

<style lang="less" deep scoped >
    .musicList{
        width: 100%;
        height: 5rem;
        padding: 0.2rem;
        .musicTop{
            display: flex;
            justify-content: space-between;
            height: 0.6rem;
            .title{
                font-size: 0.37rem;
                font-weight: 900;
            }
            .more{
                padding: 0 0.2rem;
                border: 1px solid #ccc;
                border-radius: 0.3rem;
                text-align: center;
                line-height: 0.6rem;
            }
        }
        .musicContent{
            width: 100%;
            height: 4.5rem;
            padding-top: .2rem;
            .my-swpie{
                height: 100%;
                img{
                    height: 3.3rem;
                    border-radius: 0.2rem;
                }
                .playCount{
                    position: absolute;
                    top: 0.1rem;
                    right: 0.3rem;
                    z-index: 5;
                    color: aliceblue;
                    display: flex;
                    .icon{
                        width: 0.5rem;
                        height: 0.5rem;
                        fill: #fff;
                    }
                    .num{
                        
                        text-align: center;
                        line-height: 0.5rem;
                    }
                }
                .name{
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>