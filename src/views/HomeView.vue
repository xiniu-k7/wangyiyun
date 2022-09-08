<template>
<topNav/>
<topSwpier/>
<iconList/>
<musicList/>
</template>

<script>
import topNav from '@/components/topNav.vue';
import topSwpier from '@/components/topSwpier.vue';
import iconList from '@/components/iconList.vue';
import musicList from '@/components/musicList.vue';
export default {
  name: "home",
  components: {
    topNav,topSwpier,iconList,musicList
  }
}
</script>
