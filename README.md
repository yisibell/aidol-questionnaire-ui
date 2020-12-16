# aidol-questionnaire-ui
A questionnaire survey ui library for Vue.js.

# Installation

``` zsh
$ npm i @aidol/questionnaire-ui -S
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
| `multiple` | 是否多选 | `Boolean` | - | `false` |
| `max` |  多选时，最大可选择个数, `0` 表示不限制 | `Number` | - | `0` |
| `options` | 待选项列表 | `Array` | - | `[]` |
| `props` | 配置选项 | `Object` | - | 见下表 |
| `titleStyle` | 定义标题的样式，同 `vue` 中的 `style` prop | `Object/Array` | - | - |
| `titleContent` | 标题的内容 | `String` | - | - |


**props 配置**

| 键名 | 说明 | 默认值 |
| :---: | :---: | :---: |
| label | 指定选项标签为选项对象的某个属性值 | 'label' |
| value | 指定选项的值为选项对象的某个属性值 | 'value' |


## ai-short-answer

简答题。

## ai-rate

评分。

## ai-rate-group

评分组。

## ai-block-tips

提示块。