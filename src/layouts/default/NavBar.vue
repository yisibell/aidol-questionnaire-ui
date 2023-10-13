<template>
  <div class="navbar">
    <div class="navbar__left">
      <div class="logo">
        <img
          :src="Logo"
          alt="logo"
          width="40"
        >
      </div>

      <div class="title">
        <a
          :href="repo"
          target="_blank"
        >Aidol Questionnaire UI</a>
      </div>
    </div>
    <div class="navbar__right">
      <a
        :href="repo"
        target="_blank"
      >Documentation</a>
      <a
        :href="changelog"
        target="_blank"
      >Changelog</a>
      <a
        :href="repo"
        target="_blank"
      >Github</a>
    </div>
  </div>
</template>

<script>
import Logo from '@/assets/logo.png'
export default {
  name: 'NavNar',
  data () {
    return {
      repo: 'https://github.com/yisibell/aidol-questionnaire-ui',
      changelog: 'https://github.com/yisibell/aidol-questionnaire-ui/blob/main/CHANGELOG.md',
      Logo
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 64px;
  background-color: #fff;
  border-bottom: 1px solid #e4e7ed;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  left: 0;
  top: 0;
  box-sizing: border-box;

  a {
    font-family: fangsong, math;
    color: #7b7b82;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__left {
    display: flex;
    align-items: center;

    .logo {
      img {
        display: inline-block;
      }
    }

    .title {
      margin-left: 20px;
    }
  }

  &__right {
    a {
      margin-left: 16px;
    }
  }

}
</style>
