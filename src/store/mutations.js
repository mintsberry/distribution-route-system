import * as types from './mutation-types'
import { uuid } from '../common/js/util'
import { nodeType, edgeState } from '../common/js/config'
const mutations = {
  [types.SET_SELECTNODETYPE] (state, type) {
    state.selectNodeType = type
  },
  [types.SET_SELECTNODE] (state, node) {
    state.selectNode = node
  },
  [types.ADD_NODE] (state, params) {
    params.id = uuid(16, 16)
    if (params.nodeType === nodeType.point) {
      params.params = {
        quantity: 0
      }
    } else if (params.nodeType === nodeType.center) {
      params.params = {
        quantity: 0,
        longest: 0,
        speed: 10,
        unloading: 5
      }
    }
    state.data.nodes.push(params)
    this.commit('SET_SELECTNODE', params)
  },
  [types.ADD_EDGE] (state, params) {
    let falg = state.data.edges.some((item, i) => {
      if (item.node1 === params.node1 && item.node2 === params.node2) return true
      if (item.node1 === params.node2 && item.node2 === params.node1) return true
    })
    if (!falg) {
      params.id = uuid(16, 16)
      state.data.edges.push(params)
    }
  },
  [types.ADD_VEHICLE] (state) {
    state.selectNode.params.vehicle.push({
      capacity: null,
      num: null
    })
  },
  [types.DEL_VEHICLE] (state, index) {
    state.selectNode.params.vehicle.splice(index, 1)
  },
  [types.SET_NODEPOSITION] (state, params) {
    let node = state.data.nodes.find(node => node.id === params.id)
    node.x = params.x
    node.y = params.y
  },
  [types.DEL_EDGE] (state, id) {
    state.data.edges.some((item, i) => {
      if (item.id === id) {
        state.data.edges.splice(i, 1)
        return true
      }
    })
  },
  [types.DEL_NODE] (state, id) {
    state.data.nodes.some((item, i) => {
      if (item.id === id) {
        state.data.nodes.splice(i, 1)
        return true
      }
    })
    for (let i = 0; i < state.data.edges.length; i++) {
      if (state.data.edges[i].node1 === id || state.data.edges[i].node2 === id) {
        state.data.edges.splice(i, 1)
        i--
      }
    }
    state.selectNode = null
  },
  [types.INIT_EDGE_STATE] (state) {
    state.data.edges.forEach(element => {
      element.state = edgeState.normal
    })
  },
  [types.CALC_EDEG_STATE] (state, routes) {
    let edges = state.data.edges
    for (let i = 0; i < routes.length - 1; i++) {
      let frontRoute = routes[i]
      let afterRoute = routes[i + 1]
      edges.forEach(el => {
        console.log(el)
        if (frontRoute === el.node1 && afterRoute === el.node2) {
          el.state = edgeState.positive
        } else if (frontRoute === el.node2 && afterRoute === el.node1) {
          el.state = edgeState.opposite
        }
      })
    }
  }
}
export default mutations
