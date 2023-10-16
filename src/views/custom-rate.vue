<template>
  <div>
    <ai-custom-rate
      v-model="answer"
      :answer-reason-value.sync="reasonValue"
      title-content="What is your fit preference? What is your fit preference?What is your fit preference?"
      :index="7"
      show-text
      :title-style="titleStyle"
      :option-style="optionStyle"
      :reason-style="reasonStyle"
      :image="image"
      :collect-reason="collect_reason"
      :options="options"
      :texts="texts"
    />

    <div>
      <button @click="onClick">
        Set 30
      </button>
      <button @click="onReset">
        Reset
      </button>
      <button @click="onGetValue">
        Get Value
      </button>
    </div>
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
          'https://imgs.veryvoga.com/s330/a7/cc/10d1a8173eb551c214fa99aacef0a7cc.jpg',
        container_style: {
          'background-color': '#e8e8e8',
          padding: '5px 0 5px 0',
          'text-align': 'center'
        },
        style: {
          width: '480px'
        }
      },
      titleStyle: {
        color: 'red'
      },
      optionStyle: {
        color: 'green',
        'font-size': '14px'
      },
      reasonStyle: {
        color: 'red',
        'font-size': '14px'
      }
    }
  },
  methods: {
    onClick () {
      this.answer = '30'
    },
    onReset () {
      this.answer = ''
    },
    onGetValue () {
      alert(this.answer)
    }
  }
}
</script>
