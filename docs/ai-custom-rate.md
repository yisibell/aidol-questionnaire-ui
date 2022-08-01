# ai-custom-rate

自定义评分。

### Attributes

| 参数 | 说明 | 类型 |可选值 | 默认值 |
| :---: |:---: |:---: |:---:| :---: |
| `index` | 题目索引值 | `Number/String` | - | - |
| `value/v-model` | 绑定值 | `Number/String` | - | `0` |
| `options` | 选项 | `Array of Object` | - | `[{label: "1", value: "1"}, {label:"2", value: "2"}]` |
| `showText` | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 | `Boolean` | - | `false` |
| `texts` | 辅助文字数组 | `Array` | - | `[]` |