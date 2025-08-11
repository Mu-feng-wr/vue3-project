<template>
  <div>
    登录 <el-icon :size="15" color="blue">
      <Edit />
    </el-icon>

    <el-select v-model="data.value" size="large" style="width: 240px">
      <el-option v-for="item in data.options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
const data = reactive({
  value: '',
  options: []
})
</script>
