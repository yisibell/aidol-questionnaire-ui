<template>
  <div id="app">
    <div id="nav">
      <router-link to="/radio">
        单选题
      </router-link> |
      <router-link to="/radio-image">
        单选题(带图片)
      </router-link> |
      <router-link to="/checkbox">
        多选题
      </router-link> |
      <router-link to="/short-answer">
        简答题
      </router-link> |
      <router-link to="/rate">
        量表题
      </router-link> |
      <router-link to="/rate-group">
        量表题组
      </router-link> |
      <router-link to="/custom-rate">
        自定义量表题
      </router-link>
    </div>

    <div id="app-main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  padding: 10px;

  #nav {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  &-main {
    width: 600px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 600px) {
  #app {
    &-main {
      width: 100%;
    }
  }
}
</style>
