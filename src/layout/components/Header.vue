<template>
  <div class="div">
    <div>
      <el-button @click="collect" class="but">
        <el-icon v-html="flag ? '<Expand />' : '<Fold />'"></el-icon>
      </el-button>

      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ pathName }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-dropdown>
      <span class="el-dropdown-link">
        {{ store.state.login.userName }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            >邮箱： {{ store.state.login.userEmail }}</el-dropdown-item
          >
          <el-dropdown-item @click="error">退出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()

const store = useStore()
const emit = defineEmits(['reversal'])
const props = defineProps({
  flag: Boolean
})
const collect = () => {
  emit('collect')
}
const error = () => {
  store.dispatch('login/error')
}
const pathName = computed(() => {
  return router.currentRoute.value.meta.title
})
</script>

<style lang="scss" scoped>
div {
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.but {
  margin-right: 20px;
}
</style>
