<template>
  <div>
    <ai-block-tips :message="validMessage">
      <ai-choice
        v-model="checked"
        :index="1"
        :options="options"
        :image="image"
        :collect-reason="collect_reason"
        title-content="How much are you willing to spend every time when shop clothing online?"
        :title-style="titleStyle"
        :option-style="optionStyle"
        :reason-style="reasonStyle"
      />
    </ai-block-tips>
  </div>
</template>

<script>
export default {
  name: 'RadioDemo',
  data () {
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
      ],
      collect_reason: true,
      image: {
        src:
          'https://imgs.veryvoga.com/s330/a7/cc/10d1a8173eb551c214fa99aacef0a7cc.jpg',
        container_style: {
          'background-color': '#f00',
          padding: '5px 0 5px 0',
          'text-align': 'center'
        },
        style: {
          width: '400px'
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
