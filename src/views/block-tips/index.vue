<template>
  <div>
    <DocCard :show-source="true">
      <BasicUsage />
      <template #source-code>
        <pre class="lang-markup"><code>{{ BasicUsageCode }}</code></pre>
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
import BasicUsageCode from './BasicUsageCode.txt'

export default {
  name: 'RadioDoc',
  components: {
    DocCard,
    BasicUsage
  },
  data () {
    return {
      BasicUsageCode,
      docs: 'https://github.com/yisibell/aidol-questionnaire-ui/blob/main/docs/ai-block-tips.md'
    }
  }
}
</script>
