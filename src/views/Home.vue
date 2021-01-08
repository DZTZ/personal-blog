<template>
  <div class="home">
    <transition name="fade">
      <div v-if="is_show">
        <div class="synopsis">
          <div class="box">
            <div class="title">
              <span class="block"></span>
              <h1>青青虾条<span>.</span></h1>
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
        <!-- 主要内容 开始 -->
        <main class="main-content">
          <v-card>
            <v-tabs color="#77C4D3">
              <v-tab>日记</v-tab>
              <v-tab>作品</v-tab>
              <v-tab>作品</v-tab>
              <v-tab-item>
                <div class="content-list">
                  <ul>
                    <li class="list-item" v-for="item in 5">
                      <h2 class="content-title">冬天养狗狗的好处就体现出来了</h2>
                      <div class="item-content">
                        <div class="left-img">
                          <v-img
                              max-height="105"
                              max-width="190"
                              src="https://picsum.photos/id/11/500/300"
                              class="fillet"
                          >
                            <template v-slot:placeholder>
                              <div style="text-align: center;line-height: 102px;">
                                <v-progress-circular
                                    indeterminate
                                    color="teal accent-3"
                                ></v-progress-circular>
                              </div>
                            </template>
                          </v-img>
                        </div>
                        <div class="right-text">
                          <p>柴犬的倔强很出名，是非常固执的一种犬种，但是为了避免柴犬出现坏习惯，咱们不得不使用“武力”制服它们。</p>
                        </div>
                        <div class="bottom-btn">
                          <ul>
                            <li>
                              <v-btn icon color="#ED6237"  x-small>
                                <v-icon>mdi-thumb-up</v-icon>
                              </v-btn>
                              <span class="like-number">12</span>
                            </li>
                            <li>
                              <v-btn icon  color="#88C2D1" x-small>
                                <v-icon>mdi-comment-text-outline</v-icon>
                              </v-btn>
                              <span class="like-number">12</span>
                            </li>
                          </ul>
                          <div class="date">
                            2021-01-05
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </v-tab-item>
              <v-tab-item>2222</v-tab-item>
              <v-tab-item>9999</v-tab-item>
            </v-tabs>
          </v-card>
          <div class="pagination-box">
            <v-pagination
                color="#77C4D3"
                v-model="page"
                :length="15"
                :total-visible="7"
            ></v-pagination>
          </div>
        </main>
        <!-- 主要内容 结束 -->
      </div>
    </transition>

    <!-- 入场动画-->
    <div v-if="is_localStorage">
      <transition name="fade">
        <EnterAnimationTwo v-if="is_show_two" />
      </transition>
      <EnterAnimationOne v-if="is_show_one" />
    </div>

    <v-snackbar
        v-model="snackbar"
        timeout="4000"
        color="#77C4D3"
    >
      Hello, 我是青青虾条，欢迎来到我的个人博客哟！
    </v-snackbar>
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
      is_localStorage: true,
      snackbar: false,
      is_show: false,
      is_show_one: false,
      is_show_two: true,
      page:1
    };
  },
  created() {
    //阻止每次刷新都有入场动画
    let date = new Date().getTime();
    let locaDate = localStorage.getItem("animationTime");
    if (date < +locaDate) {
      this.is_show = true;
      this.is_localStorage = false;
    } else {
      //入场动画一小时一次
      localStorage.setItem("animationTime", date + 3600000);
      setTimeout(() => {
        this.is_show_two = false; //第一个动画消失
      }, 2000);
      setTimeout(() => {
        this.is_show_one = true; //第二个动画开始
      }, 2100);
      setTimeout(() => {
        this.is_show = true; //主要内容显示
      }, 2500);
      setTimeout(() => {
        this.is_show_one = false; //第二个动画消失
      }, 3000);
      setTimeout(() => {
        this.snackbar = true; //提示语
      }, 4000);
    }
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

.main-content {
  margin: 1rem auto;
  max-width: 736px;
  //box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
  //border: 1px solid #f0f2f6;
  padding-bottom: 40px;
  /deep/.v-tab{
    min-width: 40px;
  }
  /deep/.v-tabs-bar{
    //border-bottom: 1px solid #F0F2F6;
  }
  .content-list {
    .list-item {
      border-top: 1px solid #f0f2f6;
      padding: 20px;
      .item-content{
        margin-top: 16px;
        .left-img,.right-text{
          display: inline-block;
          vertical-align: text-top;
        }
        .left-img{
          width: 190px;
          padding-right: 20px;
          margin-bottom: 10px;
        }
        .right-text{
          width: 70%;
          font-size: 15px;
          color: #121212;
        }
        .bottom-btn{
          overflow: hidden;
          color: #8590a6;
          .like-number{
            font-size: 16px;
            vertical-align: middle;
            margin-left: 2px;
          }
          ul{
            display: inline-block;
          }
          li{
            display: inline-block;
            margin-right: 10px;
          }
          .date{
            float: right;
          }
        }
      }
    }
    .content-title {
      line-height: 1.6rem;
      color: #121212;
      font-size: 18px;
      font-weight: 600;
      .fillet .v-image__image{
        border-radius: 5px;
      }
    }
  }
  .pagination-box{
    padding-top: 10px;
  }
}

//动画样式
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
  opacity: 0;
}

@media screen and (max-width: 768px) {
  .title h1 {
    font-size: 1.5rem !important;
  }
}
</style>
