<template>
  <div class="ai-rate">
    <div class="ai-rate__title" :style="titleStyle">{{ titleContent }}</div>
    <div v-if="image && image.src" :style="image.container_style || {}">
      <img :src="image.src" :style="image.style" class="ai-rate__image" />
    </div>
    <div class="ai-rate__content" :style="optionStyle">
      <div
        :key="v"
        v-for="v in rateMax"
        class="ai-rate__content__item"
        :class="[
          { 'is-hover-active': v <= hoverActive && hoverIng },
          { 'is-active': v <= active && !hoverIng }
        ]"
        @mouseover="handleMouseover(v)"
        @mouseout="handleMouseout(v)"
        @click="handleClick(v)"
      >
        {{ v }}
      </div>
      <div v-if="showText" class="ai-rate__content__text" :style="optionStyle">
        {{ rateText }}
      </div>
    </div>
    <div v-if="collectReason" class="ai-answer-reason">
      <span class="ai-answer-reason__title" :style="reasonStyle">
        Tell us the reason for your score(Optional)
      </span>
      <textarea class="ai-answer-reason__content"></textarea>
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
    // 最大值
    max: {
      type: [Number, String],
      default: 5
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
    }
  },
  data() {
    return {
      hoverActive: '',
      active: this.value,
      hoverIng: false
    }
  },
  computed: {
    rateMax() {
      const { parseInt } = Number
      return parseInt(this.max)
    },
    rateText() {
      let ac = this.active

      if (this.hoverIng) {
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
      this.hoverIng = true
    },
    handleMouseout(index) {
      this.hoverActive = index
      this.hoverIng = false
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
