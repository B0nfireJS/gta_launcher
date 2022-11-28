<template>
  <div class="server">

    <div class="server__info">
      <h3 class="server__name">{{serverName}}</h3>
      <p class="server__description">{{serverDesc}}</p>
    </div>

  </div>
</template>

<script>

export default {
  props: {
    serverName: {
      type: String,
      default: ""
    },
    serverDesc: {
      type: String,
      default: ""
    }
  },
};
</script>

<style lang="scss">
.server{
  background: #1F1F26;
  &__info{
    margin: 30px 0 36px 30px;
  }
  &__name{
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #fff;
  }
  &__description{
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
  }
}
</style>