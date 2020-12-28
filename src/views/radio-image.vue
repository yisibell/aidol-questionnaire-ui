<template>
  <div>
    <ai-block-tips :message="validMessage">
      <ai-choice
        v-model="checked"
        :index="1"
        type="only-image"
        :options="options"
        title-content="How much are you willing to spend every time when shop clothing online?"
      />
    </ai-block-tips>
  </div>
</template>

<script>
export default {
  name: 'RadioImage',
  data() {
    return {
      validMessage: '',
      checked: '',
      options: [
        {
          label: '选项文本内容',
          value: 1,
          src:
            'https://imgs.veryvoga.com/s330/00/30/20097573b99800c8458c5d34b4560030.jpg'
        },
        {
          label: '选项文本内容',
          value: 2,
          src:
            'https://imgs.veryvoga.com/s330/87/cd/7afdefb84693461338556061931387cd.jpg'
        },
        {
          label: '选项文本内容',
          value: 3,
          src:
            'https://imgs.veryvoga.com/s330/dc/8e/166b628c9283a3b1f928add2eeebdc8e.jpg'
        },
        {
          label: '选项文本内容',
          value: 4,
          src:
            'https://imgs.veryvoga.com/s330/a7/cc/10d1a8173eb551c214fa99aacef0a7cc.jpg'
        },
        {
          label: '选项文本内容',
          value: 5,
          src:
            'https://imgs.veryvoga.com/s330/3f/19/010a444ebc99204dd3519e5caeec3f19.jpg'
        }
      ]
    }
  }
}
</script>
