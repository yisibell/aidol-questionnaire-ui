<template>
  <ai-short-answer
    v-model="answer"
    :index="4"
    :image="image"
    title-content="What is your fit preference?"
  />
</template>

<script>
export default {
  data () {
    return {
      answer: '',
      image: {
        src: 'https://picsum.photos/600/200'
      }

    }
  }
}
</script>
