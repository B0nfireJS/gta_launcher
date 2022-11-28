<template>
  <div class="play-panel">
    <span class="play-panel__header">
       Загружаем файлы игры
    </span>
    <div class="play-panel__row">
      <div class="play-panel__downloader">
        <div class="play-panel__progress-bar">
          <div class="play-panel__progress-bar-bg">
            <div class="play-panel__progress-bar-line"></div>
          </div>
        </div>
        <div class="play-panel__downloader-counter">
          <span class="play-panel__download-percent">{{percent}}</span>
          <span class="play-panel__download-progress">({{downloadProgress}} / {{fileWeight}})</span>
        </div>
      </div>
      <button class="play-panel__button-blue">Играть</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    percent: {
      type: String,
      default: ""
    },
    downloadProgress: {
      type: String,
      default: ""
    },
    fileWeight: {
      type: String,
      default: ""
    }
  },
};
</script>

<style lang="scss">
.play-panel{
  background: #1F1F26;
  margin-left: 30px;
  &__header{
    margin-bottom: 10px;
  }
  &__row{
    display: flex;
  }
  &__downloader{
    display: flex;
  }

  &__progress-bar-bg{
    background-color: #ccc;
    height: 20px;
    width: 100%;
  }
  &__progress-bar-line{
    background-color: #48484B;
  }
}
</style>