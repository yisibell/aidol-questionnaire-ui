<template>
  <ai-choice
    v-model="checked"
    :answer-reason-value.sync="answerReasonValue"
    :index="3"
    :image="image"
    :collect-reason="true"
    :options="options"
    :max="2"
    :multiple="true"
    title-content="What kind of sale promotions do you prefer? (multiple choice)"
  />
</template>

<script>
export default {
  name: 'CheckboxDemo',
  data () {
    return {
      checked: [],
      answerReasonValue: 'my reason',
      options: [
        { label: '选项文本内容', value: 1 },
        { label: '选项文本内容', value: 2 },
        { label: '选项文本内容', value: 3 },
        { label: '选项文本内容', value: 4 },
        { label: '选项文本内容', value: 5 }
      ],
      image: {
        src:
          'https://picsum.photos/600/200'

      }
    }
  }
}
</script>
