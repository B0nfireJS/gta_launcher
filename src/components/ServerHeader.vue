<template>
  <div class="server-header">

    <ul class="server-header__list">
      <li class="server-header__list-item">
        <img src="../../public/img/server-header/time.svg" alt="time" class="server-header__icon">
        <span class="server-header__text">Время в игре:</span>
        <span class="server-header__count">{{time}}</span>
      </li>

      <li class="server-header__list-item">
        <img src="../../public/img/server-header/last-launch.svg" alt="last-launch" class="server-header__icon">
        <span class="server-header__text">Последний запуск</span>
        <span class="server-header__count">{{date}}</span>
      </li>

      <li class="server-header__list-item">
        <img src="../../public/img/server-header/achives.svg" alt="achives" class="server-header__icon">
        <span class="server-header__text">Достижения</span>
        <span class="server-header__count">{{achives}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    time: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    },
    achives: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss">
.server-header{
  background: #1F1F26;
  // padding: 15px 0 15px 30px;
  &__list{
    display: flex;
    padding: 0;
    list-style: none;
    padding: 15px 0 15px 30px;
    margin: 0;
  }
  &__list-item{
    margin-right: 20px;
    display: flex;
    align-items: center;
  }
  &__icon{
    margin-right: 5px;
  }
  &__text{
    text-transform: uppercase;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    margin-right: 5px;
  }
  &__count{
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
  }
}
</style>