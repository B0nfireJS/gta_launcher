<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <img src="../../../public/img/logo.svg" alt="logo">
    </div>
    <ul class="sidebar__list">

      <router-link
        v-for="link in links"
        :key="link.url"
        :to="link.url"
      >
        <li class="sidebar__list-item">
          <a href="#">
            {{link.url}}
            <!-- <img :src="require(item.img)"> -->
            <!-- <img :src="link.path" alt=""> -->
          </a>
        </li>
      </router-link>

    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {path: '../../../public/img/server1.png', url: '/project1'},
      {path: '../../../public/img/server2.png', url: '#'},
      {path: '../../../public/img/server3.png', url: '#'},
      {path: '../../../public/img/server4.png', url: '#'},
    ]
  })
}
</script>

<style lang="scss">

.sidebar{
  background: #232328;
  width: 70px;
  display: flex;
  flex-direction: column;
  // align-items: center;

  &__logo{
    margin: 0 auto;
    margin-top: 14px;
  }

  &__list-item{
    list-style: none;
  }
}

</style>