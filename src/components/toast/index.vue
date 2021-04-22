<template>
  <div class="wrap" v-if="showWrap" :class="showContent ? 'fadein' : 'fadeout'">
    {{ text }}
  </div>
</template>

<style scoped>
.wrap {
  position: fixed;
  left: 50%;
  top: 80%;
  background: rgba(0, 0, 0, 0.75);
  padding: 10px 40px;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  color: #fff;
}
.fadein {
  animation: animate_fadeIn 0.25s;
}
.fadeout {
  animation: animate_fadeOut 0.25s;
  opacity: 0;
}
@keyframes animate_fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animate_fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>