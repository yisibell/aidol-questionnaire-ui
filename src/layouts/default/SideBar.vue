<template>
  <div class="sidebar">
    <div class="sidebar-group">
      <div class="sidebar-group__title">
        答题组件
      </div>
      <div class="sidebar-group__list">
        <div
          v-for="(v,i) in componetRoutes"
          :key="i"
          class="sidebar-group__list-item"
          :class="{active: activePath === v.path}"
        >
          <router-link :to="v.path">
            {{ v.meta && v.meta.title }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { componetRoutes } from '@/router'

export default {
  name: 'SideBar',
  data () {
    return {
      componetRoutes
    }
  },
  computed: {
    activePath () {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #fff;
  height: calc(100vh - 64px);
  overflow-y: auto;

  &-group {
    padding: 20px 16px 16px 36px;
    margin-bottom: 30px;

    &__title {
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      padding: 16px 0;
    }

    &__list {
      &-item {
        color: #34495e;
        font-size: 13px;
        margin-bottom: 16px;

        a {
          color: #34495e;
          text-decoration: none;

          &:hover {
            color: #409EFF;
          }
        }

        &.active {
          a {
            color: #409EFF;
          }
        }

      }
    }
  }
}
</style>
