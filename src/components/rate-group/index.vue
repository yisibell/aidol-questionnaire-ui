<template>
  <div class="ai-rate-group">
    <div class="ai-rate-group__title">
      <ai-title :style="titleStyle" :content="titleContent" />
    </div>
    <div class="ai-rate-group__list">
      <ai-rate
        :key="i"
        v-for="(v, i) in options"
        v-model="checkedMap[v.value]"
        :title-content="v.label"
        :max="max"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AiRateGroup',
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    // 评分列表配置
    // [{ label: '' , value: 0 }]
    options: {
      type: Array,
      default: () => []
    },
    // 标题样式
    titleStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    // 标题内容
    titleContent: {
      type: String,
      default: ''
    },
    // 评分最大值
    max: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      checkedMap: {}
    }
  },
  watch: {
    value: {
      handler(val) {
        this.checkedMap = { ...val }
      },
      immediate: true
    }
  },
  methods: {
    handleInput() {
      this.$emit('input', this.checkedMap)
    }
  }
}
</script>
