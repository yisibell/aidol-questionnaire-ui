<template>
  <div class="ai-rate-group">
    <div class="ai-rate-group__title">
      <ai-title
        :style="titleStyle"
        :index="index"
        :content="titleContent"
      />
    </div>

    <AiTitleImage
      :image="image"
      img-class-name="ai-rate-group__image"
    />

    <div class="ai-rate-group__list">
      <ai-rate
        v-for="(v, i) in realOptions"
        :key="i"
        v-model="checkedMap[v[props.value]]"
        :title-content="v[props.label]"
        :title-style="optionStyle"
        :option-style="optionStyle"
        :max="max"
        :show-text="showText"
        :texts="texts"
        :highlight-single-score="highlightSingleScore"
        class="ai-rate-group__list-item"
        @input="handleInput"
      />
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
import PropsOptions from '@/lib/mixin/props-options'
import AiAnswerReason from '@/lib/components/answer-reason'
import AiTitleImage from '@/lib/components/title-image'

export default {
  name: 'AiRateGroup',
  components: {
    AiAnswerReason,
    AiTitleImage
  },
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
    // 原因双绑值
    answerReasonValue: {
      type: String,
      default: ''
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
    },
    // 图片配置
    image: {
      type: Object,
      default: () => ({})
    },
    // 是否收集作答原因
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
      checkedMap: {}
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
    }
  },
  watch: {
    value: {
      handler (val) {
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
    handleInput () {
      this.$emit('input', this.checkedMap)
    }
  }
}
</script>
