<template>
    <div class="topContainer">
        <img :src="playlist.coverImgUrl" alt="" class="bgimg">
        <div class="itemMusicTop">
            <div class="itemLeft">
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-zuojiantou"></use>
                </svg>
                <span>歌单</span>
            </div>
            <div class="itemRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-caidan"></use>
                </svg>
            </div>
        </div>
        
        <div class="itemTopContent" v-if="playlist.creator">
            <img :src="playlist.coverImgUrl" alt="" class="contentLeft">
            <div class="contentRight">
                <p style="font-weight:600">{{playlist.name}}</p>
                <div class="right-c">
                    <img :src="playlist.creator.backgroundUrl" alt="">
                    <span class="nickname">{{playlist.creator.nickname}}</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiangyoujiantou"></use>
                    </svg>
                </div>
                <p class="r-footer">
                    <span>{{playlist.creator.signature}}</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xiangyoujiantou"></use>
                    </svg>
                </p>
            </div>
        </div>
        <div class="itemTopFooter">
            <div class="footerItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-31pinglun"></use>
                </svg>
                <span>{{playlist.commentCount}}</span>
            </div>
            <div class="footerItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
                <span>{{playlist.shareCount}}</span>
            </div>
            <div class="footerItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
                </svg>
                <span>下载</span>
            </div>
            <div class="footerItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-duoxuan"></use>
                </svg>
                <span>多选</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup(props) {
        console.log(props)    
    },
    props:['playlist']
    }
</script>
<style lang="less" scoped>
.bgimg{
    width: 100%;
    height: 7rem;
    position: fixed;
    z-index: -1;
    filter: blur(25px);
}
.itemMusicTop{
    width: 100%;
    height: 1rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    // padding: 0.2rem;
    .itemLeft,.itemRight{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: .2rem;
        span{
            font-size: .4rem;
            color: #fff;
        }
        .icon{
            fill: #fff;
        }
    }

}
.itemTopContent{
    width: 100%;
    display: flex;
    height: 3rem;
    padding-top: .3rem;
    .contentLeft{
        width: 35%;
        border-radius: 0.3rem;
        padding: 0 0.2rem;
    }
    .contentRight{
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #fff;
        .right-c{
            display: flex;
            align-items: center;
            font-size: .38rem;
            .icon{
                width: 0.35rem;
                height: 0.35rem;
                margin-left:.2rem;
                fill: #fff;
            }
            img{
                width: 1rem;
                height: 1rem;
                border-radius: 1rem;
                margin-right: 0.2rem;
            }
        }
        .r-footer{
            display: flex;
            align-items: center;
            color: #ccc;
            overflow: scroll;
            .icon{
                width: 0.35rem;
                height: 0.35rem;
                margin-left:.2rem;
                fill: #fff;
            }
        }
    }
}
.itemTopFooter{
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    padding-top: 0.3rem;
    .footerItem{
        display: flex;
        flex-direction: column;
        color: #fff;
        .icon{
            fill: #fff;
        }
    }
}
</style>