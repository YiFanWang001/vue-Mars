<template>
	<div>
		<template>
			<div class="common-layout">
				<el-container>
					<el-aside width="200px">Aside</el-aside>
					<el-container>
						<el-header>Header</el-header>
						<el-main>Main</el-main>
					</el-container>
				</el-container>
			</div>
		</template>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
</script>

<style lang="scss" scoped></style>
