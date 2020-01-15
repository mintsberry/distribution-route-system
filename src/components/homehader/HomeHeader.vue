<template>
  <div class="home-header">
    <div class="brand">
      <img src="./logo.png" alt="" class="logo">
      <span class="title">Path</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
.home-header {
  height: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  border-bottom: 1px solid $color-border;
  .brand {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .logo {
      margin-right: 8px;
    }
    .title {
      font-size: $font-size-medium-x;
      color: $color-text;
    }
  }
}
</style>
