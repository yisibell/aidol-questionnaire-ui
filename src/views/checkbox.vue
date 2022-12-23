<template>
  <div>
    <ai-choice
      v-model="checked"
      :index="3"
      :image="image"
      :collect-reason="collect_reason"
      multiple
      :title-style="titleStyle"
      :option-style="optionStyle"
      :reason-style="reasonStyle"
      :options="options"
      :max="2"
      title-content="What kind of sale promotions do you prefer? (multiple choice)"
    />
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      checked: [],
      options: [
        { label: '选项文本内容', value: 1 },
        { label: '选项文本内容', value: 2 },
        { label: '选项文本内容', value: 3 },
        { label: '选项文本内容', value: 4 },
        { label: '选项文本内容', value: 5 }
      ],
      collect_reason: false,
      image: {
        src:
          'https://imgs.veryvoga.com/newsletterimg/veryvoga/20190124/banner/slim/clothing/en.jpg',
        container_style: {
          'background-color': '#e8e8e8',
          padding: '5px 0 5px 0',
          'text-align': 'center'
        },
        style: {
          width: '600px'
        }
      },
      titleStyle: {
        color: 'red'
      },
      optionStyle: {
        color: 'green',
        'font-size': '14px'
      },
      reasonStyle: {
        color: 'yellow',
        'font-size': '14px'
      }
    }
  }
}
</script>
