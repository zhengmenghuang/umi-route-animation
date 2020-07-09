import React from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import router from 'umi/router';

export default class Index extends  React.Component{
  render() {
    return (
      <WingBlank>
        <WhiteSpace />
          <Button type="primary" onClick={() => router.push('/test')}>test</Button>
        <WhiteSpace />
        <WhiteSpace />
          <Button type="primary" onClick={() => router.push('/canvas')}>canvas</Button>
        <WhiteSpace />
      </WingBlank>
    );
  }
}
