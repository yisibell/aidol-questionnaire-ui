<template>
  <div class="ai-choice">
    <ai-title
      :index="index"
      :style="titleStyle"
      :content="titleContent"
      :suffix-text="realTitleSuffixText"
    />

    <AiTitleImage
      :image="image"
      img-class-name="ai-choice__image"
    />

    <div :class="choiceListClass">
      <div
        v-for="(v, i) in realOptions"
        :key="i"
        :class="[choiceListItemClass, { 'is-active': isActive(v) }]"
        :style="{ ...v.styles, ...(optionStyle || {}) }"
        @click="toggleChecked(v[props.value])"
      >
        <div
          v-if="showImage"
          class="ai-choice__list--image__item__wrap"
        >
          <div class="ai-choice__list--image__item__wrap__icon">
            <div class="ai-choice__list--image__item__wrap__icon__inner" />
          </div>
          <img :src="v[props.src]">
          <div
            v-if="v[props.label]"
            class="ai-choice__list--image__item__wrap__label"
            v-html="v[props.label]"
          />
        </div>
        <div
          v-else
          v-html="v[props.label]"
        />
      </div>
    </div>

    <AiAnswerReason
      v-if="collectReason"
      v-model="answerReason"
      :title-style="reasonStyle"
    />
  </div>
</template>

<script>
import PropsOptions from '@/lib/mixin/props-options'
import AiAnswerReason from '@/lib/components/answer-reason'
import AiTitleImage from '@/lib/components/title-image'

export default {
  name: 'AiChoice',
  components: {
    AiAnswerReason,
    AiTitleImage
  },
  mixins: [PropsOptions],
  props: {
    // 答题类型
    // image 文本 + 图片
    // text 普通文本
    // only-image 仅图片
    type: {
      type: String,
      default: 'text'
    },
    // 题目索引
    index: {
      type: [Number, String],
      default: ''
    },
    // 选择值
    value: {
      type: [Number, String, Array],
      default: () => []
    },
    // 原因双绑值
    answerReasonValue: {
      type: String,
      default: ''
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
    },
    // 自定义标题后缀文本内容
    titleSuffixText: {
      type: [String, undefined],
      default: undefined
    },
    // 选项样式
    optionStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    // 作答原因样式
    reasonStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    image: {
      type: Object,
      default: () => ({

      })
    },
    collectReason: {
      type: [Boolean, Number],
      default: false
    }
  },
  emits: ['update:answerReasonValue', 'input'],
  data () {
    return {
      checked: ''
    }
  },
  computed: {
    answerReason: {
      get () {
        return this.answerReasonValue
      },
      set (value) {
        this.$emit('update:answerReasonValue', value)
      }
    },
    showImage () {
      return ['image', 'only-image'].includes(this.type)
    },
    // 是否超出最大选择个数
    isOuter () {
      return (
        this.multiple &&
        this.choiceMax > 0 &&
        this.checked.length > this.choiceMax
      )
    },
    realTitleSuffixText () {
      if (this.titleSuffixText) return this.titleSuffixText

      return this.multiple ? '（Multiple choice）' : '（Single choice）'
    },
    choiceMax () {
      const { parseInt } = Number
      return parseInt(this.max)
    },
    choiceListClass () {
      return this.showImage ? 'ai-choice__list--image' : 'ai-choice__list'
    },
    choiceListItemClass () {
      return this.showImage
        ? 'ai-choice__list--image__item'
        : 'ai-choice__list__item'
    }
  },
  watch: {
    value: {
      handler (val) {
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
    isActive (v) {
      const val = v[this.props.value]
      if (this.multiple) {
        return this.checked.includes(val)
      }

      return this.checked === val
    },
    toggleChecked (val) {
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
