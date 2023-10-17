<template>
  <div class="ai-title">
    <template v-if="index">
      <span>{{ index }}</span>
      <span>. </span>
    </template>
    <span>{{ content }}</span>
    <span class="ai-title__suffix-text">{{ suffixText }}</span>
  </div>
</template>

<script>
export default {
  name: 'AiTitle',
  props: {
    // 题目索引
    index: {
      type: [Number, String],
      default: 1
    },
    // 标题内容
    content: {
      type: String,
      default: ''
    },
    // 后缀文本
    suffixText: {
      type: String,
      default: ''
    }
  }
}
</script>
