<template>
  <div class="ai-block-tips" :class="[{ 'is-active': isActive }]">
    <div class="ai-block-tips__content">
      <slot name="default"></slot>
    </div>
    <div v-show="isActive" class="ai-block-tips__message">
      <slot name="content">{{ message }}</slot>
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
  },
  computed: {
    isActive() {
      return !!this.message
    }
  }
}
</script>
