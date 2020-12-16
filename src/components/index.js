import AiChoice from './choice'
import AiTitle from './title'
import AiShortAnswer from './short-answer'
import AiBlockTips from './block-tips'
import AiRate from './rate'
import AiRateGroup from './rate-group'

import '@/styles/index.scss'

function install(Vue) {
  ;[AiChoice, AiTitle, AiShortAnswer, AiBlockTips, AiRate, AiRateGroup].forEach(
    v => {
      Vue.component(v.name, v)
    }
  )
}

export default {
  install,
  AiTitle,
  AiChoice,
  AiShortAnswer,
  AiBlockTips,
  AiRate,
  AiRateGroup
}
