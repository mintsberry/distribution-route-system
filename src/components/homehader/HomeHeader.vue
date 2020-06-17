<template>
  <div class="home-header">
    <div class="brand">
      <img src="./logo.png" alt="" class="logo">
      <span class="title">Path</span>
    </div>
    <div class="option">
      <div class="config">
        <svg t="1580375706191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3714" width="48" height="48"><path d="M665.6 409.6h-204.8c-7.68 0-12.8-5.12-12.8-12.8s5.12-12.8 12.8-12.8h204.8c7.68 0 12.8 5.12 12.8 12.8s-5.12 12.8-12.8 12.8zM665.6 524.8h-204.8c-7.68 0-12.8-5.12-12.8-12.8s5.12-12.8 12.8-12.8h204.8c7.68 0 12.8 5.12 12.8 12.8s-5.12 12.8-12.8 12.8zM665.6 640h-204.8c-7.68 0-12.8-5.12-12.8-12.8s5.12-12.8 12.8-12.8h204.8c7.68 0 12.8 5.12 12.8 12.8s-5.12 12.8-12.8 12.8z" p-id="3715"></path><path d="M358.4 409.6c-2.56 0-7.68-2.56-10.24-5.12-2.56-2.56-2.56-5.12-2.56-7.68 0-2.56 0-7.68 2.56-10.24 5.12-5.12 12.8-5.12 17.92 0 2.56 2.56 5.12 5.12 5.12 10.24 0 2.56-2.56 7.68-5.12 7.68 0 2.56-5.12 5.12-7.68 5.12zM358.4 524.8c-2.56 0-7.68-2.56-10.24-5.12-2.56-2.56-2.56-5.12-2.56-7.68 0-2.56 0-7.68 2.56-10.24 5.12-5.12 12.8-5.12 17.92 0 2.56 2.56 5.12 5.12 5.12 10.24 0 2.56-2.56 7.68-5.12 7.68 0 2.56-5.12 5.12-7.68 5.12zM358.4 640c-2.56 0-7.68-2.56-10.24-5.12-2.56-2.56-2.56-5.12-2.56-7.68 0-2.56 0-7.68 2.56-10.24 5.12-5.12 12.8-5.12 17.92 0 2.56 2.56 5.12 5.12 5.12 10.24 0 2.56-2.56 7.68-5.12 7.68 0 2.56-5.12 5.12-7.68 5.12z" p-id="3716"></path></svg>
        <span>全局配置</span>
      </div>
    </div>
    <div class="func">
      <div class="btn" @click="$emit('clickCacl')">
        计算
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
.home-header {
  display: flex;
  height: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  border-bottom: 1px solid $color-border;
  .brand {
    height: 100%;
    display: flex;
    align-items: center;
    // justify-content: center;
    .logo {
      margin-right: 8px;
    }
    .title {
      font-size: $font-size-medium-x;
      color: $color-text;
    }
  }
  .option {
    margin: 0 auto;
    height: 100%;
    font-size: 1.4rem;
    .config {
      display: flex;
      height: 100%;
      align-items: center;
    }
  }
  .func {
    display: flex;
    align-items: center;
    .btn {
      display: inline-block;
      position: relative;
      border-radius: 5px;
      letter-spacing: 1px;
      font-size: 14px;
      text-align: center;
      padding: 10px 15px;
      color: white;
      background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
      box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
      cursor: pointer;
      &:hover {
        background-image: linear-gradient(0deg, #89f7fe 0%, #66a6ff 100%);
      }
      &:active {
        transform: translateY(1px);
      }
    }
  }
}
</style>
