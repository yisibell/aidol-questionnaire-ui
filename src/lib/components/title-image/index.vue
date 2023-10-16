<template>
  <div
    v-if="image && image.src"
    class="ai-title-image"
    :style="image.container_style || {}"
  >
    <img
      :src="image.src"
      :style="image.style"
      :class="imgClassName"
      class="ai-title-image__inner"
    >
  </div>
</template>

<script>
export default {
  name: 'AiTitleImage',
  props: {
    image: {
      type: Object,
      default: () => ({
        src: '',
        style: {},
        container_style: {}
      })
    },
    imgClassName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>
