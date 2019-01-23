<template>
  <b-navbar
    toggleable="md"
    type="dark"
    variant="info"
  >
    <b-navbar-brand href="#">
      PicStore
    </b-navbar-brand>

    <b-collapse
      id="nav_collapse"
      is-nav
    >
      <b-navbar-nav class="ml-auto" />
    </b-collapse>
  </b-navbar>
</template>

<script>
  export default {
    name: "AppNav"
  }
</script>

<style scoped>

</style>