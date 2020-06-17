<template>
  <div class="home-sider">
    <div class="sider-item">
      <div class="title">结点</div>
      <div class="node-item" :class = "{active : selectNodeType === nodeType.center}" @click="selectNode(nodeType.center)">
        <img src="./send.png" alt="" width="48">
        <span class="name">配送中心</span>
      </div>
      <div class="node-item" :class = "{active : selectNodeType === nodeType.point}" @click="selectNode(nodeType.point)">
        <img src="./receive.png" alt="" width="48">
        <span class="name">收货点</span>
      </div>
      <div class="node-item" :class = "{active : selectNodeType === nodeType.hub}" @click="selectNode(nodeType.hub)">
        <img src="./hub.png" alt="" width="48">
        <span class="name">交通枢纽</span>
      </div>
    </div>
    <div class="sider-item info">
      <div class="title">信息</div>
      <div class="content" v-if="selectedNode === null">
        <p>拖动画布，拖动空白处</p>
        <p>放缩画布，滚动鼠标滚轮</p>
        <p>建立联系，短按节点拖动连线连接</p>
        <p>删除节点，右键删除</p>
        <p>增加节点，单击或拖动左侧节点实例</p>
        <p>删除关系，关系连线上点右键</p>
        <p>节点信息，单击节点</p>
        <p>拖动节点，长按节点</p>
      </div>
      <div class="content" v-else-if="selectedNode.nodeType === 1" ref="content">
        <p>节点类型：配送中心</p>
        <div class="form-item">
          <label>配送货物：</label><input type="number" class="num"  v-model="selectedNode.params.quantity" step="0.01">
          <div class="unit">吨</div>
        </div>
        <div class="form-item">
          <label>里程限制：</label><input type="number" class="num"  v-model="selectedNode.params.longest" step="0.01">
          <div class="unit">千米</div>
        </div>
        <div class="form-item">
          <label>装卸时间：</label><input type="number" class="num"  v-model="selectedNode.params.unloading" step="0.01">
          <div class="unit">小时</div>
        </div>
        <div class="form-item">
          <label>车辆速度：</label><input type="number" class="num"  v-model="selectedNode.params.speed" step="0.01">
          <div class="unit">千米/时</div>
        </div>
        <div class="form-item car-info">
          <label>车辆信息：</label>
          <div class="detail" v-for="(item, index) in selectedNode.params.vehicle" :key="index">
            <input type="number" class="num" placeholder="承载量" v-model="item.capacity"  step="0.01"><div class="unit">吨</div>
            <input type="number" class="num" placeholder="数量" v-model="item.num"  step="0.01"><div class="unit">辆</div>
            <span class="del" @click="delVehicle(index)">
              <svg t="1581679244121" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3353" width="16" height="16"><path d="M874.971429 149.942857C776.228571 54.857143 648.228571 0 512.914286 0S245.942857 54.857143 150.857143 149.942857c-201.142857 201.142857-201.142857 522.971429 0 724.114286C245.942857 969.142857 377.6 1024 512.914286 1024s266.971429-54.857143 362.057143-149.942857c201.142857-201.142857 201.142857-522.971429 0-724.114286m-51.2 672.914286C739.657143 906.971429 629.942857 950.857143 512.914286 950.857143s-226.742857-43.885714-310.857143-128c-171.885714-171.885714-171.885714-449.828571 0-621.714286C286.171429 117.028571 395.885714 73.142857 512.914286 73.142857s226.742857 43.885714 310.857143 128c171.885714 171.885714 171.885714 449.828571 0 621.714286" p-id="3354" fill="#8a8a8a"></path><path d="M772.571429 475.428571H253.257143c-21.942857 0-36.571429 14.628571-36.571429 36.571429 0 10.971429 3.657143 18.285714 10.971429 25.6s14.628571 10.971429 25.6 10.971429H768.914286c21.942857 0 36.571429-14.628571 36.571428-36.571429s-14.628571-36.571429-32.914285-36.571429" p-id="3355" fill="#8a8a8a"></path></svg>
            </span>
          </div>
          <button class="add-btn" @click="clickAdd">+</button>
        </div>
      </div>
      <div class="content" v-else-if="selectedNode.nodeType === 2">
          <p>节点类型：收货点</p>
          <label>接货数量：</label><input type="number" class="num"  v-model="selectedNode.params.quantity" step="0.01"><div class="unit">吨</div>
          <!-- :value="selectedNode.params.quantity" -->
      </div>
      <div class="content" v-else-if="selectedNode.nodeType === 3">
        <p>节点类型: 交通枢纽</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import { nodeType } from '../../common/js/config'
