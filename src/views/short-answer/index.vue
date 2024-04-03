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
        <ShortAnswerMd />
        <ImageMd />
      </template>
    </DocCard>
  </div>
</template>

<script>
import DocCard from '@/components/DocCard.vue'
import BasicUsage from './BasicUsage'
import BasicUsageCode from './BasicUsageCode.txt'
import ShortAnswerMd from '@/docs/ai-short-answer.md'
// import PropsMd from '@/docs/props.md'
import ImageMd from '@/docs/image.md'

export default {
  name: 'RadioDoc',
  components: {
    DocCard,
    BasicUsage,
    ShortAnswerMd,
    ImageMd
  },
  data () {
    return {
      BasicUsageCode
    }
  }
}
</script>
