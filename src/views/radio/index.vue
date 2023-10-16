<template>
  <div>
    <DocCard>
      <BasicUsage />
      <template #source-code>
        <code />
      </template>
    </DocCard>

    <DocCard title="文档说明">
      <template #description>
        <a
          :href="docs"
          target="_blank"
        >{{ docs }}</a>
      </template>
    </DocCard>
  </div>
</template>

<script>
import DocCard from '@/components/DocCard.vue'
import BasicUsage from './BasicUsage'

export default {
  name: 'RadioDoc',
  components: {
    DocCard,
    BasicUsage
  },
  data () {
    return {
      docs: 'https://github.com/yisibell/aidol-questionnaire-ui/blob/main/docs/ai-choice.md'
    }
  }
}
</script>
