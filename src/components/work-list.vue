<template>
  <div class="content-list">
    <div v-for="(item, index) in itemList" :key="item._id">
      <h1 :class="['title', item.projectType === 2 ? 'mtop' : '']">
        {{ item.projectType === 1 ? "移动端项目" : "PC端项目" }}
      </h1>
      <ul>
        <li
          :class="[
            'item',
            item.projectType === 2 && itemList.length - 1 == index
              ? 'mbot'
              : '',
          ]"
        >
          <div>
            <span class="name">{{ item.name }}</span>
            <span class="tag wx">{{ item.tag }}</span>
          </div>
          <div class="brief">
            <p>简介：{{ item.brief }}</p>
            <p class="technology-stack">技术栈：{{ item.technology }}</p>
          </div>
          <div class="exhibition">
            <!-- 查看大图 -->
            <viewer :images="item.previewImg">
              <img
                v-for="(src, index) in item.previewImg"
                :src="src"
                :key="index"
                :class="['viewer-img', showPhone ? 'viewer-img-phone' : '']"
              />
            </viewer>
          </div>
          <div class="preview">
            <p class="preview-title">预览地址</p>
            <div v-if="item.addressType === 1">
              <a
                style="color: #4897f8"
                :href="item.browseAddress"
                target="_blank"
                >{{ item.browseAddress }}</a
              >
            </div>
            <div v-else>
              <!-- 查看大图 -->
              <viewer :images="item.browseAddress">
                <img
                  v-for="(src, index2) in item.browseAddress"
                  :src="src"
                  :key="index2"
                  :class="['viewer-img', showPhone ? 'viewer-img-phone' : '']"
                />
              </viewer>
            </div>
          </div>
          <v-divider
            class="divider"
            v-if="index < itemList.length - 1"
          ></v-divider>
        </li>
      </ul>
    </div>

    <v-snackbar v-model="err" timeout="4000" color="#C33F38">
      出现了一个问题，请稍后在试！
    </v-snackbar>
  </div>
</template>

<script>
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import Vue from "vue";
import { qqxtArticleList } from "@/request/api";
Vue.use(Viewer);
export default {
  name: "WorkList",
  data() {
    return {
      showPhone: this.isPhone,
      itemList: [],
      err: false,
    };
  },
  mounted() {
    this.getItemList();
  },
  methods: {
    onSelsectImages() {},
    getItemList() {
      qqxtArticleList().then((res) => {
        if (res.state === 0) {
          this.itemList = res.data;
        } else {
          this.err = true;
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.viewer-img-style {
  display: inline-block;
  padding: 2px 0;
  margin-right: 5px;
  width: 8rem;
  height: 8rem;
  object-fit: cover;
}
.content-list {
  padding: 10px 15px;
  .title {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 5px;
  }
  .mtop {
    margin-top: 20px;
  }
  .item {
    padding: 0 18px;
    .name {
      font-size: 16px;
      font-weight: 500;
    }
    .tag {
      font-size: 12px;
      color: #fff;
    }
    .wx {
      background: #67d579;
      border: 1px solid #67d579;
      border-radius: 4px;
      padding: 0px 2px;
      margin-left: 5px;
    }
    .brief {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.54);
      .technology-stack {
        font-weight: 500;
        background-image: linear-gradient(to right, red, blue);
        -webkit-background-clip: text;
        color: transparent;
      }
    }
    .exhibition {
      padding-top: 5px;
      .viewer-img {
        .viewer-img-style();
      }
    }
    .divider {
      margin: 20px 0;
    }
  }
  .mbot {
    margin-bottom: 10px;
  }
  .preview {
    .preview-title {
      font-size: 16px;
      font-weight: 500;
      padding: 5px 0 ;
    }
    .viewer-img {
      .viewer-img-style();
    }
  }
}
.viewer-img-phone {
  width: 23% !important;
  height: 5rem !important;
}
</style>
