<template>
  <div>
    <ai-block-tips :message="validMessage">
      <ai-choice
        v-model="checked"
        :index="1"
        :options="options"
        title-content="How much are you willing to spend every time when shop clothing online?"
      />
    </ai-block-tips>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      validMessage:
        'Please complete the current question before clicking the next.',
      checked: '',
      options: [
        {
          label:
            '选项文本内容fagagggggggggggggggggggggggggggggggggggg hello gg hello world ggggggggg text word ggggggggggggggggggggggggggggggggggggggggggg',
          value: 1
        },
        { label: '选项文本内容', value: 2 },
        { label: '选项文本内容', value: 3 },
        { label: '选项文本内容', value: 4 },
        { label: '选项文本内容', value: 5 }
      ]
    }
  }
}
</script>
