<template>
  <el-config-provider :locale="zhCn">
    <!-- <router-view /> -->
    <div style="width:100%;height:100%;" id="cbs" />
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import { registerMicroApps, start } from 'qiankun'

function registerQiankunApps() {
  registerMicroApps(
    [
      {
        name: 'vue3-app', // app name registered
        entry: '//localhost:3333', // 入口地址
        container: '#cbs', // 子应用挂在id
        activeRule: '/cbs', // 路由跳转规则
        props: {
          func() {

          }
        }
      }
    ]
  )
  // 启动微前端
  start({
    prefetch: 'all', // 预加载
    sandbox: {
      strictStyleIsolation: false, // 严格样式隔离
      experimentalStyleIsolation: false // 开启沙盒模式
    }
  })
}
onMounted(() => {
  registerQiankunApps()
})
</script>
