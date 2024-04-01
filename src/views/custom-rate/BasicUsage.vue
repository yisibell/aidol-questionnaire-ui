<template>
  <div>
    <ai-custom-rate
      v-model="answer"
      :answer-reason-value.sync="reasonValue"
      title-content="Please rate our service?"
      :index="7"
      show-text
      :image="image"
      :collect-reason="collect_reason"
      :options="options"
      :texts="texts"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      collect_reason: true,
      answer: '',
      reasonValue: 'this is why.',
      options: [
        { label: '10', value: '10' },
        { label: '20', value: '20' },
        { label: '30', value: '30' },
        { label: '80', value: '80' },
        { label: '10000000', value: '10000000' }
      ],
      texts: ['很失望', '一般般', '较满意', '满意', '非常满意'],
      image: {
        src:
          'https://picsum.photos/600/200'
      }
    }
  }
}
</script>
