<template>
  <div>
    <ai-choice
      v-model="checked"
      :options="options"
      title-content="How much are you willing to spend every time when shop clothing online?"
    />
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      checked: '',
      options: [
        { label: 'A. 选项文本内容', value: 1 },
        { label: 'B. 选项文本内容', value: 2 },
        { label: 'C. 选项文本内容', value: 3 },
        { label: 'D. 选项文本内容', value: 4 },
        { label: 'E. 选项文本内容', value: 5 }
      ]
    }
  }
}
</script>
