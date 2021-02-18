import axios from "@/request/axios";
const api = {
  qqxtArticleList: '/qqxtArticleList',
  qqxtDiaryList: '/qqxtDiaryList',
};

/**
 *  项目列表
 */
export function qqxtArticleList(parameters) {
  return axios.formRequest.post(api.qqxtArticleList, parameters);
}
/**
 *  日记列表
 */
export function qqxtDiaryList(parameters) {
  return axios.formRequest.post(api.qqxtDiaryList, parameters);
}
