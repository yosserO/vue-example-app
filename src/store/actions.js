export default {
  showMaintenance({commit}, message) {
    commit('toggleMaintenance')
    commit('setMaintenanceMessage', message)
  }
}