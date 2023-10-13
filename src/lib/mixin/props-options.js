import { createIndex } from '@/lib/utils'

export default {
  props: {
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
        value: 'value',
        src: 'src'
      })
    },
    // 是否自动生成选项索引名
    autoOptionsIndex: {
      type: Boolean,
      default: true
    },
    // 选项索引集合
    optionsIndexSet: {
      type: [Array, undefined],
      default: undefined
    }
  },
  computed: {
    realOptions () {
      if (this.autoOptionsIndex) {
        return this.options.map((v, i) => {
          const index_char = createIndex(i, this.optionsIndexSet)
          const label =
            this.type !== 'only-image'
              ? `${index_char}. ${v[this.props.label]}`
              : ''

          return {
            ...v,
            [this.props.label]: label
          }
        })
      }

      return this.options
    }
  }
}
