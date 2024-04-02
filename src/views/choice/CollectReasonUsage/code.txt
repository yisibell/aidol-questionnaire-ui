<template>
  <ai-choice
    v-model="checked"
    :answer-reason-value.sync="reasonValue"
    :index="1"
    :options="options"
    :image="image"
    :collect-reason="true"
    title-content="How much are you willing to spend every time when shop clothing online?"
  />
</template>

<script>
export default {
  name: 'RadioCollectReasonDemo',
  data () {
    return {
      checked: '',
      reasonValue: 'this is my reason!',
      options: [
        {
          label:
            '选项文本内容',
          value: 1
        },
        { label: '选项文本内容', value: 2 },
        { label: '选项文本内容', value: 3 },
        { label: '选项文本内容', value: 4 },
        { label: '选项文本内容', value: 5 }
      ],
      image: {
        src:
          'https://picsum.photos/600/250?2'
      }
    }
  }
}
</script>
