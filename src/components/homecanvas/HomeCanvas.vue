<template>
  <div class="home-canvas">
    <svg
      width="100%" height="100%"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      @mousemove="moveDispatcher"
      @mouseup="stopHandle"
      @click="clickCanvas"
      @contextmenu.prevent=""
    >
      <g
      >
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <Edge v-for="item in edges" :edge="item" :key="item.id"
          @removeEdge="removeEdge"
        />
        <line v-if="linkPos && currentEvent === 1" :x1="linkPos.x1" :y1="linkPos.y1" :x2="linkPos.x2" :y2="linkPos.y2" style="stroke:rgb(99,99,99);stroke-width:3"/>
        <Node v-for="item in nodes" :key="item.id" :node="item" filter="url(#shadow)"
          @moveNode="moveNode"
          @removeNode="removeNode"
          @linkNode='linkNode'
          @cancel='stopHandle'
          @clickNode='clickNode'
        />
      </g>
    </svg>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import Node from './element/Node'
import Edge from './element/Edge'
import { nodeType } from '../../common/js/config'
const EVENT = {
  moveNode: 0,
  linkNode: 1
}
export default {
  components: {
    Node,
    Edge
  },
  computed: {
    ...mapGetters(['selectNodeType', 'getNodeById', 'nodes', 'edges'])
  },
  data () {
    return {
      currentNodeId: null,
      currentEvent: null,
      closeNode: {},
      linkPos: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0
      },
      diffEl: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    clickCanvas (event) {
      if (this.currentEvent != null) {
        return null
      }
      if (this.selectNodeType !== nodeType.void) {
        const params = Object.assign({}, {
          nodeType: this.selectNodeType,
          x: event.offsetX,
          y: event.offsetY
        })
        this.addNode(params)
      }
    },
    moveDispatcher (event) {
      if (this.currentEvent === null) {
        return null
      }
      switch (this.currentEvent) {
        case EVENT.moveNode:
          this.dragNode(event)
          break
        case EVENT.linkNode:
          this.dragLink(event)
          break
      }
    },
    moveNode (node, event) {
      let fNode = this.getNodeById(node.id)
      this.diffEl = {
        x: event.offsetX - fNode.x,
        y: event.offsetY - fNode.y
      }
      this.currentNodeId = node.id
      this.currentEvent = EVENT.moveNode
    },
    dragNode (event) {
      let params = {
        id: this.currentNodeId,
        x: event.offsetX - this.diffEl.x,
        y: event.offsetY - this.diffEl.y
      }
      this.setNodePos(params)
    },
    linkNode (node) {
      this.currentNodeId = node.id
      this.currentEvent = EVENT.linkNode
    },
    dragLink (event) {
      let fNode = this.getNodeById(this.currentNodeId)
      this.closeNode = {}
      this.nodes.forEach(el => {
        if (el.id === this.currentNodeId) return null
        if (el.x - 20 > event.offsetX || el.x + 20 < event.offsetX) return null
        if (el.y - 20 > event.offsetY || el.y + 20 < event.offsetY) return null
        this.closeNode = el
      })
      this.linkPos = {
        x1: fNode.x,
        y1: fNode.y,
        x2: this.closeNode.x || event.offsetX,
        y2: this.closeNode.y || event.offsetY
      }
    },
    removeNode (node) {
      this.removeNode(node.id)
    },
    removeEdge (edge) {
      this.removeEdge(edge.id)
    },
    clickNode (node) {
      this.selectNode(node)
    },
    stopHandle () {
      if (this.currentEvent === EVENT.linkNode) {
        if (this.closeNode.x && this.closeNode.y) {
          this.addEdge({

            node1: this.currentNodeId,
            node2: this.closeNode.id,
            distance: 100
          })
        }
      }
      setTimeout(() => {
        this.currentNodeId = null
        this.currentEvent = null
      }, 50)
    },
    ...mapMutations({
      addNode: 'ADD_NODE',
      addEdge: 'ADD_EDGE',
      removeNode: 'DEL_NODE',
      setNodePos: 'SET_NODEPOSITION',
      removeEdge: 'DEL_EDGE',
      selectNode: 'SET_SELECTNODE'
    })
  }
}
</script>
<style lang="scss" scoped>
@import "../../common/scss/variable.scss";
.home-canvas {
  box-sizing: border-box;
  margin: 24px;
  height: calc(100% - 48px);
  background-color: white;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid $color-border;
  border-radius: 4px;
}
</style>
