<template>
  <div class="ai-rate-group">
    <div class="ai-rate-group__title">
      <ai-title :style="titleStyle" :index="index" :content="titleContent" />
    </div>
    <div class="ai-rate-group__list">
      <ai-rate
        :key="i"
        v-for="(v, i) in realOptions"
        v-model="checkedMap[v[props.value]]"
        :title-content="v[props.label]"
        :max="max"
        :show-text="showText"
        :texts="texts"
        @input="handleInput"
      />
    </div>
  </div>
</template>

<script>
import PropsOptions from '@/mixin/props-options'
export default {
  name: 'AiRateGroup',
  mixins: [PropsOptions],
  props: {
    // 题目索引
    index: {
      type: [Number, String],
      default: ''
    },
    // 绑定值
    value: {
      type: Object,
      default: () => ({})
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
      type: [Number, String],
      default: 10
    },
    // 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容
    showText: {
      type: Boolean,
      default: false
    },
    // 辅助文字数组
    texts: {
      type: Array,
      default: () => []
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
        if (!val || JSON.stringify(val) === '{}') {
          this.checkedMap = this.realOptions.reduce((init, v) => {
            init[v[this.props.value]] = ''

            return init
          }, {})

          return
        }

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
