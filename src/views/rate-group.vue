<template>
  <div>
    <ai-rate-group
      v-model="answer"
      :answer-reason-value.sync="reasonValue"
      :index="6"
      :image="image"
      :collect-reason="true"
      title-content="What is your fit preference?What is your fit preference?What is your fit preference?What is your fit preference?What is your fit preference?What is your fit preference?"
      :options="options"
      show-text
      :texts="texts"
      :title-style="titleStyle"
      :option-style="optionStyle"
      :reason-style="reasonStyle"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      answer: {},
      reasonValue: 'this is my reason!',
      options: [
        {
          label:
            'Your title?Your title?Your title?Your title?Your title?Your title?Your title?Your title?Your title?Your title?Your title?',
          value: 0
        },
        { label: 'Your title?', value: 1 },
        { label: 'Your title?', value: 2 }
      ],
      texts: ['很失望', '', '', '', '满意', '', '较满意', '', '', '非常满意'],
      image: {
        src:
          'https://imgs.veryvoga.com/s330/a7/cc/10d1a8173eb551c214fa99aacef0a7cc.jpg',
        container_style: {
          'background-color': '#e8e8e8',
          padding: '5px 0 5px 0',
          'text-align': 'center'
        },
        style: {
          width: '480px'
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
        color: 'red',
        'font-size': '14px'
      }
    }
  }
}
</script>
