<template>
  <div>
    <header>
      <app-nav />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>

import AppNav from './components/layout/AppNav'

export default {
  name: 'App',
  components: {
    AppNav,
  }
}
</script>

<style>
  main {
    margin-top: 40px;
  }
</style>
