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
        <BlockTipsMd />
      </template>
    </DocCard>
  </div>
</template>

<script>
import DocCard from '@/components/DocCard.vue'
import BasicUsage from './BasicUsage'
import BasicUsageCode from './BasicUsageCode.txt'
import BlockTipsMd from '@/docs/ai-block-tips.md'

export default {
  name: 'RadioDoc',
  components: {
    DocCard,
    BasicUsage,
    BlockTipsMd
  },
  data () {
    return {
      BasicUsageCode

    }
  }
}
</script>
