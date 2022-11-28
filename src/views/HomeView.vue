<template>
  <div class="home">
    <div class="home__header">
      <span class="home__about">О нас</span>
      <h2 class="home__project-name">Impossible RP</h2>
      <p class="home__project-description">
        Проект, с которого начиналась история многих игроков,<br>проект на который хочется вернуться Impossible-RP.ru!
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "HomeView",
};
</script>

<style lang="scss">
.home{
  &__header{
    padding: 167px 0 38px 30px;
    background-image: url('../../public/img/home-bg.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
  }
  &__about{
    background-position-y: center;
    padding-left: 23px;
    font-weight: 400;
    font-size: 13px;
    line-height: 12px;
    text-transform: uppercase;
    color: #FECD20;
  }
  &__about::before{
    display: block;
    content: "";
    width: 16px;
    height: 1px;
    background: #FECD20;
    background-position-y: center;
    position: absolute;
    top: 221px;
  }
  &__project-name{
    font-weight: 400;
    font-size: 21px;
    line-height: 25px;
    color: #fff;
  }
  &__project-description{
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    opacity: 0.6;
  }
}
</style>
