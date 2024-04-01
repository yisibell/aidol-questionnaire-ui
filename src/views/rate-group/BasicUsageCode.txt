<template>
  <ai-rate-group
    v-model="answer"
    :answer-reason-value.sync="reasonValue"
    :index="6"
    :image="image"
    :collect-reason="true"
    title-content="Please rate our service?"
    :options="options"
    show-text
    :texts="texts"
  />
</template>

<script>
export default {
  data () {
    return {
      answer: {},
      reasonValue: 'this is my reason!',
      options: [
        {
          label:
            'Your title?',
          value: 0
        },
        { label: 'Your title?', value: 1 },
        { label: 'Your title?', value: 2 }
      ],
      texts: ['很失望', '', '', '', '满意', '', '较满意', '', '', '非常满意'],
      image: {
        src:
          'https://picsum.photos/600/300'

      }

    }
  }
}
</script>
