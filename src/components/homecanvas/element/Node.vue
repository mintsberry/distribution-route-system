<template>
  <image width="48" height="48"
    :x="node.x - 48 / 2"
    :y="node.y - 48 / 2"
    :xlink:href="iconStyle"
    @mousedown.stop="pressNode"
    @mouseup.stop="releaseNode"
    @mouseout.stop="outNode"
    @contextmenu.prevent="removeNode"
    @click.stop="clickNode"
    ref="el"
    class="node"
  />
</template>
<script>
import { nodeType } from '../../../common/js/config'
export default {
  props: {
    node: {
      type: Object,
      default: null,
      evnet: null,
      time: 0
    }
  },
  computed: {
    iconStyle () {
      if (this.node.nodeType === nodeType.center) {
        return require('../../homesider/send.png')
      } else if (this.node.nodeType === nodeType.point) {
        return require('../../homesider/receive.png')
      } else if (this.node.nodeType === nodeType.hub) {
        return require('../../homesider/hub.png')
      }
      return null
    }
  },
  methods: {
    pressNode (event) {
      if (event.which === 1) {
        this.time = new Date().getTime()
        this.timer = setTimeout(() => {
          this.$refs.el.style.cursor = 'move'
          this.$emit('moveNode', this.node, event)
        }, 300)
      }
    },
    outNode (event) {
      clearTimeout(this.timer)
      this.$refs.el.style.cursor = ''
      if (new Date().getTime() - this.time < 300) {
        this.$emit('linkNode', this.node)
      }
    },
    removeNode (event) {
      this.$emit('removeNode', this.node.id)
    },
    releaseNode (event) {
      clearTimeout(this.timer)
      this.$emit('cancel')
      this.time = 0
      this.$refs.el.style.cursor = ''
    },
    clickNode () {
      this.$emit('clickNode', this.node)
    }
  }
}
</script>
<style lang="scss" scoped>
.node {
  cursor: pointer;
}
</style>
