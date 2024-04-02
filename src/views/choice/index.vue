<template>
  <div>
    <DocCard :show-source="true">
      <BasicUsage />
      <template #source-code>
        <pre class="lang-markup"><code>{{ BasicUsageCode }}</code></pre>
      </template>
    </DocCard>

    <DocCard
      :show-source="true"
      title="为题目添加描述图片"
    >
      <template #description>
        使用 <code class="lang-js">image</code> <b>props</b>，来为问题添加描述图片。
      </template>

      <ImageUsage />
      <template #source-code>
        <pre class="lang-markup"><code>{{ ImageUsageCode }}</code></pre>
      </template>
    </DocCard>

    <DocCard
      :show-source="true"
      title="收集作答原因"
    >
      <template #description>
        通过设置 <code class="lang-js">collectReason: true</code>来启用作答原因收集。
        原因文本通过 <code class="lang-js">answer-reason-value</code> 双绑，即支持 <code class="lang-js">.sync</code>。
      </template>

      <CollectReasonUsage />
      <template #source-code>
        <pre class="lang-markup"><code>{{ CollectReasonCode }}</code></pre>
      </template>
    </DocCard>

    <DocCard
      :show-source="true"
      title="为选项添加描述图"
    >
      <template #description>
        可通过设置选项的 <code class="lang-js">src</code> 属性来添加选项的描述图。
      </template>

      <OptionImageUsage />
      <template #source-code>
        <pre class="lang-markup"><code>{{ OptionImageCode }}</code></pre>
      </template>
    </DocCard>

    <DocCard
      :show-source="true"
      title="配置为多选题"
    >
      <template #description>
        可通过设置 <code class="lang-js">multiple: true</code> 即可开启多选模式（多选题）。
        多选时，可通过 <code class="lang-js">max</code> 设置最大可选择个数, <code class="lang-js">0</code> 表示不限制。
      </template>

      <MultipleUsage />
      <template #source-code>
        <pre class="lang-markup"><code>{{ MultipleUsageCode }}</code></pre>
      </template>
    </DocCard>

    <DocCard title="文档说明">
      <template #description>
        <choiceMd />
      </template>
    </DocCard>
  </div>
</template>

<script>
import DocCard from '@/components/DocCard.vue'
import BasicUsage from './BasicUsage/BasicUsage.vue'
import BasicUsageCode from './BasicUsage/BasicUsageCode.txt'
import ImageUsage from './ImageUsage'
import ImageUsageCode from './ImageUsage/code.txt'
import CollectReasonUsage from './CollectReasonUsage'
import CollectReasonCode from './CollectReasonUsage/code.txt'
import OptionImageUsage from './OptionImage'
import OptionImageCode from './OptionImage/code.txt'
import MultipleUsage from './MultipleUsage'
import MultipleUsageCode from './MultipleUsage/code.txt'
import choiceMd from '@/docs/ai-choice.md'

export default {
  name: 'RadioDoc',
  components: {
    DocCard,
    BasicUsage,
    ImageUsage,
    CollectReasonUsage,
    OptionImageUsage,
    MultipleUsage,
    choiceMd
  },
  data () {
    return {
      MultipleUsageCode,
      OptionImageCode,
      CollectReasonCode,
      ImageUsageCode,
      BasicUsageCode
    }
  }
}
</script>
