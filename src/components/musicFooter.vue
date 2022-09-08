<template>
    <div class="musicFooter">
        <div class="footer-l" @click="updateDetailShow">
            <img :src="playList[playListIndex].al.picUrl" alt="">
            <div>
                <span>{{playList[playListIndex].name}}</span>
                <p>横划切换上下首</p>
            </div>
        </div>
        <div class="footer-r">
            <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnShow">
                <use xlink:href="#icon-bofang"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-caozuo-bofang-zanting"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-caidan"></use>
            </svg>
        </div>
        <van-popup v-model:show="detailShow" position="bottom" :style="{ height: '100%' }" >
            <musicDetail :musicDetail='playList[playListIndex]' :play="play" :isbtnShow="isbtnShow" :addDuration='addDuration'/>
        </van-popup>
    </div>
    <audio ref="audio" :src=" `https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import musicDetail from './musicDetail.vue'

export default {
    data() {
        return {
            interval:0
        }
    },
    components: { musicDetail },
    computed: {
            ...mapState(['playList','playListIndex','isbtnShow','detailShow','isLyricShow'])
    },
    mounted() {
        // console.log(this.$refs)
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)    
    },
    updated() {
        this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)    
    },
    methods: {
        play() {
            if (this.$refs.audio.paused) {
                this.$refs.audio.play()
                this.updateIsbtnShow(false)
                this.updateTime()
            } else {
                this.$refs.audio.pause()
                this.updateIsbtnShow(true)
                clearInterval(this.interval)
            }
        },
        addDuration() {
            this.updateDuration(this.$refs.audio.duration)    
        },
        updateTime() {
            this.interval= setInterval(() => {
                this.updateCurrentTime(this.$refs.audio.currentTime)
            },1000)
        },
        ...mapMutations(['updateIsbtnShow','updateDetailShow','updateCurrentTime','updateDuration'])
    },
    watch: {
        playListIndex() {
            this.$refs.audio.autoplay = true
            this.updateIsbtnShow(false)
        },
        playList() {

                this.$refs.audio.autoplay = true
                this.updateIsbtnShow(false)
            
        }
    }
    }
</script>

<style lang="less" scoped>
.musicFooter{
    width: 100%;
    height: 1.5rem;
    background-color: rgb(255, 255, 255);
    position: fixed;
    bottom: 0;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .3rem;
    .footer-l{
        display: flex;
        width: 80%;
        img{
            width: 1rem;
            height: 1rem;
            border-radius: 1rem;
        }
        >div{
            display: flex;
            flex-direction: column;
            padding-left: .3rem;
            justify-content: space-between;
            span{
                font-size: .45rem;
                font-weight: 600;
            }
            p{
                color: rgb(129, 129, 129);
            }
        }
    }
    .footer-r{
        width: 25%;
        display: flex;
        justify-content: space-between;
        .icon{
            width: 0.7rem;
            height: 0.7rem;
        }
    }
}
</style>