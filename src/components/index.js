import AiChoice from './choice'
import AiTitle from './title'

function install(Vue) {
  ;[AiChoice, AiTitle].forEach(v => {
    Vue.component(v.name, v)
  })
}

export default {
  install,
  AiChoice,
  AiTitle
}
