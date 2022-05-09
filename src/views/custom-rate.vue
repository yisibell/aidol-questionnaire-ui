<template>
  <div>
    <ai-block-tips :message="validMessage">
      <ai-custom-rate
        v-model="answer"
        title-content="What is your fit preference? What is your fit preference?What is your fit preference?"
        :index="7"
        show-text
        :options="options"
        :texts="texts"
      />
    </ai-block-tips>
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
      options: [
        { label: '10', value: '10' },
        { label: '20', value: '20' },
        { label: '30', value: '30' },
        { label: '80', value: '80' },
        { label: '100', value: '100' }
      ],
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
