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
