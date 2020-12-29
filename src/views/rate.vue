<template>
  <div>
    <ai-block-tips :message="validMessage">
      <ai-rate-group
        v-model="answer"
        :index="4"
        title-content="What is your fit preference?What is your fit preference?What is your fit preference?What is your fit preference?What is your fit preference?What is your fit preference?"
        :options="options"
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
      answer: {},
      options: [
        {
          label:
            'Your title?Your title?Your title?Your title?Your title?Your title?Your title?Your title?Your title?Your title?Your title?',
          value: 0
        },
        { label: 'Your title?', value: 1 },
        { label: 'Your title?', value: 2 }
      ]
    }
  }
}
</script>
