import axios from "axios";
import qs from "qs";
// axios.defaults.baseURL = 'https://hd215.api.yesapi.cn';

// 表单请求
axios.formRequest = axios.create({
  baseUrl: "http://api.wjjl.cool",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  transformRequest: [
    function(data = {}) {
      return qs.stringify(data, { arrayFormat: "indices" });
    }
  ]
});
axios.formRequest.interceptors.response.use(
  function(response) {
    console.log(response);

    return response.data;
  },
  function(error) {
    // if (error.response) {
    //   errorCodeHandle(error.response.status);
    // }

    return Promise.reject(error);
  }
);
export default axios;
