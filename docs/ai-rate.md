# ai-rate

评分。

### Attributes

| 参数 | 说明 | 类型 |可选值 | 默认值 |
| :---: |:---: |:---: |:---:| :---: |
| `index` | 题目索引值 | `Number/String` | - | - |
| `value/v-model` | 绑定值 | `Number/String` | - | `0` |
| `answerReasonValue` | 原因双绑值，支持 `.sync` | `string` | - | - |
| `max` | 最大值 | `Number` | - | `5` |
| `showText` | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 | `Boolean` | - | `false` |
| `texts` | 辅助文字数组 | `Array` | - | `[]` |
| `collectReason`| 是否收集作答原因 | `Boolean` | - | `false` |
| `image` | 问题图片配置选项 | `Object` | - | 见 [image](./image.md) 配置 |
| `titleStyle` | 定义标题的样式，同 `vue` 中的 `style` prop | `Object/Array` | - | - |
| `optionStyle` | 定义选项的样式，同 `vue` 中的 `style` prop | `Object/Array` | - | - |
| `reasonStyle` | 定义作答原因的样式，同 `vue` 中的 `style` prop | `Object/Array` | - | - |

