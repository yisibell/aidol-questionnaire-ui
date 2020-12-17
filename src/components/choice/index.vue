<template>
  <div class="ai-choice">
    <ai-title
      :index="index"
      :style="titleStyle"
      :content="titleContent"
      :suffix-text="titleSuffixText"
    />
    <div class="ai-choice__list">
      <div
        :key="i"
        v-for="(v, i) in options"
        :class="['ai-choice__list__item', { 'is-active': isActive(v) }]"
        :style="v.styles"
        v-html="v[props.label]"
        @click="toggleChecked(v[props.value])"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AiChoice',
  props: {
    // 题目索引
    index: {
      type: [Number, String],
      default: ''
    },
    // 双绑数据
    value: {
      type: [Number, String, Array],
      default: () => []
    },
    // 选项列表
    options: {
      type: Array,
      default: () => []
    },
    // 配置选项
    props: {
      type: Object,
      default: () => ({
        label: 'label',
        value: 'value'
      })
    },
    // 是否多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 多选时，最大选择个数, 0 表示不限制
    max: {
      type: [Number, String],
      default: 0
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
    }
  },
  data() {
    return {
      checked: ''
    }
  },
  computed: {
    // 是否超出最大选择个数
    isOuter() {
      return (
        this.multiple &&
        this.choiceMax > 0 &&
        this.checked.length > this.choiceMax
      )
    },
    titleSuffixText() {
      return this.multiple ? '（Multiple choice）' : '（Single choice）'
    },
    choiceMax() {
      const { parseInt } = Number
      return parseInt(this.max)
    }
  },
  watch: {
    value: {
      handler(val) {
        if (this.multiple) {
          this.checked = Array.isArray(val) ? [...val] : []
        } else {
          this.checked = val
        }
      },
      immediate: true
    }
  },
  methods: {
    isActive(v) {
      const val = v[this.props.value]
      if (this.multiple) {
        return this.checked.includes(val)
      }

      return this.checked === val
    },
    toggleChecked(val) {
      if (this.multiple) {
        const index = this.checked.findIndex(v => v === val)
        if (index >= 0) {
          this.checked.splice(index, 1)
        } else {
          this.checked.push(val)
        }

        if (this.isOuter) {
          this.checked.shift()
        }
      } else {
        this.checked = val
      }

      this.$emit('input', this.checked)
    }
  }
}
</script>
