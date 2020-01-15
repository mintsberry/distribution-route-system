<template>
  <div class="home-sider">
    <div class="sider-item">
      <div class="title">结点</div>
      <div class="node-item">
        <img src="./send.png" alt="" width="48">
        <span class="name">配送中心</span>
      </div>
      <div class="node-item">
        <img src="./receive.png" alt="" width="48">
        <span class="name">收货点</span>
      </div>
    </div>
    <div class="sider-item">
      <div class="title">信息</div>
      <div class="content">
        <p>拖动画布，拖动空白处</p>
        <p>放缩画布，滚动鼠标滚轮</p>
        <p>建立联系，短按节点拖动连线连接</p>
        <p>删除节点，右键删除</p>
        <p>增加节点，单击或拖动左侧节点实例</p>
        <p>删除关系，关系连线上点右键</p>
        <p>节点信息，单击节点</p>
        <p>拖动节点，长按节点</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
.home-sider {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 24px;
  border-right: 1px solid $color-border;
  .sider-item {
    font-size: $font-size-small;
    color: $color-text-l;
    margin-bottom: 36px;
    .title {
      font-weight: bold;
      margin-bottom: 24px;
    }
    .node-item {
      margin-bottom: 16px;
      .name {
        margin-left: 8px;
        line-height: 48px;
        font-size: $font-size-medium;
        vertical-align: top;
      }
    }
    .content {
      font-size: $font-size-medium;
    }
  }
}
</style>
