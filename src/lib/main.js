import AiChoice from './components/choice'
import AiTitle from './components/title'
import AiShortAnswer from './components/short-answer'
import AiBlockTips from './components/block-tips'
import AiRate from './components/rate'
import AiRateGroup from './components/rate-group'
import AiCustomRate from './components/custom-rate'

import '@/lib/styles/index.scss'

function install (Vue) {
  [
    AiChoice,
    AiTitle,
    AiShortAnswer,
    AiBlockTips,
    AiRate,
    AiRateGroup,
    AiCustomRate
  ].forEach(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install,
  AiTitle,
  AiChoice,
  AiShortAnswer,
  AiBlockTips,
  AiRate,
  AiRateGroup,
  AiCustomRate
}
