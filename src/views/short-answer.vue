<template>
  <div>
    <ai-block-tips :message="validMessage">
      <ai-short-answer
        v-model="answer"
        title-content="What is your fit preference?"
      />
    </ai-block-tips>
  </div>
</template>

<script>
export default {
  data() {
    return {
      validMessage:
        'Please complete the current question before clicking the next.',
      answer: ''
    }
  }
}
</script>
