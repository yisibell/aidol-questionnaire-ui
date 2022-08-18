<template>
  <div>
    <ai-rate
      v-model="answer"
      title-content="What is your fit preference? What is your fit preference?What is your fit preference?"
      :max="5"
      show-text
      :image="image"
      :collect-reason="collect_reason"
      :texts="texts"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      validMessage:
        'Please complete the current question before clicking the next.',
      answer: '',
      texts: ['很失望', '', '满意', '较满意', '非常满意'],
      collect_reason: true
    }
  }
}
</script>
