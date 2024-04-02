<template>
  <ai-choice
    v-model="checked"
    :answer-reason-value.sync="reasonValue"
    :index="2"
    type="image"
    :image="image"
    :collect-reason="true"
    :options="options"
    title-content="How much are you willing to spend every time when shop clothing online?"
  />
</template>

<script>
export default {
  name: 'ChoiceOptionImageDemo',
  data () {
    return {
      checked: '',
      reasonValue: 'this is my reason!',
      options: [
        {
          label:
            '选项文本内容',
          value: 1,
          src:
            'https://picsum.photos/150?1'
        },
        {
          label: '选项文本内容',
          value: 2,
          src:
            'https://picsum.photos/150?2'
        },
        {
          label: '选项文本内容',
          value: 3,
          src:
            'https://picsum.photos/150?3'
        },
        {
          label: '选项文本内容',
          value: 4,
          src:
            'https://picsum.photos/150?4'
        },
        {
          label: '选项文本内容',
          value: 5,
          src:
            'https://picsum.photos/150?5'
        }
      ],
      image: {
        src:
          'https://picsum.photos/600/200'
      }
    }
  }
}
</script>
