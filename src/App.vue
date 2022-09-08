<template>
  <router-view/>
  <musicFooter v-if="$store.state.isFooterMusic"/>
</template>
<script>
import musicFooter from "./components/musicFooter.vue";
export default {
  components: {
    musicFooter
  }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  width: .6rem;
  height: 0.6rem;
}
</style>
