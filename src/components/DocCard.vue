<template>
  <div class="doc-card">
    <div class="doc-card__title">
      {{ title }}
    </div>
    <div class="doc-card__description">
      <slot name="description">
        {{ description }}
      </slot>
    </div>

    <div class="doc-card__example">
      <slot />
    </div>

    <div
      v-if="showSource"
      class="doc-card__source"
    >
      <div class="doc-card__source-code">
        <slot name="source-code" />
      </div>
      <div class="doc-card__source-footer">
        <span
          class="expand-btn"
          @click="toggleExpand"
        >{{ expand ? '收起' : '展开' }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DocCard',
  props: {
    title: {
      type: String,
      default: '基础使用'
    },
    description: {
      type: String,
      default: ''
    },
    showSource: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      expand: false
    }
  },
  methods: {
    toggleExpand () {
      this.expand = !this.expand
    }
  }
}
</script>

<style lang="scss" scoped>
.doc-card {
  width: 100%;
  border-radius: 30px;
  background-color: #fff;
  padding: 32px;
  box-sizing: border-box;
  margin-bottom: 30px;

  a {
    color: #409EFF;
  }

  &__title {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
    color: #323233;
  }

  &__description {
    font-size: 14px;
    color: #34495E;
    margin-bottom: 16px;

  }

  &__example {
    max-width: 600px;
    margin: 0 auto;
  }

  &__source-footer {
    display: flex;
    justify-content: center;
    font-size: 14px;
    color: #666;

    .expand-btn {
      cursor: pointer;
    }
  }
}
</style>
