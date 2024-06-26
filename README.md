<p align="center">
  <a href="https://www.npmjs.org/package/@aidol/questionnaire-ui">
    <img src="https://img.shields.io/npm/v/@aidol/questionnaire-ui.svg">
  </a>
  <a href="https://npmcharts.com/compare/@aidol/questionnaire-ui?minimal=true">
    <img src="https://img.shields.io/npm/dm/@aidol/questionnaire-ui.svg">
  </a>
  <br>
</p>

# aidol-questionnaire-ui

A questionnaire survey ui library for Vue.js.

- :book: [Example](https://hongwenqing.com/aidol-questionnaire-ui/).

- ✨ [Release Notes](./CHANGELOG.md).


# Features

## 答题组件

1. ai-choice（选择题，支持单选，多选）
2. ai-short-answer（简答题）
3. ai-rate（评分）
4. ai-rate-group（评分组）
5. ai-custom-rate（可自定义的评分)


## 其他组件

1. ai-block-tips（提示块）

> TIPS: 需要添加组件，或者更新组件功能的话，请提交 **PR**。

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

# Development

```bash
# Install dependencies
$ pnpm install

# Develop with the example
$ pnpm dev

# Build the lib
$ pnpm build

# Build the example
$ pnpm build:example

# Release new version
$ npm run release
```