<template>
  <transition name="fold">
    <div tag="div" class="drawer" v-show="showFlag">
      <div class="title">
        <div class="fold" @click="hide">
          <svg t="1583145136312" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4393" width="18" height="18"><path d="M151.467 204.373a34.133 34.133 0 1 1 48.213-48.213l331.947 331.947a34.133 34.133 0 0 1 0 48.213L199.68 867.84a34.133 34.133 0 1 1-48.213-48.213L459.093 512z m341.333 0a34.133 34.133 0 0 1 48.213-48.213L872.96 488.107a34.133 34.133 0 0 1 0 48.213L541.013 868.267a34.133 34.133 0 0 1-48.213-48.214L800.427 512z" p-id="4394" fill="#8a8a8a"></path></svg>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    hide () {
      this.showFlag = false
    },
    show () {
      this.showFlag = true
    }
  }
}
</script>
<style lang="scss" scoped>
.drawer {
  box-sizing: border-box;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 20px;
  width: 24%;
  box-shadow: 0 1px 18px -1px rgba(28,31,33,.1);
  background-color: white;
  .title {
    position: absolute;
    .fold {
      display: inline-block;
      cursor: pointer;
    }
  }
  &.fold-enter-active, &.fold-leave-active {
    transition:  all .4s ease;
  }
  &.fold-enter, &.fold-leave-to {
    transform: translateX(100%);
  }
}
</style>
