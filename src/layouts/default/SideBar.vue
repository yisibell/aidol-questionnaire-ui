<template>
  <div class="sidebar">
    <div
      v-for="(g, j) in sidebarList"
      :key="j"
      class="sidebar-group"
    >
      <div class="sidebar-group__title">
        {{ g.groupName }}
      </div>
      <div class="sidebar-group__list">
        <div
          v-for="(v,i) in g.items"
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
import { componetRoutes, othersComponentsRoutes } from '@/router'

export default {
  name: 'SideBar',
  data () {
    return {
      componetRoutes,
      othersComponentsRoutes
    }
  },
  computed: {
    activePath () {
      return this.$route.path
    },
    sidebarList () {
      return [
        {
          groupName: '答题组件',
          items: componetRoutes
        },
        {
          groupName: '其他组件',
          items: othersComponentsRoutes
        }
      ]
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
    padding: 20px 16px 0px 36px;

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
