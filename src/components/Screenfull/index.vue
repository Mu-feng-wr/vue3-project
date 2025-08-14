<template>
  <div>
    <SvgIcon :name="fullscreenSvgName" @click="handleFullscreenClick" class="svg-icon" />
  </div>
</template>

<script lang="ts" setup>
import screenfull from 'screenfull'

interface Props {
  /** 全屏的元素，默认是 html */
  element?: string
  /** 打开全屏提示语 */
  openTips?: string
  /** 关闭全屏提示语 */
  exitTips?: string
  /** 是否只针对内容区 */
  content?: boolean
}

const { element = 'html' } = defineProps<Props>()

const CONTENT_LARGE = 'content-large'

const CONTENT_FULL = 'content-full'

const classList = document.body.classList

// #region 全屏
const isEnabled = screenfull.isEnabled

const isFullscreen = ref<boolean>(false)

const fullscreenSvgName = computed(() => (isFullscreen.value ? 'fullscreen-exit' : 'fullscreen'))

function handleFullscreenClick() {
  const dom = document.querySelector(element) || undefined
  isEnabled ? screenfull.toggle(dom) : ElMessage.warning('您的浏览器无法工作')
}

function handleFullscreenChange() {
  isFullscreen.value = screenfull.isFullscreen
  // 退出全屏时清除相关的 class
  isFullscreen.value || classList.remove(CONTENT_LARGE, CONTENT_FULL)
}

watchEffect(() => {
  if (isEnabled) {
    // 挂载组件时自动执行
    screenfull.on('change', handleFullscreenChange)
    // 卸载组件时自动执行
    onWatcherCleanup(() => {
      screenfull.off('change', handleFullscreenChange)
    })
  }
})
</script>

<style lang="scss" scoped>
.svg-icon {
  font-size: 20px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
}
</style>
