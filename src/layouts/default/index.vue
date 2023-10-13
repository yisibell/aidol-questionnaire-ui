<template>
  <div class="default-layout">
    <NavBar />

    <div class="layout-container">
      <div class="app-side">
        <SideBar />
      </div>
      <div class="app-main">
        <div class="app-main__wrapper">
          <div class="app-main__content">
            <router-view />
          </div>
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
    padding: 50px 20px;
    box-sizing: border-box;
    padding: 36px;

    &__wrapper {
      border-radius: 30px;
      background-color: #fff;
      padding: 20px;
    }

    &__content {
      max-width: 600px;
      margin: 0 auto;
    }
  }
}
</style>
