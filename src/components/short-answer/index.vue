<template>
  <div class="ai-short-answer">
    <ai-title
      :style="titleStyle"
      :index="index"
      :content="titleContent"
    ></ai-title>
    <div class="ai-short-answer__content">
      <textarea
        class="ai-short-answer__content__inner"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :cols="cols"
        :rows="rows"
        :value="textValue"
        :maxlength="maxlength"
        :disabled="disabled"
        :readonly="readonly"
        :resize="resize"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
    </div>
  </div>
</template>

<script>
import AiTitle from '@/components/title'
export default {
  name: 'AiShortAnswer',
  components: {
    AiTitle
  },
  props: {
    // 题目索引
    index: {
      type: [Number, String],
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    titleContent: {
      type: String,
      default: ''
    },
    titleStyle: {
      type: [Object, Array, undefined],
      default: undefined
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    cols: {
      type: [Number, String, undefined],
      default: undefined
    },
    rows: {
      type: [Number, String],
      default: 10
    },
    placeholder: {
      type: String,
      default: ''
    },
    maxlength: {
      type: [Number, String, undefined],
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    // none, both, horizontal, vertical
    resize: {
      type: String,
      default: 'inherit'
    }
  },
  data() {
    return {
      textValue: ''
    }
  },
  watch: {
    value: {
      handler(val) {
        this.textValue = val
      },
      immediate: true
    }
  },
  methods: {
    handleInput(e) {
      this.textValue = e.target.value
      this.$emit('input', this.textValue, e)
    },
    handleChange(e) {
      this.$emit('change', this.textValue, e)
    },
    handleFocus(e) {
      this.$emit('focus', e)
    },
    handleBlur(e) {
      this.$emit('blur', e)
    }
  }
}
</script>
