<template>
  <div class="main-layout">
    <Sidebar />
    <div class="main-layout__content-container">
      <Navbar />

      <main>
        <div class="content">
          <router-view />
        </div>
      </main>
      
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/app/Sidebar'
import Navbar from '@/components/app/Navbar'

export default {
  components: {
    Sidebar,
    Navbar,
  }
}
</script>