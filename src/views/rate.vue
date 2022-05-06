<template>
  <div>
    <ai-rate
      v-model="answer"
      title-content="What is your fit preference? What is your fit preference?What is your fit preference?"
      :max="5"
      show-text
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
      texts: ['很失望', '', '满意', '较满意', '非常满意']
    }
  }
}
</script>