export default {
  data () {
    return {
      nodeType
    }
  },
  computed: {
    ...mapGetters([
      'selectedNode',
      'selectNodeType'
    ])
  },
  methods: {
    selectNode (type) {
      if (this.selectNodeType === type) {
        this.setSelectNodeType(nodeType.void)
      } else {
        this.setSelectNodeType(type)
      }
    },
    clickAdd () {
      this.addVehicle()
      setTimeout(() => {
        let content = this.$refs.content
        content.scrollTop = content.scrollHeight
      }, 50)
    },
    ...mapMutations({
      setSelectNodeType: 'SET_SELECTNODETYPE',
      addVehicle: 'ADD_VEHICLE',
      delVehicle: 'DEL_VEHICLE'
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
.home-sider {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 24px 0 0 0;
  border-right: 1px solid $color-border;
  .sider-item {
    font-size: $font-size-small;
    color: $color-text-l;
    margin-bottom: 36px;
    .title {
      margin-bottom: 24px;
      padding-left: 24px;
      font-size: $font-size-medium;
    }
    .node-item {
      color: $color-text;
      box-sizing: border-box;
      margin-bottom: 8px;
      padding: 8px 0 8px 24px;
      cursor: pointer;
      .name {
        margin-left: 8px;
        line-height: 48px;
        font-size: $font-size-medium;
        vertical-align: top;
      }
      &:hover{
        padding-left: 24px;
        background-color: rgb(236, 245, 255);
      }
      &.active {
        border-left: 4px solid $color-theme;
        padding-left: 20px;
        background-color: rgb(236, 245, 255);
      }
    }
    .content {
      position: absolute;
      top: 340px;
      bottom: 20px;
      width: 236px;
      overflow: hidden;
      font-size: $font-size-medium;
      color: $color-text;
      scroll-behavior:smooth;
      // padding: 0 24px;
      padding-left: 24px;
      &:hover {
        overflow-y: auto
      }
      &::-webkit-scrollbar {
        width: 4px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(144,147,153,.3);
      }
      &::-webkit-scrollbar-track {
        box-shadow : inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #ededed;
        border-radius: 10px;
      }
      .form-item {
        margin-bottom: 16px;
      }
      .num {
        padding: 0;
        width: 64px;
        box-sizing: border-box;
        border: 1px solid #dcdfe6;
        border-radius: 4px 0 0 4px;
        line-height: 24px;
        text-align: center;
        &::placeholder {
          color: #aaa;
        }
      }
      .unit {
        display: inline-block;
        box-sizing: content-box;
        padding: 0 4px;
        height: 24px;
        line-height: 24px;
        background-color: #f5f7fa;
        color: #909399;
        vertical-align: top;
        border: 1px solid #dcdfe6;
        border-left: 0px;
        border-radius: 0 4px 4px 0;
      }
      .del {
        display: inline-block;
        margin-left: 8px;
        line-height: 26px;
        vertical-align: middle;
        cursor: pointer;
      }
      .car-info {
        label {
          display: block;
          margin-bottom: 8px;
        }
        .detail {
          margin-bottom: 8px;
          .num:nth-child(3) {
            margin-left: 16px;
          }
        }
        .add-btn {
          padding: 12px 20px;
          width: 210px;
          line-height: 14px;
          color: #fff;
          border: 1px solid #409eff;
          border-radius: 4px;
          outline: none;
          background-color: #409eff;
          cursor: pointer;
          &:active {
            background: #3a8ee6;
            border-color: #3a8ee6;
          }
        }
      }
    }
  }
}
</style>
