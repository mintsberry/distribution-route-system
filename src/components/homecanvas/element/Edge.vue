<template>
  <g>
    <defs>
      <linearGradient id="ant" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#a1c4fd" />
        <stop offset="100%" stop-color="#c2e9fb" />
      </linearGradient>
    </defs>
    <line :x1="node1.x" :y1="node1.y" :x2="node2.x" :y2="node2.y"
      class="line"
      :class="[edgeStatus, {active}]"
    />
    <line :x1="node1.x" :y1="node1.y" :x2="node2.x" :y2="node2.y"
      @mouseover="activeLine"
      @mouseout="inactiveLine"
      @contextmenu.prevent="removeEdge"
      @click.stop=""
      style="stroke-width: 16; stroke: transparent; cursor: pointer;"/>
  </g>
</template>
<script>
import { mapGetters } from 'vuex'
import { edgeState } from '../../../common/js/config'
export default {
  props: {
    edge: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      active: false,
      node1: null,
      node2: null
    }
  },
  computed: {
    edgeStatus () {
      console.log(this.edge.state)
      if (!this.edge.state || this.edge.status === edgeState.normal) {
        return false
      } else if (this.edge.state === edgeState.positive) {
        return {
          move: 'true',
          move_positive: 'true'
        }
      } else if (this.edge.state === edgeState.opposite) {
        return {
          move: 'true',
          'move_opposite': 'true'
        }
      }
      return false
    },
    ...mapGetters(['getNodeById'])
  },
  created () {
    this.getLinkPos()
  },
  methods: {
    getLinkPos () {
      this.node1 = this.getNodeById(this.edge.node1)
      this.node2 = this.getNodeById(this.edge.node2)
    },
    removeEdge () {
      this.$emit('removeEdge', this.edge.id)
    },
    activeLine () {
      this.active = true
    },
    inactiveLine () {
      this.active = false
    }
  }
}
</script>
<style lang="scss" scoped>
.line {
  stroke:rgba(96,98,102, .4);
  stroke-width:2;
  padding: -4px;
  transition: all linear .1s;
  &.active {
    stroke-width: 4;
    // stroke: url(#ant);
    // stroke-dasharray: 20 5;
    // stroke-dashoffset: 25px;
    // animation: grown 2s infinite linear;
  }
  &.move {
    stroke: url(#ant);
    stroke-dasharray: 20 5;
    animation: grown 2s infinite linear;
    &.move_opposite {
      stroke-dashoffset: -25px;
    }
    &.move_positive {
      stroke-dashoffset: 25px;
    }
  }
}
@keyframes grown {
  to{
    stroke-dashoffset: 0px;
  }
}
</style>
