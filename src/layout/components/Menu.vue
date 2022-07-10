<template>
  <el-sub-menu :index="data.path" v-if="!data.action && data.children">
    <template #title>
      <el-icon><Grid /></el-icon>
      <span>{{ data.menuName }}</span>
    </template>
    <Menu
      :data="item"
      v-for="(item, index) in data.children"
      :key="index"
    ></Menu>
  </el-sub-menu>
  <el-menu-item :index="data.path" v-else>{{ data.menuName }}</el-menu-item>
</template>

<script setup>
import { reactive, ref, defineProps } from 'vue'
import Menu from './Menu'
const props = defineProps({
  data: Object
})
</script>

<style lang="scss" scoped></style>
