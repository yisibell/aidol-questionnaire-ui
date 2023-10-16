<template>
  <ai-short-answer
    v-model="answer"
    :index="4"
    :image="image"
    title-content="What is your fit preference?"
    :title-style="titleStyle"
  />
</template>

<script>
export default {
  data () {
    return {
      answer: '',
      image: {
        src:
          'https://imgs.veryvoga.com/s330/a7/cc/10d1a8173eb551c214fa99aacef0a7cc.jpg',
        container_style: {
          'background-color': '#e8e8e8',
          padding: '5px 0 5px 0',
          'text-align': 'center'
        },
        style: {
          width: '480px'
        }
      },
      titleStyle: {
        color: 'red'
      }
    }
  }
}
</script>
