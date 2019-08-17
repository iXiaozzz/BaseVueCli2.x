import axios from "axios";
import {
  Message
} from "element-ui";
import store from "@/store";
import {
  getToken
} from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 60000 // request timeout
});

// request interceptor
service.interceptors.request.use(config => {
  // Do something before request is sent

  // if (store.getters.language) {
  //   config.headers["language"] = store.getters.language;
  // }
  // if (store.getters.country) {
  //   config.headers["country"] = store.getters.country;
  // }
  // if (store.getters.token) {
  //   if (!getToken()) {
  //     store.dispatch("FedLogOut").then(() => {
  //       location.reload();
  //     });
  //   }
  //   config.headers["servToken"] = getToken(); // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
  // }
  return config;
}, error => {
  // Do something with request error
  Promise.reject(error);
});

// respone interceptor
service.interceptors.response.use(
  response => {
    if (response.headers && (response.headers["content-type"] === "application/octet-stream" ||
        response.headers["content-type"] === "application/vnd.ms-powerpoint" ||
        response.headers["content-type"] === "application/x-msdownload" ||
        response.headers["content-type"] === "application/x-ppt" ||
        response.headers["content-type"] === "application/vnd.ms-excel;charset=utf-8")) {
      return response;
    }
    // const res = response.data;
    // if (res) {
    //   if (res.errorCode === "401") {
    //     // Message({ message: "登录已过期，请重新登录", type: "error", duration: 2000 });
    //     store.dispatch("FedLogOut").then(() => {
    //       location.reload();
    //     });
    //     return;
    //   }
    //   if (res.resultCode !== "1") {
    //     Message({
    //       message: res.resultMsg,
    //       type: "error",
    //       duration: 5 * 1000
    //     });
    //     //  401:Token 过期了
    //     if (res.code === 401) {
    //       // MessageBox.confirm("你已被登出，可以取消继续留在该页面，或者重新登录", "确定登出", {
    //       //   confirmButtonText: "重新登录",
    //       //   cancelButtonText: "取消",
    //       //   type: "warning"
    //       // }).then(() => {
    //       store.dispatch("FedLogOut").then(() => {
    //         location.reload();// 为了重新实例化vue-router对象 避免bug
    //       });
    //       // });
    //     }
    //     return Promise.reject("error");
    //   } else {
    //     return response;
    //   }
    // }
    return response;
  },
  error => {
    // if (error.response) {
    //   if (error.response.status === 401) {
    //     store.dispatch("FedLogOut").then(() => {
    //       location.reload();// 为了重新实例化vue-router对象 避免bug
    //     });
    //     return;
    //   }
    //   // if (error.response.status !== 200) {
    //   //   Message({ message: "系统故障，请联系管理员,错误码：" + error.response.status, type: "error", duration: 3000 });
    //   // }
    // }
    // if (error.response.data.resultMsg) {
    //   Message({
    //     message: error.response.data.resultMsg,
    //     type: "warning",
    //     duration: 5 * 1000
    //   });
    // }
    return Promise.reject(error);
  });

export default service;
