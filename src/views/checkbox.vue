<template>
  <div>
    <ai-choice
      v-model="checked"
      :index="2"
      multiple
      :options="options"
      :max="2"
      title-content="What kind of sale promotions do you prefer? (multiple choice)"
    />
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data() {
    return {
      checked: [],
      options: [
        { label: '选项文本内容', value: 1 },
        { label: '选项文本内容', value: 2 },
        { label: '选项文本内容', value: 3 },
        { label: '选项文本内容', value: 4 },
        { label: '选项文本内容', value: 5 }
      ]
    }
  }
}
</script>
