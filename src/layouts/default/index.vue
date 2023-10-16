<template>
  <div class="default-layout">
    <NavBar />

    <div class="layout-container">
      <div class="app-side">
        <SideBar />
      </div>
      <div class="app-main">
        <div class="app-main__content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
import SideBar from './SideBar.vue'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style lang="scss" scoped>

.default-layout {
  background-color: #EFF2F5;
}

.layout-container {
  display: flex;

  .app-side {
    width: 220px;
  }

  .app-main {
    flex: 1;
    height: calc(100vh - 64px);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 36px;

  }
}
</style>
