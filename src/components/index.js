import AiRadio from "./radio";

function install(Vue) {
  [AiRadio].forEach(v => {
    Vue.component(v.name, v);
  });
}

export default {
  install,
  AiRadio
};
