<template>
  <ai-choice
    v-model="checked"
    :index="3"
    :image="image"
    :collect-reason="collect_reason"
    multiple
    :options="options"
    :max="2"
    title-content="What kind of sale promotions do you prefer? (multiple choice)"
  />
</template>

<script>
export default {
  name: 'CheckboxDemo',
  data () {
    return {
      checked: [],
      options: [
        { label: '选项文本内容', value: 1 },
        { label: '选项文本内容', value: 2 },
        { label: '选项文本内容', value: 3 },
        { label: '选项文本内容', value: 4 },
        { label: '选项文本内容', value: 5 }
      ],
      collect_reason: true,
      image: {
        src:
          'https://picsum.photos/600/200'

      }
    }
  }
}
</script>
