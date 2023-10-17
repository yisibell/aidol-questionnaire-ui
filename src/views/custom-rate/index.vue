<template>
  <div>
    <DocCard :show-source="true">
      <template #description>
        <code class="lang-markup">ai-custom-rate</code> 是 <code class="lang-markup">ai-rate</code> 组件的别名。
        利用 <code class="lang-markup">options</code> 属性可配置自定义的评分选项。
      </template>

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
      docs: 'https://github.com/yisibell/aidol-questionnaire-ui/blob/main/docs/ai-rate.md'
    }
  }
}
</script>
