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

## ai-short-answer

简答题。

## ai-rate

评分。

## ai-rate-group

评分组。

## ai-block-tips

提示块。