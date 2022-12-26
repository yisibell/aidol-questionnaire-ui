<template>
  <div>
    <ai-rate
      v-model="answer"
      title-content="What is your fit preference? What is your fit preference?What is your fit preference?"
      :max="5"
      show-text
      :collect-reason="collect_reason"
      :texts="texts"
      :title-style="titleStyle"
      :option-style="optionStyle"
      :reason-style="reasonStyle"
    />
  </div>
</template>

<script>
export default {
  name: 'RateDemo',
  data () {
    return {
      validMessage:
        'Please complete the current question before clicking the next.',
      answer: '',
      texts: ['很失望', '', '满意', '较满意', '非常满意'],
      collect_reason: true,
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
