# Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :---: |:---: |:---: |:---:| :---: |
| `value/v-model` | 绑定值 | `Number/String/Array` | - | - |
| `answerReasonValue` | 原因双绑值，支持 `.sync` | `string` | - | - |
| `index` | 题目索引值 | `Number/String` | - | - |
| `multiple` | 是否多选 | `Boolean` | - | `false` |
| `max` |  多选时，最大可选择个数, `0` 表示不限制 | `Number` | - | `0` |
| `titleStyle` | 定义标题的样式，同 `vue` 中的 `style` prop | `Object/Array` | - | - |
| `titleContent` | 标题的内容 | `String` | - | - |
| `titleSuffixText` | 自定义标题的后缀文本内容。如果不设置，将自动根据 `multiple` 的值设置为 `（Multiple choice）或（Single choice）` | `String`  | - | - |
| `optionStyle` | 定义选项的样式，同 `vue` 中的 `style` prop | `Object/Array` | - | - |
| `reasonStyle` | 定义作答原因的样式，同 `vue` 中的 `style` prop | `Object/Array` | - | - |
| `type` | 指定选项内容的类型，当是 `image` 时，将使用待选项列表项中的 `src` 字段作为图片链接展示 | `String` | `text`,`image` | `text` |
| `autoOptionsIndex` | 是否自动生成待选项索引标识符 | `Boolean` | - | `true` |
| `optionsIndexSet` | 自动生成待选项索引标识符时的匹配列表 | `Array` | - | `['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']` |
| `options` | 待选项列表 | `Array of Object` | - | `[]` |
| `props` | 配置选项 | `Object` | - | 详见 **props** 配置 |
| `collectReason`| 是否收集作答原因 | `Boolean` | - | `false` |
| `image` | 问题图片配置选项 | `Object` | - | 详见 **image** 配置 |

# props 配置

| 键名 | 说明 | 默认值 |
| :---: | :---: | :---: |
| `label` | 指定选项标签为选项对象的某个属性值 | `'label'` |
| `value` | 指定选项的值为选项对象的某个属性值 | `'value'` |
| `src` | 指定选项的图片链接为选项对象的某个属性值 | `'src'` |
