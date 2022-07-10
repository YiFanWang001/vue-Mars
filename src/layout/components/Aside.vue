<template>
  <div class="aside">
    <el-menu
      active-text-color="#FFD04B"
      background-color="#001529"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      :collapse="flag"
      :collapse-transition="false"
      router
    >
      <header>
        <img src="@/assets/logo.png" alt="" class="logo" />
        <span>Manager</span>
      </header>
      <Menu v-for="(item, index) in data.menu" :key="index" :data="item"></Menu>
    </el-menu>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Menu from './Menu'
import { useStore } from 'vuex'
const data = reactive({
  menu: []
})
const props = defineProps({
  flag: Boolean
})
const store = useStore()
const getlist = async () => {
  await store.dispatch('user/getlist')
  data.menu = store.state.user.menu
}
getlist()
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100vh;
}
.logo {
  width: 32px;
  height: 32px;
}
header {
  height: 60px;
  width: 100%;
  text-align: center;
  line-height: 60px;
}
span {
  color: #fff;
}
</style>
