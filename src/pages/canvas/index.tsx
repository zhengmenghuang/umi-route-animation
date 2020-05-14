/**
 * title: 'canvas'
 */

import React from 'react';
import styles from './index.less'

export default class Index extends  React.Component{
  myRef: React.RefObject<HTMLCanvasElement>;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <canvas className={styles.myCanvas} ref={this.myRef}>对不起，您的浏览器不支持canvas</canvas>;
  }
}
