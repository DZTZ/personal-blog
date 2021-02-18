<template>
  <div class="content-list">
    <ul>
      <li class="list-item" v-for="(item, index) in list" :key="index">
        <h2 class="content-title">{{ item.title }}</h2>
        <div class="item-content">
          <!-- <div class="left-img">
            <v-img
              max-height="105"
              max-width="190"
              src="https://dztz.github.io/personal-blog/img/bg.376f0eea.png"
              class="fillet"
            >
              <template v-slot:placeholder>
                <div style="text-align: center; line-height: 102px">
                  <v-progress-circular
                    indeterminate
                    color="teal accent-3"
                  ></v-progress-circular>
                </div>
              </template>
            </v-img>
          </div> -->
          <div class="right-text">
            <p v-html="item.htmlText"></p>
          </div>
          <div class="bottom-btn">
            <ul>
              <li>
                <img :src="chakan" class="chakan" />
                <span :class="['like-number', showPhone ? 'like-number-p' : '']"
                  >0</span
                >
              </li>
              <li>
                <v-btn icon color="#88C2D1" x-small>
                  <v-icon>mdi-comment-text-outline</v-icon>
                </v-btn>
                <span :class="['like-number', showPhone ? 'like-number-p' : '']"
                  >0</span
                >
              </li>
            </ul>
            <div class="date">
              <v-icon class="dete-icon">mdi-clock-time-nine-outline</v-icon>
              {{ item.createDate }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { qqxtDiaryList } from "@/request/api";
import moment from "moment/moment";
export default {
  name: "DiaryList",
  data() {
    return {
      showPhone: this.isPhone,
      chakan: require("@/assets/img/chakan.png"),
      list: [],
    };
  },
  created() {
    this.getList(1);
  },
  methods: {
    getList(page) {
      qqxtDiaryList({ page, pageSize: 5 }).then((res) => {
        if (res.state === 0) {
          let list = res.data.list;
          list.map((item) => {
            item.createDate = moment(item.createDate).format(
              "YYYY-MM-DD HH:mm"
            );
            return item;
          });
          this.list = list;
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.content-list {
  .list-item {
    border-top: 1px solid #f0f2f6;
    padding: 20px 20px 10px 20px;
    .item-content {
      .left-img,
      .right-text {
        display: inline-block;
        vertical-align: text-top;

        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      .left-img {
        width: 190px;
        padding-right: 20px;
        margin-bottom: 10px;
      }
      .right-text {
        // width: 70%;
        font-size: 15px;
        color: #121212;
        margin: 6px 0;
      }
      .bottom-btn {
        overflow: hidden;
        color: #8590a6;
        margin-top: 5px;
        .like-number {
          font-size: 1rem;
          vertical-align: middle;
          margin-left: 2px;
        }
        .like-number-p {
          vertical-align: top;
        }
        ul {
          display: inline-block;
        }
        li {
          display: inline-block;
          margin-right: 10px;
        }
        .date {
          float: right;
          .dete-icon {
            color: #8690a4;
            font-size: 18px;
            vertical-align: text-bottom;
          }
        }
        .chakan {
          width: 24px;
          margin-right: 2px;
        }
      }
    }
  }
  .content-title {
    line-height: 1.6rem;
    color: #121212;
    font-size: 18px;
    font-weight: 600;
    .fillet .v-image__image {
      border-radius: 5px;
    }
  }
}
</style>
