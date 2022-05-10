<template>
  <div class="ai-rate ai-custom-rate">
    <div class="ai-custom-rate__title">
      <ai-title :style="titleStyle" :index="index" :content="titleContent" />
    </div>
    <div class="ai-rate__content ai-custom-rate_content">
      <div
        :key="i"
        v-for="(v, i) in options"
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
      <div v-if="showText" class="ai-rate__content__text">{{ rateText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AiCustomRate',
  props: {
    // 双绑值
    value: {
      type: [Number, String],
      default: ''
    },
    // 标题
    titleContent: {
      type: String,
      default: ''
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
    }
  },
  data() {
    return {
      hoverActive: -1,
      active: this.options
        .map(v => String(v.value))
        .indexOf(String(this.value)),
      hovering: false
    }
  },
  computed: {
    rateText() {
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
      handler(val) {
        this.active = this.options
          .map(v => String(v.value))
          .indexOf(String(val))
      }
    }
  },
  methods: {
    handleMouseover(index) {
      this.hoverActive = index
      this.hovering = true
    },
    handleMouseout(index) {
      this.hoverActive = index
      this.hovering = false
    },
    handleClick(index) {
      this.active = index
      this.handleInput()
    },
    handleInput() {
      this.$emit('input', this.options[this.active]?.value || '')
    }
  }
}
</script>
