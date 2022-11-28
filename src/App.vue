<template>
  <div class="app" id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  },
  components: {
    MainLayout,
  }
}
</script>

<style lang="scss">
@import 'assets/normalize.css';
@import 'assets/style.scss';
</style>
