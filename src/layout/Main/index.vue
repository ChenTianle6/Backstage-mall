<template>
  <div class='tagsview'>
    <tags-view></tags-view>
  </div>
  <main>
    <a-spin :spinning='$store.getters.loading'>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </a-spin>
  </main>
</template>

<script setup>
import TagsView from '@/layout/Main/components/tagsView'</script>
<style scoped lang='scss'>
main {
  height: 640px;
  overflow: auto;
}

::-webkit-scrollbar {
  display: none;
}
</style>
