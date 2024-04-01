<template>
  <ai-rate
    v-model="answer"
    :index="2"
    :answer-reason-value.sync="reasonValue"
    title-content="Please rate our service?"
    :max="5"
    show-text
    :collect-reason="true"
    :texts="texts"
    :highlight-single-score="true"
  />
</template>

<script>
export default {
  name: 'HighlightSingleScoreUsage',
  data () {
    return {
      answer: '',
      reasonValue: 'this is my reason!',
      texts: ['很失望', '', '满意', '较满意', '非常满意']
    }
  }
}
</script>
