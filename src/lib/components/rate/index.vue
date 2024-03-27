<template>
  <div class="ai-rate">
    <div
      class="ai-rate__title"
    >
      <ai-title
        :style="titleStyle"
        :index="index"
        :content="titleContent"
      />
    </div>

    <AiTitleImage
      :image="image"
      img-class-name="ai-rate__image"
    />

    <div
      class="ai-rate__content"
      :style="optionStyle"
    >
      <div
        v-for="v in rateOptions"
        :key="v.value"
        class="ai-rate__content__item"
        :class="[
          { 'is-hover-active': isHoverActive(v.value) },
          { 'is-active': isActive(v.value) }
        ]"
        @mouseover="handleMouseover(v.value)"
        @mouseout="handleMouseout(v.value)"
        @click="handleClick(v.value)"
      >
        {{ v.label }}
      </div>
      <div
        v-if="showText"
        class="ai-rate__content__text"
        :style="optionStyle"
      >
        {{ rateText }}
      </div>
    </div>

    <AiAnswerReason
      v-if="collectReason"
      v-model="answerReason"
      title-content="Tell us the reason for your score(Optional)"
      :title-style="reasonStyle"
    />
  </div>
</template>

<script>
import AiAnswerReason from '@/lib/components/answer-reason'
import AiTitleImage from '@/lib/components/title-image'
import AiTitle from '@/lib/components/title'

export default {
  name: 'AiRate',
  components: {
    AiAnswerReason,
    AiTitle,
    AiTitleImage
  },
  props: {
    // 双绑值
    value: {
      type: [Number, String],
      default: 0
    },
    // 原因双绑值
    answerReasonValue: {
      type: String,
      default: ''
    },
    // 题目索引
    index: {
      type: [Number, String],
      default: ''
    },
    // 标题
    titleContent: {
      type: String,
      default: ''
    },
    // 标题样式
    titleStyle: {
      type: [Object, Array, undefined],
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
    // 最小值
    min: {
      type: [Number, String],
      default: 1
    },
    // 最大值
    max: {
      type: [Number, String],
      default: 5
    },
    // 自定义选项，设置此选项时，max 将无效
    options: {
      type: [Array, undefined],
      default: undefined
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
    },
    image: {
      type: Object,
      default: () => ({})
    },
    collectReason: {
      type: [Boolean, Number],
      default: false
    },
    // 仅高亮单一评分值
    highlightSingleScore: {
      type: Boolean,
      default: false
    }
  },
  emits: ['input', 'update:answerReasonValue'],
  data () {
    return {
      hoverActive: '',
      hoverIng: false
    }
  },
  computed: {
    active: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },
    answerReason: {
      get () {
        return this.answerReasonValue
      },
      set (value) {
        this.$emit('update:answerReasonValue', value)
      }
    },
    rateMin () {
      return Number.parseInt(this.min)
    },
    rateMax () {
      return Number.parseInt(this.max)
    },
    rateOptions () {
      if (Array.isArray(this.options) && this.options.length > 0) {
        return this.options
      }

      const res = []

      for (let i = this.rateMin; i <= this.rateMax; i++) {
        res.push({ label: i, value: i })
      }

      return res
    },
    rateText () {
      const ac = this.hoverIng ? this.hoverActive : this.active

      const index = this.rateOptions.findIndex(v => v.value === ac)

      return this.texts[index]
    },
    hoverActiveIndex () {
      return this.rateOptions.findIndex(v => v.value === this.hoverActive)
    },
    activeIndex () {
      return this.rateOptions.findIndex(v => v.value === this.active)
    }
  },
  methods: {
    isHoverActive (value) {
      const index = this.rateOptions.findIndex(v => v.value === value)

      if (this.highlightSingleScore) {
        return index === this.hoverActiveIndex && this.hoverIng
      }

      return index <= this.hoverActiveIndex && this.hoverIng
    },
    isActive (value) {
      const index = this.rateOptions.findIndex(v => v.value === value)

      if (this.highlightSingleScore) {
        return index === this.activeIndex
      }

      return index <= this.activeIndex && !this.hoverIng
    },
    handleMouseover (value) {
      this.hoverActive = value
      this.hoverIng = true
    },
    handleMouseout (value) {
      this.hoverActive = value
      this.hoverIng = false
    },
    handleClick (value) {
      this.active = value
    }
  }
}
</script>
