/**
 * 此文件只运行一次
 * 此文件会在入口文件的最前面被自动引入，可以在这里加载补丁，做一些初始化的操作等。
 **/

// 生效路由拦截器
import Interceptors from './interceptors';
Interceptors.init();
