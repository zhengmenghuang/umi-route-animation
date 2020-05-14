/**
 * axios.defaults  修改默认操作
 */

import axios from 'axios'

export default class Interceptors {
  static init(){
    // 拦截请求
    axios.interceptors.request.use(req => {
      req.url = `https://cnodejs.org/${req.url}`;
      return req;
    }, err => {
      return Promise.reject(err);
    });

    // 拦截回应
    axios.interceptors.response.use(res => {
      return res.data;
    }, err => {
      return Promise.reject(err);
    });
  }
};
