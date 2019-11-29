/**
 * 此文件只运行一次
 * 运行时配置文件，可以在这里扩展运行时的能力，比如修改路由、修改 render 方法等。
 **/

// 配置 dva
export const dva = {
  config: {
    onError(e: any) {
      e.preventDefault();
      console.error(e.message);
    },
  }
};
