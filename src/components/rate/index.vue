<template>
  <div class="ai-rate">
    <div class="ai-rate__title">{{ titleContent }}</div>
    <div class="ai-rate__content">
      <div
        :key="v"
        v-for="v in max"
        class="ai-rate__content__item"
        :class="[
          { 'is-hover-active': v <= hoverActive && hover_ing },
          { 'is-active': v <= active && !hover_ing }
        ]"
        @mouseover="handleMouseover(v)"
        @mouseout="handleMouseout(v)"
        @click="handleClick(v)"
      >
        {{ v }}
      </div>
      <div v-if="showText" class="ai-rate__content__text">{{ rateText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AiRate',
  props: {
    // 双绑值
    value: {
      type: [Number, String],
      default: 0
    },
    // 标题
    titleContent: {
      type: String,
      default: ''
    },
    // 最大值
    max: {
      type: Number,
      default: 5
    },
    // 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容
    showText: {
      type: Boolean,
      default: true
    },
    // 辅助文字数组
    texts: {
      type: Array,
      default: () => ['极差', '失望', '一般', '满意', '惊喜']
    }
  },
  data() {
    return {
      hoverActive: '',
      active: this.value,
      hover_ing: false
    }
  },
  computed: {
    rateText() {
      let ac = this.active

      if (this.hover_ing) {
        ac = this.hoverActive
      } else {
        ac = this.active
      }

      const index = ac - 1

      return this.texts[index]
    }
  },
  watch: {
    value: {
      handler(val) {
        this.active = val
      }
    }
  },
  methods: {
    handleMouseover(index) {
      this.hoverActive = index
      this.hover_ing = true
    },
    handleMouseout(index) {
      this.hoverActive = index
      this.hover_ing = false
    },
    handleClick(index) {
      this.active = index
      this.handleInput()
    },
    handleInput() {
      this.$emit('input', this.active)
    }
  }
}
</script>
