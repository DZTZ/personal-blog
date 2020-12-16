<template>
  <div class="home">
    <transition name="fade">
      <div v-if="is_show">
        <div class="synopsis">
          <div class="box">
            <div class="title">
              <span class="block"></span>
              <h1>偷代码的贼<span>.</span></h1>
            </div>
            <div class="role">
              <div class="block"></div>
              <p>热爱前端开发</p>
            </div>
          </div>
          <!-- 背景动画-->
          <vue-particles
            color="#58DDE3"
            linesColor="#58DDE3"
            shapeType="triangle"
            hoverMode="grab"
            clickMode="repulse"
            :lineOpacity="0.7"
            :particleOpacity="0.7"
            class="bg"
          />
        </div>
        <div class="main-content ">
          阿斯蒂芬
        </div>
      </div>
    </transition>

    <!-- 入场动画-->
    <transition name = "fade">
      <EnterAnimationTwo v-if="is_show_two"/>
    </transition>
    <EnterAnimationOne v-if="is_show_one"/>
  </div>
</template>

<script>
import EnterAnimationOne from "@/components/enter-animation.vue";
import EnterAnimationTwo from "@/components/enter-animation-two.vue";

export default {
  name: "Home",
  components: {
    EnterAnimationOne,
    EnterAnimationTwo
  },
  data() {
    return {
      is_show: false,
      is_show_one: false,
      is_show_two:true
    };
  },
  created() {
    setTimeout(()=>{
      this.is_show_two = false;//第一个动画消失
    },2000)
    setTimeout(()=>{
      this.is_show_one = true;//第二个动画开始
    },2100)
    setTimeout(()=>{
      this.is_show = true;//主要内容显示
    },2500)
    setTimeout(()=>{
      this.is_show_one = false;//第二个动画消失
    },3000)
  },
  methods: {
    bianhua() {
      this.is_show = !this.is_show;
    }
  }
};
</script>
<style scoped lang="less">
.bg {
  width: 100%;
  height: 20vh;
  position: absolute;
  top: 0;
  left: 0;
}
.synopsis {
  width: 100%;
  height: 20vh;
  background: url("~@/assets/img/bg.png") center;
  background-size: 50%;
}
@media screen and (max-width: 690px) {
  .synopsis {
    background-position-y: 0;
    background-size: 81%;
  }
}
.synopsis .box {
  width: 240px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;

  .title {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    letter-spacing: 5px;

    .block {
      width: 0%;
      height: inherit;
      background: #42d3d4;
      position: absolute;
      animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
      display: flex;
    }
  }
}

.synopsis .box .title h1 {
  font-family: "Poppins";
  color: #fff;
  font-weight: 800;
  font-size: 2rem;
  animation: mainFadeIn 2s forwards;
  animation-delay: 1.6s;
  opacity: 0;
}

.synopsis .box .title h1 span {
  color: #ffb510;
}

.synopsis .box .role {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: -10px;
}

.synopsis .box .role .block {
  width: 0%;
  height: inherit;
  background: #e91e63;
  position: absolute;
  animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
  animation-delay: 2s;
  display: flex;
}

.synopsis .box .role p {
  animation: secFadeIn 2s forwards;
  animation-delay: 3.2s;
  opacity: 0;
  font-weight: 400;
  font-family: "Lato";
  color: #ffffff;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 5px;
}

@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  opacity: 0
}

@media screen and (max-width: 768px) {
  .title h1 {
    font-size: 1.5rem !important;
  }
}

.main-content{
  margin: auto;
  max-width: 736px;
}
</style>
