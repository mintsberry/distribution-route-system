export const selectNodeType = state => state.selectNodeType
export const selectedNode = state => state.selectNode
export const nodes = state => state.data.nodes
export const getNodeById = state => id => {
  return state.data.nodes.find(node => node.id === id)
}
export const edges = state => state.data.edges
