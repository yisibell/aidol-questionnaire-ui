<template>
  <div>
    <ai-custom-rate
      v-model="answer"
      title-content="What is your fit preference? What is your fit preference?What is your fit preference?"
      show-text
      :options="options"
      :texts="texts"
    />
    <button @click="onClick">Set 30</button>
    <button @click="onReset">Reset</button>
    <button @click="onGetValue">Get Value</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      validMessage:
        'Please complete the current question before clicking the next.',
      answer: '',
      options: ['0', '20', '30', '40', '50'],
      texts: ['很失望', '一般般', '较满意', '满意', '非常满意']
    }
  },
  methods: {
    onClick() {
      this.answer = '30'
    },
    onReset() {
      this.answer = ''
    },
    onGetValue() {
      alert(this.answer)
    }
  }
}
</script>
