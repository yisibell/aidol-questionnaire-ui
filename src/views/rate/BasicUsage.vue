<template>
  <ai-rate
    v-model="answer"
    :answer-reason-value.sync="reasonValue"
    title-content="What is your fit preference? What is your fit preference?What is your fit preference?"
    :max="5"
    show-text
    :collect-reason="true"
    :texts="texts"
    :title-style="titleStyle"
    :option-style="optionStyle"
    :reason-style="reasonStyle"
  />
</template>

<script>
export default {
  name: 'RateDemo',
  data () {
    return {
      answer: '',
      reasonValue: 'this is my reason!',
      texts: ['很失望', '', '满意', '较满意', '非常满意'],
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
