/**
 * title: 404
 */

import { Button, Result } from 'antd';
import React from 'react';
import router from 'umi/router';

export default class NoFoundPage extends React.Component{
  render() {
    return(
      <Result
        status="404"
        title="404"
        subTitle="对不起，您访问的页面不存在"
        extra={<Button type="primary" onClick={() => router.push('/')}> 首页 </Button>}
      />
    )
  }
}

