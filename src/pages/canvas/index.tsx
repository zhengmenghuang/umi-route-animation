/**
 * title: 'canvas'
 */

import React from 'react';
import styles from './index.less';
import { State } from './index.d'

let timer: any = null;

export default class Index extends  React.Component<{}, State>{
  canvasRef: React.RefObject<HTMLCanvasElement>;
  boardAreaRef: React.RefObject<HTMLDivElement>;
  currentPostion: { x: number, y: number };
  ctx?: CanvasRenderingContext2D | null;
  constructor(props: any) {
    super(props);
    this.canvasRef = React.createRef();
    this.boardAreaRef = React.createRef();
    this.currentPostion = {x: 0, y: 0};

    // 触发页面渲染的东西必须放在这里面
    this.state = {
      canvansSize: {x: 0, y: 0}
    }
  }

  // 生命周期 页面加载完成
  componentDidMount() {
    // 设置宽高
    this.boardAreaRef.current && (this.setState({
      canvansSize: {
        x: this.boardAreaRef.current.offsetWidth,
        y: this.boardAreaRef.current.offsetHeight
      }
    }))

    // 获取白板
    this.canvasRef.current && (this.ctx = this.canvasRef.current.getContext('2d'));
  }

  // 画笔开始
  onTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    this.currentPostion = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    }
  }

  // 画笔移动
  onTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const event = e.touches[0];
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        if (!this.ctx) return;
        // 设置画笔颜色
        this.ctx.strokeStyle = '#ff0000';
        // 设置线条宽度
        this.ctx.lineWidth = 2;
        // 开始绘画
        this.ctx.beginPath();
        this.ctx.moveTo(this.currentPostion.x, this.currentPostion.y);
        this.ctx.lineTo(event.clientX, event.clientY);
        this.ctx.stroke();

        this.currentPostion = {
          x: event.clientX,
          y: event.clientY
        };
      }, 25)
    }
  }

  // 画笔结束
  onTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {

  }


  render() {
    const { canvansSize } = this.state;

    return (
      <div className={styles.boardArea} ref={this.boardAreaRef}>
        <canvas width={canvansSize.x} height={canvansSize.y} className={styles.board} ref={this.canvasRef} onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}>
          对不起，您的浏览器不支持canvas
        </canvas>
      </div>
    );
  }
}
