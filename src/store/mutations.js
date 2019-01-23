export default {
  toggleLoading (state) {
    state.loading = !state.loading;
  },
  toggleMaintenance (state) {
    state.maintenance.visible = !state.maintenance.visible;
  },
  setMaintenanceMessage (state, message) {
      state.maintenance.message = message;
  }
}