<template>
  <div>
    <el-container>
      <el-aside :style="{ width: data.flag ? '70px' : '200px' }">
        <Aside :flag="data.flag"></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header :flag="data.flag" @collect="collect"></Header>
        </el-header>
        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import Aside from './components/Aside.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
const data = reactive({
  flag: false
})
const collect = () => {
  data.flag = !data.flag
  console.log(data.flag)
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  background-color: #eef0f3;
}
.el-aside {
  height: 100vh;
}
.el-header {
  height: 60px;
  line-height: 60px;
  background-color: #fff;
}
</style>
