import AiChoice from './choice'
import AiTitle from './title'
import AiShortAnswer from './short-answer'
import AiBlockTips from './block-tips'

import '@/styles/index.scss'

function install(Vue) {
  ;[AiChoice, AiTitle, AiShortAnswer, AiBlockTips].forEach(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install,
  AiTitle,
  AiChoice,
  AiShortAnswer
}
