import * as types from './mutation-types'
export const caclPath = function ({ commit }) {
  let route = ['5F021E830AD9C82A', '76D8E31D00B556B1', '7E6158DBBCA8C197', '80F692623C6AC9D8', 'F2C2C6C5BA7E96FA', 'E471383EC54B174B', '5F021E830AD9C82A']
  commit(types.INIT_EDGE_STATE)
  commit(types.CALC_EDEG_STATE, route)
}
