<template>
  <div
    class="ai-block-tips"
    :class="[{ 'is-active': isActive, animation: animation && isActive }]"
  >
    <div class="ai-block-tips__content">
      <slot name="default" />
    </div>
    <div
      v-show="isActive"
      class="ai-block-tips__message"
    >
      <slot name="content">
        {{ message }}
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AiBlockTips',
  props: {
    message: {
      type: String,
      default: ''
    },
    animation: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isActive () {
      return !!this.message
    }
  }
}
</script>
