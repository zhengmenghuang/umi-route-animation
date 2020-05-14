/**
 * title: 'Tests2'
 * Routes:
 *  - /src/routes/PrivateRoute.tsx
 */
import React from 'react';
import router from 'umi/router';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';

import { connect } from 'dva';

// state 是顶级根参数 todoList是model名字 里面存放这各种数据 data 是具体的dada数据
function mapStateToProps(state: any) {
  return {
    list: state.todoList.data,
  };
}


class Test2 extends React.Component {

  back() {
    router.goBack()
  }

  render() {
    const { list }: any = this.props;
    return (
      <div>
        <WingBlank>
          <WhiteSpace />
          <Button type="primary" onClick={this.back}>back</Button>
          <WhiteSpace />
        </WingBlank>

        <ul>
          {list.map(({id, title}: any) => {
            return <li key={id}>{title}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Test2);
