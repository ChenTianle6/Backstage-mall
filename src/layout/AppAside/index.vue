<template>
  <div>
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><Help /></el-icon>
            <span>后台面板</span>
          </template>
            <el-menu-item index="1-1"><el-icon><HomeFilled /></el-icon>主控台</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><ShoppingBag /></el-icon>
            <span>商品管理</span>
          </template>
            <el-menu-item index="2-1"><el-icon><ShoppingCartFull /></el-icon>商品管理</el-menu-item>
            <el-menu-item index="2-2"><el-icon><Menu /></el-icon>分类管理</el-menu-item>
            <el-menu-item index="2-3"><el-icon><Aim /></el-icon>规格管理</el-menu-item>
            <el-menu-item index="2-4"><el-icon><Postcard /></el-icon>优惠券管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><User /></el-icon>
            <span>用户管理</span>
          </template>
            <el-menu-item index="3-1"><el-icon><UserFilled /></el-icon>用户管理</el-menu-item>
            <el-menu-item index="3-2"><el-icon><DataAnalysis /></el-icon>会员等级</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><MessageBox /></el-icon>
            <span>订单管理</span>
          </template>
            <el-menu-item index="4-1"><el-icon><Reading /></el-icon>订单管理</el-menu-item>
            <el-menu-item index="4-2"><el-icon><Comment /></el-icon>评论管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><Management /></el-icon>
            <span>管理员管理</span>
          </template>
            <el-menu-item index="5-1"><el-icon><Coordinate /></el-icon>管理员管理</el-menu-item>
            <el-menu-item index="5-2"><el-icon><Connection /></el-icon>权限管理</el-menu-item>
            <el-menu-item index="5-3"><el-icon><Histogram /></el-icon>角色管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="6">
          <template #title>
            <el-icon><Setting /></el-icon>
            <span>系统管理</span>
          </template>
            <el-menu-item index="6-1"><el-icon><Baseball /></el-icon>基础设置</el-menu-item>
            <el-menu-item index="6-2"><el-icon><CreditCard /></el-icon>交易设置</el-menu-item>
            <el-menu-item index="6-3"><el-icon><Bicycle /></el-icon>物流设置</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="7">
          <template #title>
            <el-icon><ShoppingCart /></el-icon>
            <span>分销模块</span>
          </template>
            <el-menu-item index="7-1"><el-icon><UserFilled /></el-icon>分销员管理</el-menu-item>
            <el-menu-item index="7-2"><el-icon><SetUp /></el-icon>分销设置</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="8">
          <template #title>
            <el-icon><MostlyCloudy /></el-icon>
            <span>其他模块</span>
          </template>
            <el-menu-item index="8-1"><el-icon><PictureFilled /></el-icon>图库管理</el-menu-item>
            <el-menu-item index="8-2"><el-icon><Notification /></el-icon>公告管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
