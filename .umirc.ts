import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: 'umi 路由转场动画 demo',
      fastClick: true,
      headScripts: ['//res2.wx.qq.com/open/js/jweixin-1.4.0.js'],
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
