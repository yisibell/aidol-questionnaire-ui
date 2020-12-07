<template>
  <div>
    <ai-short-answer
      v-model="answer"
      title-content="What is your fit preference?"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: ''
    }
  }
}
</script>
