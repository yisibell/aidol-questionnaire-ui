<template>
  <div class="ai-title">
    <slot name="default">{{ content }}</slot>
  </div>
</template>

<script>
export default {
  name: 'AiTitle',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.ai-title {
  font-size: 16px;
  line-height: 20px;
  word-break: break-all;
  padding: 15px;
  color: #000000;
}
</style>
