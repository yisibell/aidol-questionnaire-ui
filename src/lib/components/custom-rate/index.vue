<template>
  <div class="ai-rate ai-custom-rate">
    <div class="ai-custom-rate__title">
      <ai-title
        :style="titleStyle"
        :index="index"
        :content="titleContent"
      />
    </div>

    <AiTitleImage
      :image="image"
      img-class-name="ai-custom-rate__image"
    />

    <div
      class="ai-rate__content ai-custom-rate_content"
      :style="optionStyle"
    >
      <div
        v-for="(v, i) in options"
        :key="i"
        class="ai-rate__content__item ai-custom-rate__content__item"
        :class="[
          { 'is-hover-active': i <= hoverActive && hovering },
          { 'is-active': i <= active && !hovering }
        ]"
        @mouseover="handleMouseover(i)"
        @mouseout="handleMouseout(i)"
        @click="handleClick(i)"
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

export default {
  name: 'AiCustomRate',
  components: {
    AiAnswerReason,
    AiTitleImage
  },
  props: {
    // 双绑值
    value: {
      type: [Number, String],
      default: ''
    },
    // 原因双绑值
    answerReasonValue: {
      type: String,
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
    // 题目索引
    index: {
      type: [Number, String],
      default: ''
    },
    // 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容
    showText: {
      type: Boolean,
      default: false
    },
    // 选项数组
    options: {
      type: Array,
      default: () => []
    },
    // 辅助文字数组
    texts: {
      type: Array,
      default: () => []
    },
    /**
     * 添加图片
     */
    image: {
      type: Object,
      default: () => ({})
    },
    /**
     * 是否显示原因输入控件
     */
    collectReason: {
      type: [Boolean, Number],
      default: false
    }
  },
  emits: ['input', 'update:answerReasonValue'],
  data () {
    return {
      hoverActive: -1,
      active: this.options
        .map(v => String(v.value))
        .indexOf(String(this.value)),
      hovering: false
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
    rateText () {
      let ac = this.active
      if (this.hovering) {
        ac = this.hoverActive
      } else {
        ac = this.active
      }
      return this.texts[ac] || ''
    }
  },
  watch: {
    value: {
      handler (val) {
        this.active = this.options
          .map(v => String(v.value))
          .indexOf(String(val))
      }
    }
  },
  methods: {
    handleMouseover (index) {
      this.hoverActive = index
      this.hovering = true
    },
    handleMouseout (index) {
      this.hoverActive = index
      this.hovering = false
    },
    handleClick (index) {
      this.active = index
      this.handleInput()
    },
    handleInput () {
      this.$emit('input', this.options[this.active]?.value || '')
    }
  }
}
</script>
