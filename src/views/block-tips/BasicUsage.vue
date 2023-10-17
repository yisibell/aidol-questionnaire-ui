<template>
  <div>
    <ai-block-tips :message="validMessage">
      <ai-choice
        v-model="checked"
        :index="1"
        :options="options"
        :collect-reason="false"
        title-content="How much are you willing to spend every time when shop clothing online?"
      />
    </ai-block-tips>

    <div style="padding: 20px 0">
      <button @click="handleReset">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockTipsDemo',
  data () {
    return {
      checked: '',
      options: [
        {
          label:
            '选项文本内容',
          value: 1
        },
        { label: '选项文本内容', value: 2 },
        { label: '选项文本内容', value: 3 },
        { label: '选项文本内容', value: 4 },
        { label: '选项文本内容', value: 5 }
      ]

    }
  },
  computed: {
    validMessage () {
      return this.checked ? '' : 'Please complete the current question before clicking the next.'
    }
  },
  methods: {
    handleReset () {
      this.checked = ''
    }
  }
}
</script>
