<template>
  <div>
    <ai-block-tips :message="validMessage">
      <ai-rate-group
        v-model="answer"
        :index="6"
        :image="image"
        :collect-reason="collect_reason"
        title-content="What is your fit preference?What is your fit preference?What is your fit preference?What is your fit preference?What is your fit preference?What is your fit preference?"
        :options="options"
        show-text
        :texts="texts"
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
      ],
      texts: ['很失望', '', '', '', '满意', '', '较满意', '', '', '非常满意'],
      collect_reason: true,
      image: {
        src:
          'https://imgs.veryvoga.com/s330/a7/cc/10d1a8173eb551c214fa99aacef0a7cc.jpg',
        container_style: {
          'background-color': '#e8e8e8',
          padding: '5px 0 5px 0',
          'text-align': 'center'
        },
        style: {
          width: '600px'
        }
      }
    }
  }
}
</script>
