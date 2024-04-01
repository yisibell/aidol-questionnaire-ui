<template>
  <ai-rate
    v-model="answer"
    :index="3"
    :answer-reason-value.sync="reasonValue"
    title-content="Please rate our service?"
    :min="0"
    :max="5"
    show-text
    :collect-reason="true"
    :texts="texts"
  />
</template>

<script>
export default {
  name: 'SpecifyRateRange',
  data () {
    return {
      answer: '',
      reasonValue: 'this is my reason!',
      texts: ['很失望', '', '满意', '较满意', '非常满意']
    }
  }
}
</script>
