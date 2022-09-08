<template>
    <div class="musicList">
        <div class="listTop">
            <div class="top-l">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <div><span style="font-weight:900">播放全部</span><span style="color:#ccc">(共{{itemList.length}}首)</span></div>
                
            </div>
            <div class="top-r">
                <span>+ 收藏({{subscribedCount}})</span>
            </div>         

        </div>
        <div class="listContent">
            <div class="item" v-for="(item,i) in itemList" :key="i">
                <div class="itemLeft"  @click="playMusic(i)">
                    <span>{{i+1}}</span>
                    <div>
                        <p>{{item.name}}</p>
                        <div><span v-for="item2 in item.ar" :key="item2">{{item2.name}}&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
                        
                    </div>
                </div>
                <div class="itemRight">
                    <svg class="icon" aria-hidden="true" v-if="item.mv!=0">
                        <use xlink:href="#icon-shipinbofang"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-caidan"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    setup(props) {
    // console.log(props)
    },
    props: ['itemList', 'subscribedCount'],
    methods: {
        playMusic(i) {
            this.updatePlaylist(this.itemList)
            this.updatePlaylistIndex(i)
        },
        ...mapMutations(['updatePlaylist','updatePlaylistIndex'])
    }
}
    
</script>
<style lang="less" scoped>
.musicList{
    background-color: #fff;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    padding-top: 0.1rem;
    box-shadow:  0px -2px 5px rgb(148, 148, 148);
    .listTop{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0.2rem;
        .top-l{
            width: 40%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .top-r{
            width: 30%;
            height: .8rem;
            color: #fff;
            background-color:rgb(226, 4, 4);
            border-radius: .8rem;
            text-align: center;
            line-height: .8rem;
        }
    }
    .listContent{
        width: 100%;
        margin-bottom: 1.3rem;
        .item{
            width: 100%;
            height: 1.6rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .itemLeft{
                display: flex;
                width: 80%;
                >span{
                    width: 8%;
                    font-size: large;
                    margin: 0 .3rem;
                    line-height: 1.6rem;
                    text-align: center;
                    color: #ccc;
                }
                >div{
                    display: flex;
                    flex-direction: column;
                    // align-items: center;
                    justify-content: center;
                    >p{
                        font-size: .4rem;
                        font-weight: 600;
                        margin-bottom: .1rem;
                    }
                    >span{
                        color: rgb(141, 141, 141);
                        display: block;
                    }
                }
            }
            .itemRight{
                display: flex;
                .icon{
                    margin-right: .3rem;
                }
            }
        }

    }
}
</style>