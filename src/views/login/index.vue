<template>
  <div @click="login">
    登录
  </div> <Screenfull v-if="screenfull" :content="true" />
</template>

<script lang="ts" setup name="login111">
const screenfull = ref<boolean>(true)
function login() {
  screenfull.value = true
}
</script>
