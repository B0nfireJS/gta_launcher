<template>
  <div class="navbar">
    <ul class="navbar__links">
      <router-link
        v-for="link in links"
        :key="link.url"
        :to="link.url"
        class="navbar__link active"
        :class ="{active: isActive}"
        @click="isActive" 
      >
        <li class="navbar__item">
          <a class="navbar__link" href="#">
            {{link.title}}
          </a>
        </li>
      </router-link>
    </ul>
    <div class="navbar__user">
      <img src="../../../public/img/user-avatar.png" alt="" class="navbar__user-avatar">
      <a href="#" class="navbar__user-name">webm0fe</a>
      <img src="../../../public/img/arrow-down.svg" alt="" class="navbar__user__etc">
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: 'Главная',
        url: '/'
      },
      {
        title: 'Новости',
        url: '/news'
      },
      {
        title: 'Поддержка',
        url: '/support'
      },
      {
        title: 'Сайт',
        url: '/site'
      },
    ],
    isActive: false,
  })
}
</script>

<style lang="scss">

.navbar{
  background: #1F1F26;
  max-height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #4c4c51;

  &__links{
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }
  &__item{
    list-style: none;
    margin-right: 20px;
    text-transform: uppercase;
  }
  &__link{
    text-decoration: none;
    color: #a5a5a8;
  }
  &__user{
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-left: 1px solid #4c4c51;
  }
  &__user-avatar{
    margin-right: 10px;
  }
  &__user-name{
    margin-right: 4px;
    color: #fff;
    text-decoration: none;
  }
}
.active{
    color: yellow;
  }

</style>