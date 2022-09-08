<template>
    <itemMusicTop :playlist="state.playlist"/>
    <itemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>
<script>
import { useRoute } from 'vue-router'
import { onMounted ,reactive} from 'vue'
import { getMusicItemList ,getItemList} from '@/request/api/item'
import itemMusicTop from '@/components/itemMusicTop'
import itemMusicList from '@/components/itemMusicList.vue'
export default {
    setup() {
        const state = reactive({
            playlist: {},
            itemList:[]
        })
        onMounted(async () => {
            const id = useRoute().query.id
            // console.log(id)
            const res =await getMusicItemList(id)
            // console.log(res)
            state.playlist = res.data.playlist
            const result = await getItemList(id)
            // console.log(result)
            state.itemList=result.data.songs
        })
        return {state}
    },
    components: {
        itemMusicTop,
        itemMusicList
    }
}
</script>