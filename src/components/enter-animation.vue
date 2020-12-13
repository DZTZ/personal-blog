<template>
  <div class="hello">
    <div class="upper-part"></div>
    <div class="next-part "></div>
  </div>
</template>

<script>
export default {
  name: "EnterAnimation"
};
</script>

<style scoped lang="less">
.upper-part,
.next-part {
  width: 100%;
  background: #000000;
  position: absolute;
  left: 0;
}
.upper-part {
  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  top: 0;
  animation-duration: 1s;
}
.next-part {
  animation: bounce2; /* referring directly to the animation's @keyframe declaration */
  bottom: 0;
  animation-duration: 1s;
}
@keyframes bounce {
  from {
    height: 50vh;
  }
  to {
    height: 0;
  }
}
@keyframes bounce2 {
  from {
    height: 50vh;
  }
  to {
    height: 0;
  }
}
</style>
