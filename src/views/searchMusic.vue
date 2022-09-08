<template>
    <div class="searchTop">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <input type="text" placeholder="周杰伦" v-model="searchKey" @keydown.enter="enterKey">
        <svg class="icon" aria-hidden="true" @click="delHistory">
            <use xlink:href="#icon-shanchu"></use>
        </svg>
    </div>
    <div class="searchHistory">
        <p>历史</p>
        <span v-for="item in keyWordList" :key="item" @click="historySearch(item)">
        {{item}}</span>
    </div>
    <div class="listContent">
            <div class="item" v-for="(item,i) in searchList" :key="i">
                <div class="itemLeft"  @click="playMusic(item)">
                    <span>{{i+1}}</span>
                    <div>
                        <p>{{item.name}}</p>
                        <div><span v-for="item2 in item.artists" :key="item2">{{item2.name}}&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
                        
                    </div>
                </div>
                <div class="itemRight">
                    <svg class="icon" aria-hidden="true" v-if="item.mvid!=0">
                        <use xlink:href="#icon-shipinbofang"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-caidan"></use>
                    </svg>
                </div>
            </div>
        </div>
</template>
<script>
    import {getSearchMusic} from"@/request/api/home";
import { mapMutations, mapState } from 'vuex';
export default {
    data() {
        return {
            keyWordList: [],
            searchKey: "",
            searchList:[]
            }
    },
    mounted() {
        this.keyWordList=JSON.parse(localStorage.getItem('keyWordList'))||[]
    },
    computed:{
        ...mapState(['playList'])
    },
    methods: {
        async enterKey () {
            if (this.searchKey !== "") {
                this.keyWordList.unshift(this.searchKey);
                this.keyWordList = [...new Set(this.keyWordList)]
                if (this.keyWordList.length > 5) {
                    this.keyWordList.pop()
                }
                localStorage.setItem("keyWordList", JSON.stringify(this.keyWordList))
                let res = await getSearchMusic(this.searchKey);
                this.searchList=res.data.result.songs
                console.log(res)
                this.searchKey=""
            }

        },
        delHistory() {
            localStorage.removeItem('keyWordList')
            this.keyWordList = []
                
        },
        async historySearch(item) {
            let res = await getSearchMusic(item);
            this.searchList = res.data.result.songs
            console.log(res)
        },
        playMusic(item){
            item.al=item.album
            item.al.picUrl=item.album.artist.img1v1Url
            this.pushPlayList(item)
            this.updatePlaylistIndex(this.playList.length-1)

        },
        ...mapMutations(['pushPlayList','updatePlaylistIndex'])
        }
    }
</script>
<style lang="less" scoped>
.searchTop{
    width: 100%;
    height: 0.8rem;
    margin-top: .2rem;
    display: flex;
    align-items: center;
    .icon{
        margin: 0 .5rem;
    }
    input{
        border: none;
        border-bottom: 1px solid #ccc;
    }
}
.searchHistory{
    width: 100%;
    padding: .3rem;
    position: relative;
    p{
        font-weight: 900;
        padding: 0 .5rem;
        display: inline-block;
    }
    span{
        margin: .2rem;
        border: 1px solid #ccc;
        padding: .1rem .25rem;
        border-radius: .8rem;
        background-color: rgb(175, 175, 175);
        display: inline-block;
        // color: #ccc;
    }
}
.listContent{
        width: 100%;
        margin-bottom: 1.3rem;
        margin-top: .5rem;
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
</style>