<template>
    <img :src="musicDetail.al.picUrl" alt="" class="bgimg">
    <div class="detailTop">

        <div class="top-l">
            <svg class="icon" aria-hidden="true" style="margin-right:.5rem" @click="updateDetailShow">
                <use xlink:href="#icon-zuojiantou"></use>
            </svg>
            <div>
                <p>{{musicDetail.name}}</p>
                <span v-for="item in musicDetail.ar" :key="item">{{item.name}}&nbsp;&nbsp;</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiangyoujiantou"></use>
                </svg>
            </div>
        </div>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fenxiang1"></use>
        </svg>
    </div>
    <div class="detailContent" v-show="!isLyricShow" @click="isLyricShow=true">
        <img src="@/assets/needle-ab.png" alt="" :class="isbtnShow?'needle':'needle-active'">
        <img src="@/assets/cd.png" alt="" class="cd">
        <img :src="musicDetail.al.picUrl" alt=""  class="ar" :class="!isbtnShow?'ar-active':'ar-paused'">
    </div>
    <div class="musicLyric" @click="isLyricShow=false"   ref="musicLyric" v-show="isLyricShow">
        <p v-for="item in lyric" :key="item" :class="{active:(currentTime*1000>=item.time && currentTime*1000<item.pre)}">
            {{item.lrc}}
        </p>
    </div>
    <div class="detailFooter">
        <div class="footerTop">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-aixin"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-download"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-maikefeng1"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pinglun"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-caidan1"></use>
            </svg>
        </div>
        <div class="footerContent">
            <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
        </div>
        <div class="footer">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xunhuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
                <use xlink:href="#icon-xiangzuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="play" v-if="!isbtnShow">
                <use xlink:href="#icon-zanting1"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="play" v-else>
                <use xlink:href="#icon-bofang2"></use>
            </svg>
            <svg class="icon" aria-hidden="true"  @click="goPlay(1)">
                <use xlink:href="#icon-xiangyou3"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-caidan2"></use>
            </svg>
        </div>
    </div>
</template>

<style lang="less" scoped>
.bgimg{
    width: 100%;
    height: 100%;
    position: fixed;
    filter: blur(50px);
    z-index: -1;
}
.detailTop{
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    .top-l{
        display: flex;
        align-items: center;
        >.icon{
            fill: #fff;
            width: 0.8rem;
            height: 0.8rem;
        }
        div{
            width: 80%;
            p{
                color: #fff;
                font-size: .35rem;
            }
            span{
                color: rgb(136, 136, 136);
            }
            .icon{
                width: 0.3rem;
                height: 0.3rem;
            }
        }
    }
    >.icon{
        fill: #fff;
    }
}
.detailContent{
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .needle{
        width: 2rem;
        height: 3.5rem;
        position: absolute;
        left: 46%;
        top: .3rem;
        transform-origin: 0 0;
        transform: rotate(-20deg);
        transition: all 2s;
        z-index: 10;
    }
    .needle-active{
        width: 2rem;
        height: 3.5rem;
        position: absolute;
        left: 46%;
        top: .3rem;
        transform-origin: 0 0;
        transform: rotate(-6deg);
        transition: all 2s;
        z-index: 10;
    }
    .cd{
        width: 6rem;
        height: 6rem;
        top: 2rem;
        position: absolute;
        z-index: 5;
    }
    .ar{
        width: 4rem;
        height: 4rem;
        border-radius: 3.5rem;
        top: 3rem;
        position: absolute;
        animation: rotate-ar 12s infinite;
    }
    .ar-active{
        animation-play-state: running;
    }
    .ar-paused{
        animation-play-state: paused;
    }
    @keyframes rotate-ar {
        0%{
            transform: rotateZ(0deg);
        }
        100%{
            transform: rotateZ(360deg);
        }
    }
}
.musicLyric{
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: .2rem;
    overflow: scroll;
    p{
        color: rgb(212, 212, 212);
        margin: .3rem;
    }
    .active{
        color: #fff;
        font-size: .5rem;
    }
}
.detailFooter{
    width: 100%;
    height: 4rem;
    bottom: 0.3rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .icon{
        width: 0.7rem;
        height: 0.7rem;
        fill: rgb(224, 224, 224);
    }
    .footerTop{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .footerContent{
        width: 100%;
        .range{
        width: 100%;
        height: 0.07rem;
    }
    }
    
    .footer{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .icon:nth-child(3) {
            width: 1rem;
            height: 1rem;
        }
    }
}
</style>

<script>
import { mapMutations ,mapState} from 'vuex'
export default {
    data() {
        return {
            isLyricShow:false
        }
    },
    mounted() {
        //   console.log(this.musicDetail)
        //   console.log(this.musicLyric.lyric)  
        this.addDuration()
    },
    props: ['musicDetail','play','isbtnShow','addDuration'],
    methods: {
        ...mapMutations(['updateDetailShow', 'updatePlaylistIndex']),
        goPlay(n) {
            let index = this.playListIndex + n
            if (index < 0) {
                index=this.playList.length-1
            } else if(index > this.playList.length - 1){
                index=0
            }
            this.updatePlaylistIndex(index)
        }
    },
    watch: {
        currentTime(newValue) {
            let p = document.querySelector("p.active")
            // console.log([p])
            if (p) {
                if (p.offsetTop>300) {
                    this.$refs.musicLyric.scrollTop=p.offsetTop-300
                }
            }
            if (newValue === this.duration) {
                if (this.playListIndex === this.playList.length) {
                    this.updatePlaylistIndex(0)
                    this.play()
                } else (
                    this.updatePlaylistIndex(this.playListIndex + 1)
                )
                    
            }
            // console.log([this.$refs.musicLyric])
        }
    },
    computed: {
        ...mapState(['musicLyric','currentTime','playList','playListIndex','duration']),
        lyric() {
            let arr;
            if (this.musicLyric.lyric) {
                arr = this.musicLyric.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
                    let min = item.slice(1, 3);
                    let sec = item.slice(4, 6);
                    let mill = item.slice(7, 10);
                    let lrc = item.slice(11, item.length);
                    let time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
                    if (isNaN(Number(mill))) {
                        mill = item.slice(7, 9);
                        lrc = item.slice(10, item.length);
                        time = parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 +parseInt(mill)
                    }
                    // console.log(min, sec, mill, lrc)
                    return {min, sec, mill, lrc,time}
                })
                arr.forEach((item,i) => {
                    if (i === arr.length - 1||isNaN(arr[i+1].time)) {
                        item.pre=1000000
                    } else {
                        item.pre=arr[i+1].time
                    }
                });
            }
            // console.log(arr)
            return arr
        }
    }
        
    }
</script>