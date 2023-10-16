<template>
  <div
    class="ai-answer-reason"
  >
    <span
      class="ai-answer-reason__title"
      :style="titleStyle"
    >
      {{ titleContent }}
    </span>
    <textarea
      v-model.trim="reasonValue"
      class="ai-answer-reason__content"
      @change="handleChange"
    />
  </div>
</template>

<script>
export default {
  name: 'AiAnswerReason',
  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    titleStyle: {
      type: [Object, Array, String],
      default: () => ({})
    },
    titleContent: {
      type: String,
      default: 'Tell us the reason for your option(Optional)'
    }
  },
  emits: ['update:modelValue', 'change'],
  data () {
    return {}
  },
  computed: {
    reasonValue: {
      get () {
        return this.modelValue
      },
      set (value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    handleChange (value) {
      this.$emit('change', value)
    }
  }

}
</script>
