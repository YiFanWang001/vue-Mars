<template>
	<div>
		<nav>
			<p class="title">火星</p>
			<el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" status-icon>
				<el-form-item prop="userName"> <el-input v-model="ruleForm.userName" :prefix-icon="null" :suffix-icon="null" type="text" /></el-form-item>
				<el-form-item prop="userPwd"> <el-input v-model="ruleForm.userPwd" :prefix-icon="null" :suffix-icon="null" type="password" /> </el-form-item>
				<el-form-item>
					<el-button @click="resetForm" type="primary">登录</el-button>
				</el-form-item>
			</el-form>
		</nav>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const ruleForm = reactive({
	userName: 'admin',
	userPwd: '123456',
})
const ruleFormRef = ref()
const rules = reactive({
	userName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
	userPwd: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
})

const resetForm = async () => {
	if (!ruleFormRef.value) return
	await ruleFormRef.value.validate(async valid => {
		if (valid) {
			await store.dispatch('login/login', ruleForm)
		}
	})
}
</script>

<style lang="scss" scoped>
nav {
	width: 500px;
	height: 355px;
	display: flex;

	padding: 50px;
	flex-direction: column;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px #000 solid;
	box-align: 0 0 1px;
}
.title {
	font-size: 50px;
	text-align: center;
}
.el-input {
	width: 100%;
}
.el-button {
	width: 100%;
}
</style>
