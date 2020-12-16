<template>
  <div class="ai-block-tips">
    <div class="ai-block-tips__content">
      <slot name="default"></slot>
    </div>
    <div class="ai-block-tips__message">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AiBlockTips',
  props: {
    // success, danger, warning
    type: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
