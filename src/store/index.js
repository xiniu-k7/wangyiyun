import { createStore } from 'vuex'
// import { getMusicList } from "@/request/api/home";
// import { getItemList } from "@/request/api/item";

// let music={}
// async function test(music) {
//   let res = await getMusicList()
//   let id = res.data.result[0].id
//   const result = await getItemList(id)

//   music = result.data.songs[0]
//   console.log(music)
//   console.log(music.al)

// }
// test()

import { getMusicLyric } from '@/request/api/item'

export default createStore({
  state: {
    playList: [{
      al: {
        id: 96799251,
        name: "我又想你了",
        pic: 109951165416746530,
        picUrl: "https://p1.music.126.net/XnLAbFfmIEyHW3_mtvvKrA==/109951165416746532.jpg",
        pic_str: "109951165416746532",
      },
      ar: [{
        name:'善喜'
      }],
      name: "我又想你了",
      id: 1490104654
    }],
    playListIndex: 0,
    isbtnShow: true,
    detailShow: false,
    musicLyric: {},
    currentTime: 0,
    duration: 0,
    isLogin: false,
    isFooterMusic:true
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow(state,value) {
      state.isbtnShow=value
    },
    updatePlaylist(state,value){
      state.playList = value
      // console.log(state.playList)
    },
    pushPlayList(state, value) {
      state.playList.push(value)
    },
    updatePlaylistIndex(state,value) {
      state.playListIndex = value
      // console.log(state.playListIndex)
    },
    updateDetailShow(state) {
      state.detailShow=!state.detailShow
    },
    updateMusicLyric(state,value) {
      state.musicLyric=value
    },
    updateCurrentTime(state, value) {
      // console.log(state.currentTime)
      state.currentTime=value
    },
    updateDuration(state,value) {
      state.duration=value
    }
  },
  actions: {
    async getLyric(context,value) {
      let res = await getMusicLyric(value)
      // console.log(res)
      context.commit('updateMusicLyric',res.data.lrc)
    },
  }
})
