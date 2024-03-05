<template>
  <div>
    <DocCard :show-source="true">
      <BasicUsage />
      <template #source-code>
        <pre class="lang-markup"><code>{{ BasicUsageCode }}</code></pre>
      </template>
    </DocCard>

    <DocCard
      title="仅高亮单一评分值"
      :show-source="true"
    >
      <template #description>
        可通过设置 <code class="lang-js">highlightSingleScore</code> 为 <code class="lang-js">true</code> 来控制仅显示单一评分值效果。
      </template>

      <HighlightSingleScoreUsage />
      <template #source-code>
        <pre class="lang-markup"><code>{{ HighlightSingleScoreUsageCode }}</code></pre>
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
import BasicUsage from './BasicUsage/BasicUsage.vue'
import BasicUsageCode from './BasicUsage/BasicUsageCode.txt'

import HighlightSingleScoreUsage from './HighlightSingleScore/Usage.vue'
import HighlightSingleScoreUsageCode from './HighlightSingleScore/code.txt'

export default {
  name: 'RadioDoc',
  components: {
    DocCard,
    BasicUsage,
    HighlightSingleScoreUsage

  },
  data () {
    return {
      BasicUsageCode,
      HighlightSingleScoreUsageCode,
      docs: 'https://github.com/yisibell/aidol-questionnaire-ui/blob/main/docs/ai-rate.md'
    }
  }
}
</script>
