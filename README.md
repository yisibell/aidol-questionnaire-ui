# aidol-questionnaire-ui
A questionnaire survey ui library for Vue.js.

# Installation

``` bash
# yarn
$ yarn add @aidol/questionnaire-ui

# npm
$ npm i @aidol/questionnaire-ui
```

# Usage

``` js
// src/plugins/aidol-questionnaire-ui.js

import Vue from 'vue'
import AidolQuestionnaireUI from '@aidol/questionnaire-ui'

import '@aidol/questionnaire-ui/dist/AidolQuestionnaireUI.css'

Vue.use(AidolQuestionnaireUI)
```

``` js
// src/main.js
import Vue from 'vue'

// ...

import '@/plugins/aidol-questionnaire-ui'

// ...

new Vue({
  // ...
})
```

# Components

## ai-choice

选择题。包含单选、多选。

### Attributes

| 参数 | 说明 | 类型 |可选值 | 默认值 |
| :---: |:---: |:---: |:---:| :---: |
| `value/v-model` | 绑定值 | `Number/String/Array` | - | - |
| `index` | 题目索引值 | `Number/String` | - | - |
| `multiple` | 是否多选 | `Boolean` | - | `false` |
| `max` |  多选时，最大可选择个数, `0` 表示不限制 | `Number` | - | `0` |
| `titleStyle` | 定义标题的样式，同 `vue` 中的 `style` prop | `Object/Array` | - | - |
| `titleContent` | 标题的内容 | `String` | - | - |
| `titleSuffixText` | 自定义标题的后缀文本内容。如果不设置，将自动根据 `multiple` 的值设置为 `（Multiple choice）或（Single choice）` | `String`  | - | - |
| `type` | 指定选项内容的类型，当是 `image` 时，将使用待选项列表项中的 `src` 字段作为图片链接展示 | `String` | `text/image` | `text` |
| `autoOptionsIndex` | 是否自动生成待选项索引标识符 | `Boolean` | - | `true` |
| `optionsIndexSet` | 自动生成待选项索引标识符时的匹配列表 | `Array` | - | `['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']` |
| `options` | 待选项列表 | `Array of Object` | - | `[]` |
| `props` | 配置选项 | `Object` | - | 见下表 |


## ai-short-answer

简答题。

### Attributes

| 参数 | 说明 | 类型 |可选值 | 默认值 |
| :---: |:---: |:---: |:---:| :---: |
| `index` | 题目索引值 | `Number/String` | - | - |
| `value/v-model` | 绑定值 | `String` | - | - |
| `titleStyle` | 定义标题的样式，同 `vue` 中的 `style` prop | `Object/Array` | - | - |
| `titleContent` | 标题的内容 | `String` | - | - |
| `placeholder` | 占位内容 | `String` | - | - |
| `maxlength` | 可输入最大字符长度 | `Number/String` | - | - |
| `disabled` | 是否禁用 | `Boolean` | - | `false` |
| `readonly` | 是否只读 | `Boolean` | - | `false` |
| `resize` | 控制是否能被用户缩放	 | `String` | `none, both, horizontal, vertical` | - |
| `rows` | 输入框行数	| `String` | - | `10` |


## ai-rate

评分。

### Attributes

| 参数 | 说明 | 类型 |可选值 | 默认值 |
| :---: |:---: |:---: |:---:| :---: |
| `index` | 题目索引值 | `Number/String` | - | - |
| `value/v-model` | 绑定值 | `Number/String` | - | `0` |
| `max` | 最大值 | `Number` | - | `5` |
| `showText` | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 | `Boolean` | - | `false` |
| `texts` | 辅助文字数组 | `Array` | - | `[]` |

## ai-rate-group

评分组。

## ai-custom-rate

自定义评分。

### Attributes

| 参数 | 说明 | 类型 |可选值 | 默认值 |
| :---: |:---: |:---: |:---:| :---: |
| `index` | 题目索引值 | `Number/String` | - | - |
| `value/v-model` | 绑定值 | `Number/String` | - | `0` |
| `options` | 选项 | `Array of Object` | - | `[{label: "1", value: "1"}, {label:"2", value: "2"}]` |
| `showText` | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容 | `Boolean` | - | `false` |
| `texts` | 辅助文字数组 | `Array` | - | `[]` |

### Attributes

| 参数 | 说明 | 类型 |可选值 | 默认值 |
| :---: |:---: |:---: |:---:| :---: |
| `index` | 题目索引值 | `Number/String` | - | - |
| `value/v-model` | 绑定值 | `Number/String` | - | `0` |
| `max` | 最大值 | `Number` | - | `5` |
| `showText` | 是否显示辅助文字，若为真，则会从 `texts` 数组中选取当前分数对应的文字内容 | `Boolean` | - | `false` |
| `texts` | 辅助文字数组 | `Array` | - | `[]` |
| `options` | 评分列表配置 | `Array of Object` | - | `[]` |
| `titleStyle` | 定义标题的样式，同 `vue` 中的 `style` prop | `Object/Array` | - | - |
| `titleContent` | 标题的内容 | `String` | - | - |
| `props` | 配置选项 | `Object` | - | 见下表 |

## ai-block-tips

提示块。

### Attributes

| 参数 | 说明 | 类型 |可选值 | 默认值 |
| :---: |:---: |:---: |:---:| :---: |
| `message` | 提示信息文本，当其为 `非空字符串` 时，显示提示效果 | `String` | - | '' |


# 其他配置
## props 配置

| 键名 | 说明 | 默认值 |
| :---: | :---: | :---: |
| `label` | 指定选项标签为选项对象的某个属性值 | 'label' |
| `value` | 指定选项的值为选项对象的某个属性值 | 'value' |
| `src` | 指定选项的图片链接为选项对象的某个属性值 | 'src' |