import React from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import router from 'umi/router';

export default class Index extends  React.Component{
  goTest() {
    router.push('/test')
  }

  render() {
    return (
      <WingBlank>
        <WhiteSpace />
        <Button type="primary" onClick={this.goTest}>test</Button>
        <WhiteSpace />
      </WingBlank>
    );
  }
}
